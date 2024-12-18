import { useEffect, useState } from 'react';
import moment from 'moment';
import { Col, RangePicker, Row, Title, Button } from 'components/atoms/index';
import { getDataWaterDischarge, getDataWaterIntake, getPermits } from 'services/apis/marz';
import {
  Tooltip,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import chartOfflineData from '../../data/chart-data.json';

const CustomLineTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className='custom-tooltip'
        style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}
      >
        <p className='label'>{`Name: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value} k m³/yr`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DashboardCharts = ({
  engBMO,
  setCharLoading,
  bmo,
  exportData,
  engBMOValues,
  disabledDate,
  notConnected,
}) => {
  const [rangeYears, setRangeYears] = useState([2022, 2023, 2024]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (bmo.length && !notConnected) {
      setCharLoading(true);
      const allDone = { permits: false, dataWaterIntake: false, dataWaterDischarge: false };
      Promise.all(
        rangeYears.reduce(
          (acc, yr) => [
            ...acc,
            ...bmo.reduce((ac, bm) => [...ac, getPermits({ bmoid: bm.internal_id, year: yr })], []),
          ],
          []
        )
      )
        .then(data => {
          const convertData = data
            .map(el => el?.data)
            .flat()
            .reduce(
              (acc, value) => ({
                ...acc,
                [value.yearA]: {
                  ...(acc?.[value.yearA] ? acc[value.yearA] : {}),
                  [engBMO[value.basinName]]: acc?.[value.yearA]?.[engBMO[value.basinName]]
                    ? acc[value.yearA][engBMO[value.basinName]] + 1
                    : 1,
                },
              }),
              {}
            );
          setChartData(prev => ({
            ...prev,
            ...Object.entries(convertData).reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key]: { ...(prev?.[key] ? prev[key] : {}), permitsQuantity: value },
              }),
              {}
            ),
          }));
          allDone.permits = true;
          if (Object.values(allDone).every(el => el === true)) {
            setCharLoading(false);
          }
        })
        .catch(e => {
          // eslint-disable-next-line no-console
          console.error(e);
        });
      Promise.all(
        rangeYears.reduce(
          (acc, yr) => [
            ...acc,
            ...bmo.reduce(
              (ac, bm) => [...ac, getDataWaterIntake({ bmoid: bm.internal_id, year: yr })],
              []
            ),
          ],
          []
        )
      )
        .then(data => {
          const convertData = data
            .map(el => el?.data)
            .flat()
            .reduce(
              (acc, value) => ({
                ...acc,
                [value.yearA]: {
                  ...(acc?.[value.yearA] ? acc[value.yearA] : {}),
                  [engBMO[value.basinName]]:
                    (acc?.[value.yearA]?.[engBMO[value.basinName]]
                      ? acc[value.yearA][engBMO[value.basinName]]
                      : 0) + value.totalQuantity,
                },
              }),
              {}
            );
          setChartData(prev => ({
            ...prev,
            ...Object.entries(convertData).reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key]: { ...(prev?.[key] ? prev[key] : {}), dataWaterIntakeQuantity: value },
              }),
              {}
            ),
          }));
          allDone.dataWaterIntake = true;
          if (Object.values(allDone).every(el => el === true)) {
            setCharLoading(false);
          }
        })
        .catch(e => {
          // eslint-disable-next-line no-console
          console.error(e);
        });
      Promise.all(
        rangeYears.reduce(
          (acc, yr) => [
            ...acc,
            ...bmo.reduce(
              (ac, bm) => [...ac, getDataWaterDischarge({ bmoid: bm.internal_id, year: yr })],
              []
            ),
          ],
          []
        )
      )
        .then(data => {
          const convertData = data
            .map(el => el?.data)
            .flat()
            .reduce(
              (acc, value) => ({
                ...acc,
                [value.yearA]: {
                  ...(acc?.[value.yearA] ? acc[value.yearA] : {}),
                  [engBMO[value.basinName]]:
                    (acc?.[value.yearA]?.[engBMO[value.basinName]]
                      ? acc[value.yearA][engBMO[value.basinName]]
                      : 0) + value.totalQuantity,
                },
              }),
              {}
            );
          setChartData(prev => ({
            ...prev,
            ...Object.entries(convertData).reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key]: { ...(prev?.[key] ? prev[key] : {}), dataDataWaterDischarge: value },
              }),
              {}
            ),
          }));
          allDone.dataWaterDischarge = true;
          if (Object.values(allDone).every(el => el === true)) {
            setCharLoading(false);
          }
        })
        .catch(e => {
          // eslint-disable-next-line no-console
          console.error(e);
        });
    } else if (notConnected && bmo.length) {
      setChartData(rangeYears.reduce((acc, el) => ({ ...acc, [el]: chartOfflineData[el] }), {}));
    }
  }, [bmo, rangeYears, notConnected]);

  return (
    <>
      <RangePicker
        picker='year'
        disabledDate={disabledDate}
        defaultValue={[rangeYears[0], rangeYears[rangeYears.length - 1]].map(el =>
          moment(el, 'YYYY')
        )}
        onChange={e => {
          setRangeYears(
            Array.from(
              {
                length:
                  Number(moment(e[1]).format('YYYY')) - Number(moment(e[0]).format('YYYY')) + 1,
              },
              (_, i) => Number(moment(e[0]).format('YYYY')) + i
            )
          );
          setChartData({});
        }}
        width='200px'
        mb={10}
      />
      <Row gutter={[32, 32]}>
        <Col span={24}>
          <Title level={3}>Chart of BMOs Water Discharge Quantity</Title>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer>
              <LineChart
                width={730}
                height={250}
                data={Object.entries(chartData).map(([key, value]) => ({
                  name: key,
                  ...value.dataDataWaterDischarge,
                }))}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip content={<CustomLineTooltip />} />
                <Legend />
                {[
                  { name: [0], color: 'black' },
                  { name: engBMOValues[1], color: 'yellow' },
                  { name: engBMOValues[2], color: 'red' },
                  { name: engBMOValues[3], color: 'blue' },
                  { name: engBMOValues[4], color: 'pink' },
                  { name: engBMOValues[5], color: 'orange' },
                ].map(el => (
                  <Line type='monotone' dataKey={el.name} key={el.name} stroke={el.color} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col span={24}>
          <Title level={3}>Chart of BMOs Water Intake Quantity</Title>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer>
              <LineChart
                width={730}
                height={250}
                data={Object.entries(chartData).map(([key, value]) => ({
                  name: key,
                  ...value.dataWaterIntakeQuantity,
                }))}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip content={<CustomLineTooltip />} />
                <Legend />
                {[
                  { name: engBMOValues[0], color: 'black' },
                  { name: engBMOValues[1], color: 'yellow' },
                  { name: engBMOValues[2], color: 'red' },
                  { name: engBMOValues[3], color: 'blue' },
                  { name: engBMOValues[4], color: 'pink' },
                  { name: engBMOValues[5], color: 'orange' },
                ].map(el => (
                  <Line type='monotone' dataKey={el.name} key={el.name} stroke={el.color} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col span={24}>
          <Title level={3}>Chart of BMOs Water Permits Quantity</Title>
          <div style={{ width: '100%', height: '300px' }}>
            <ResponsiveContainer>
              <LineChart
                width={730}
                height={250}
                data={Object.entries(chartData).map(([key, value]) => ({
                  name: key,
                  ...value.permitsQuantity,
                }))}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                {[
                  { name: engBMOValues[0], color: 'black' },
                  { name: engBMOValues[1], color: 'yellow' },
                  { name: engBMOValues[2], color: 'red' },
                  { name: engBMOValues[3], color: 'blue' },
                  { name: engBMOValues[4], color: 'pink' },
                  { name: engBMOValues[5], color: 'orange' },
                ].map(el => (
                  <Line type='monotone' dataKey={el.name} key={el.name} stroke={el.color} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col span={24}>
          <Button onClick={() => exportData(chartData, 'chart')} margin={'32px 0 0 0'}>
            Export Data
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default DashboardCharts;
