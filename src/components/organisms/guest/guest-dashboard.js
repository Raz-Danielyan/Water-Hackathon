/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Suspense, useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  getBmo,
  getDataWaterDischarge,
  getDataWaterintake,
  getIntakeDischargePoints,
  getMarz,
  getPermits,
} from 'services/apis/marz';
import useApiCall from 'utils/hooks/useApiCall';
import { Typography } from 'antd';
import { Spin } from 'antd/lib/index';
import { centroid } from 'turf/index';
import { Col, DatePicker, Paragraph, RangePicker, Row } from 'components/atoms/index';
import Button from 'components/atoms/Button/index';
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from 'recharts';
import moment from 'moment';
import geojsonData from '../../../assets/am.json';

const { Title } = Typography;

const totalQuantit = data => {
  return data.reduce((acc, item) => acc + item.totalQuantity, 0);
};
const listOfNames = data => {
  return [...new Set(data.map(el => el.waterSource))];
};
const totalKeyCount = (data, key, name) => {
  return data.filter(el => el?.[key] === name).length;
};

const engMarz = {
  Արագածոտն: 'Aragatsotn',
  Արարատ: 'Ararat',
  Արմավիր: 'Armavir',
  Գեղարքունիք: 'Gegharkunik',
  Երևան: 'Erevan',
  Լոռի: 'Lori',
  Կոտայք: 'Kotayk',
  Շիրակ: 'Shirak',
  Սյունիք: 'Syunik',
  'Վայոց ձոր': 'Vayots Dzor',
  Տավուշ: 'Tavush',
};

const CustomTooltip = ({ payload, continuem = true }) => {
  return (
    <div>
      <div className='ant-popover-arrow' />
      <div>
        <b>{payload?.[0]?.payload?.name}</b>
        <span>
          <p className='desc'>
            <small>{payload?.[0]?.payload?.value}</small>
            {continuem && ' հազ. խոր.մ/տարի`'}
          </p>
        </span>
      </div>
    </div>
  );
};

const ProvinceLabels = React.memo(({ data, marzData }) => {
  const map = useMap();
  const markers = React.useRef([]);

  useEffect(() => {
    data.features.forEach(feature => {
      const center = centroid(feature);
      const [lng, lat] = center.geometry.coordinates;

      const marker = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'province-label',
          html: `<div style="font-size:12px; color:blue; white-space: nowrap;">${
            feature.properties.name
          }</div>
        ${
          marzData?.[feature.properties.name]
            ? `<div style="font-size:12px; color:red; white-space: nowrap;"> ${Math.round(
                marzData?.[feature.properties.name].dataWaterDischargeQuanitity
              )} հազ. խոր.մ/տարի</div>
              <div style="font-size:12px; color:green; white-space: nowrap;"> ${Math.round(
                marzData?.[feature.properties.name].dataWaterintakeQuanitity
              )} հազ. խոր.մ/տարի</div>
               <div style="font-size:12px; color:black; white-space: nowrap;"> ${Math.round(
                 marzData?.[feature.properties.name].dataResourcesWaterSourcesLength
               )}</div>
              `
            : ''
        }`,
        }),
      }).addTo(map);

      markers.current.push(marker);
    });
    return () => {
      markers.current.forEach(marker => map.removeLayer(marker));
      markers.current = [];
    };
  }, [data, marzData, map]);

  return null;
});

const GuestDashboard = () => {
  const [marz, , marzCall] = useApiCall(getMarz);
  const [, , permitsCall] = useApiCall(getPermits);
  const [, , intakeDischargePointsCall] = useApiCall(getIntakeDischargePoints);
  const [, , dataWaterintakeCall] = useApiCall(getDataWaterintake);
  const [, , dataWaterDischargeCall] = useApiCall(getDataWaterDischarge);
  const [bmo, , bmoCall] = useApiCall(getBmo);
  const [seperetedDataPerBMO, setSeperetedDataPerBMO] = useState({});
  const [globaledBmoData, setGlobaledBmoData] = useState({});
  const [sepetetedDataPerMarz, setSepetetedDataPerMarz] = useState({});
  const [year, setYear] = useState('2024');
  const [rangeYears, setRangeYears] = useState([2022, 2023, 2024]);
  const [chartData, setChartData] = useState({});
  const [charLoading, setCharLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bmoCall();
    marzCall();

    return () => {
      const m = L.DomUtil.get('map');
      if (m) {
        m._leaflet_id = null;
      }
    };
  }, []);

  useEffect(() => {
    if (bmo.length) {
      setCharLoading(true);
      const allDone = { permits: false, dataWaterintake: false, dataWaterDischarge: false };
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
          const converData = data
            .map(el => el?.data)
            .flat()
            .reduce(
              (acc, value) => ({
                ...acc,
                [value.yearA]: {
                  ...(acc?.[value.yearA] ? acc[value.yearA] : {}),
                  [value.basinName]: acc?.[value.yearA]?.[value.basinName]
                    ? acc[value.yearA][value.basinName] + 1
                    : 1,
                },
              }),
              {}
            );
          setChartData(prev => ({
            ...prev,
            ...Object.entries(converData).reduce(
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
              (ac, bm) => [...ac, getDataWaterintake({ bmoid: bm.internal_id, year: yr })],
              []
            ),
          ],
          []
        )
      )
        .then(data => {
          const converData = data
            .map(el => el?.data)
            .flat()
            .reduce(
              (acc, value) => ({
                ...acc,
                [value.yearA]: {
                  ...(acc?.[value.yearA] ? acc[value.yearA] : {}),
                  [value.basinName]:
                    (acc?.[value.yearA]?.[value.basinName]
                      ? acc[value.yearA][value.basinName]
                      : 0) + value.totalQuantity,
                },
              }),
              {}
            );
          setChartData(prev => ({
            ...prev,
            ...Object.entries(converData).reduce(
              (acc, [key, value]) => ({
                ...acc,
                [key]: { ...(prev?.[key] ? prev[key] : {}), dataWaterintakeQuanitity: value },
              }),
              {}
            ),
          }));
          allDone.dataWaterintake = true;
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
          const converData = data
            .map(el => el?.data)
            .flat()
            .reduce(
              (acc, value) => ({
                ...acc,
                [value.yearA]: {
                  ...(acc?.[value.yearA] ? acc[value.yearA] : {}),
                  [value.basinName]:
                    (acc?.[value.yearA]?.[value.basinName]
                      ? acc[value.yearA][value.basinName]
                      : 0) + value.totalQuantity,
                },
              }),
              {}
            );
          setChartData(prev => ({
            ...prev,
            ...Object.entries(converData).reduce(
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
    }
  }, [bmo, rangeYears]);

  useEffect(() => {
    if (bmo?.length) {
      for (let i = 0; i < bmo.length; i += 1) {
        setLoading(true);
        const allLoaded = {
          permitsCall: false,
          intakeDischargePointsCall: false,
          dataWaterintakeCall: false,
          dataWaterDischargeCall: false,
        };
        permitsCall({ bmoid: bmo[i].internal_id, year }, data => {
          setSeperetedDataPerBMO(prev => ({
            ...prev,
            [bmo[i].name]: { ...(prev?.[bmo[i].name] || {}), permits: data },
          }));
          allLoaded.permitsCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
        intakeDischargePointsCall({ bmoid: bmo[i].internal_id }, data => {
          setSeperetedDataPerBMO(prev => ({
            ...prev,
            [bmo[i].name]: { ...(prev?.[bmo[i].name] || {}), intakeDischargePoints: data },
          }));
          allLoaded.intakeDischargePointsCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
        dataWaterintakeCall({ bmoid: bmo[i].internal_id, year }, data => {
          setSeperetedDataPerBMO(prev => ({
            ...prev,
            [bmo[i].name]: { ...(prev?.[bmo[i].name] || {}), dataWaterintake: data },
          }));
          allLoaded.dataWaterintakeCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
        dataWaterDischargeCall({ bmoid: bmo[i].internal_id, year }, data => {
          setSeperetedDataPerBMO(prev => ({
            ...prev,
            [bmo[i].name]: { ...(prev?.[bmo[i].name] || {}), dataWaterDischarge: data },
          }));
          allLoaded.dataWaterDischargeCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
      }
    }
  }, [bmo, year]);

  useEffect(() => {
    const areAllFileed = Object.values(seperetedDataPerBMO)
      .map(el => Object.keys(el).length === 4)
      .every(val => val === true);
    if (Object.keys(seperetedDataPerBMO).length === bmo.length && areAllFileed && bmo.length > 0) {
      setGlobaledBmoData(
        Object.entries(seperetedDataPerBMO).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: {
              dataWaterDischargeQuanitity: totalQuantit(value.dataWaterDischarge || []),
              dataWaterintakeQuanitity: totalQuantit(value?.dataWaterintake || []),
              dataResourcesWaterSources: listOfNames([
                ...(value?.dataWaterDischarge || []),
                ...(value?.dataWaterintake || []),
              ]),
              dataResourcesWaterSourcesLength: listOfNames([
                ...(value.dataWaterDischarge || []),
                ...(value.dataWaterintake || []),
              ]).length,
              TotalJrar: totalKeyCount(
                value?.intakeDischargePoints || [],
                'typeOfWaterUse',
                'Ջրառ'
              ),
              TotalJrarHeracum: totalKeyCount(
                value?.intakeDischargePoints || [],
                'typeOfWaterUse',
                'Ջրահեռացում'
              ),
              totalPermists: (value?.permits || []).length,
            },
          }),
          {}
        )
      );
      const allDatas = Object.values(seperetedDataPerBMO).reduce(
        (acc, value) => [
          ...acc,
          ...(value?.dataWaterDischarge
            ? value.dataWaterDischarge.map(el => ({ ...el, dataWaterDischarge: true }))
            : []),
          ...(value?.dataWaterintake
            ? value.dataWaterDischarge.map(el => ({ ...el, dataWaterintake: true }))
            : []),
        ],
        []
      );
      let createdMarzDatas = {};

      for (let i = 0; i < marz.length; i += 1) {
        createdMarzDatas = {
          ...createdMarzDatas,
          [engMarz[marz[i]?.name]]: allDatas.filter(
            el => el?.marz_Internal_ID === marz[i]?.internal_id
          ),
        };
      }

      setSepetetedDataPerMarz(
        Object.entries(createdMarzDatas).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: {
              dataWaterDischargeQuanitity: totalQuantit(value.filter(el => el?.dataWaterDischarge)),
              dataWaterintakeQuanitity: totalQuantit(value.filter(el => el?.dataWaterintake)),
              dataResourcesWaterSources: listOfNames(value),
              dataResourcesWaterSourcesLength: listOfNames(value).length,
            },
          }),
          {}
        )
      );
    }
  }, [seperetedDataPerBMO]);

  const exportData = (data, name) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = `${name}.json`;

    link.click();
  };

  const disabledDate = current => {
    // Disable dates before 2000 and after 2024
    return (
      current && (current.isBefore(moment('2000-01-01')) || current.isAfter(moment('2024-12-31')))
    );
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Title>Tim 2 Prestentetion of Data Reserch of cadastre API</Title>
        <DatePicker
          picker='year'
          onChange={e => {
            setYear(moment(e).format('YYYY'));
            setSeperetedDataPerBMO({});
            setGlobaledBmoData({});
            setSepetetedDataPerMarz({});
          }}
          defaultValue={moment(year, 'YYYY')}
          width='200px'
          mb={10}
          disabledDate={disabledDate}
        />
        <Row gutter={[15, 32]}>
          <Col span={24}>
            <Title level={3}>MAP presentation of cadastre Data</Title>
            <Col span={24} border_radius={'32px'} padding='16px 32px' back_color='rgb(229 229 220)'>
              <Title level={5} style={{ color: 'red' }}>
                In Red text in The Map you'll see Total Water Discharge Quanitity per Marz
              </Title>
              <Title level={5} style={{ color: 'green' }}>
                In Grenn text in The Map you'll see Total Water Intake Quanitity per Marz
              </Title>
              <Title level={5} style={{ color: 'black' }}>
                In Black text in The Map you'll see Total Water Sources Quantity per Marz
              </Title>
              <MapContainer
                center={[40.1792, 44.4991]}
                zoom={8}
                style={{ height: '600px', width: '100%' }}
                key='stable-map-key'
              >
                <Suspense>
                  <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <GeoJSON
                    data={geojsonData}
                    style={{
                      color: '#3388ff',
                      weight: 2,
                      fillOpacity: 0.2,
                    }}
                  />
                  <ProvinceLabels data={geojsonData} marzData={sepetetedDataPerMarz} />
                </Suspense>
              </MapContainer>
              <Button
                onClick={() => exportData(sepetetedDataPerMarz, 'marz')}
                margin={'32px 0 0 0'}
              >
                Export Data
              </Button>
            </Col>
          </Col>
          <Col span={24}>
            <Title level={3}>
              Data presnetetion per Marz and BMO <b>please Hover the Charts for Data</b>
            </Title>
            <Col span={24} border_radius={'32px'} padding='16px 32px' back_color='rgb(229 229 220)'>
              <Spin spinning={charLoading}>
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
                            Number(moment(e[1]).format('YYYY')) -
                            Number(moment(e[0]).format('YYYY')) +
                            1,
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
                    <Title level={3}>Chart of BMOs Water Dischard Quantity</Title>
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
                      <Tooltip />
                      <Legend />
                      {[
                        { name: 'Ախուրյան', color: 'black' },
                        { name: 'Արարատյան', color: 'yellow' },
                        { name: 'Հարավային', color: 'red' },
                        { name: 'Հյուսիսային', color: 'blue' },
                        { name: 'Հրազդան', color: 'pink' },
                        { name: 'Սևան', color: 'orange' },
                      ].map(el => (
                        <Line type='monotone' dataKey={el.name} key={el.name} stroke={el.color} />
                      ))}
                    </LineChart>
                  </Col>
                  <Col span={24}>
                    <Title level={3}>Chart of BMOs Water Intake Quantity</Title>
                    <LineChart
                      width={730}
                      height={250}
                      data={Object.entries(chartData).map(([key, value]) => ({
                        name: key,
                        ...value.dataWaterintakeQuanitity,
                      }))}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis dataKey='name' />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      {[
                        { name: 'Ախուրյան', color: 'black' },
                        { name: 'Արարատյան', color: 'yellow' },
                        { name: 'Հարավային', color: 'red' },
                        { name: 'Հյուսիսային', color: 'blue' },
                        { name: 'Հրազդան', color: 'pink' },
                        { name: 'Սևան', color: 'orange' },
                      ].map(el => (
                        <Line type='monotone' dataKey={el.name} key={el.name} stroke={el.color} />
                      ))}
                    </LineChart>
                  </Col>
                  <Col span={24}>
                    <Title level={3}>Chart of BMOs Water Permits Quantity</Title>
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
                        { name: 'Ախուրյան', color: 'black' },
                        { name: 'Արարատյան', color: 'yellow' },
                        { name: 'Հարավային', color: 'red' },
                        { name: 'Հյուսիսային', color: 'blue' },
                        { name: 'Հրազդան', color: 'pink' },
                        { name: 'Սևան', color: 'orange' },
                      ].map(el => (
                        <Line type='monotone' dataKey={el.name} key={el.name} stroke={el.color} />
                      ))}
                    </LineChart>
                  </Col>
                  <Col span={24}>
                    <Button onClick={() => exportData(chartData, 'chart')} margin={'32px 0 0 0'}>
                      Export Data
                    </Button>
                  </Col>
                </Row>
              </Spin>
            </Col>
          </Col>
          <Col span={24}>
            <Title level={3}>
              Data presnetetion per Marz and BMO <b>please Hover the Charts for Data</b>
            </Title>
            <Col span={24} border_radius={'32px'} padding='16px 32px' back_color='rgb(229 229 220)'>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Title level={4}>Pie represts Marzs and BMOs Water Discharge Quanitity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globaledBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterDischargeQuanitity),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Pie
                        data={Object.entries(sepetetedDataPerMarz).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterDischargeQuanitity),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        innerRadius={70}
                        outerRadius={90}
                        fill='#82ca9d'
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col span={12}>
                  <Title level={4}>Pie represts Marzs and BMOs Water Intake Quanitity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globaledBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterintakeQuanitity),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Pie
                        data={Object.entries(sepetetedDataPerMarz).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterintakeQuanitity),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        innerRadius={70}
                        outerRadius={90}
                        fill='#82ca9d'
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col span={12}>
                  <Title level={4}>Pie represts Marzs and BMOs Water Sources Quanitity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globaledBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataResourcesWaterSourcesLength),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip continuem={false} />} continuem={false} />
                      <Pie
                        data={Object.entries(sepetetedDataPerMarz).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataResourcesWaterSourcesLength),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        innerRadius={70}
                        outerRadius={90}
                        fill='#82ca9d'
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col span={12}>
                  <Title level={4}>Pie represts BMOs Water Consumption Quanitity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globaledBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.TotalJrar),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col span={12}>
                  <Title level={4}>Pie represts BMOs removing the water intake Quanitity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globaledBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.TotalJrarHeracum),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col span={12}>
                  <Title level={4}>Pie represts BMOs permits Quanitity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globaledBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.totalPermists),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip continuem={false} />} continuem={false} />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col span={24}>
                  <Title level={4}>All Water Resouces Names</Title>
                  <Paragraph fw={700}>Per BMO -- </Paragraph>
                  {Object.entries(globaledBmoData).length
                    ? Object.entries(globaledBmoData).map(([key, value]) => (
                        <div style={{ marginTop: 5 }} key={key}>
                          <br></br>
                          <b>{key}</b>--
                          {`${Object.entries(value)
                            .filter(([k]) => k === 'dataResourcesWaterSources')
                            .map(([, el]) => el)
                            .join(',')}`}
                        </div>
                      ))
                    : ''}
                  <Paragraph fw={700}>Per Marz --</Paragraph>
                  {Object.entries(sepetetedDataPerMarz).length
                    ? Object.entries(sepetetedDataPerMarz).map(([key, value]) => (
                        <div style={{ marginTop: 5 }} key={key}>
                          <br></br>
                          <b>{key}</b>--
                          {`${Object.entries(value)
                            .filter(([k]) => k === 'dataResourcesWaterSources')
                            .map(([, el]) => el)
                            .join(',')}`}
                        </div>
                      ))
                    : ''}
                </Col>
                <Button onClick={() => exportData(globaledBmoData, 'BMO')} margin={'32px 0 0 0'}>
                  Export Data
                </Button>
              </Row>
            </Col>
          </Col>
        </Row>
      </Spin>
    </div>
  );
};

export default GuestDashboard;
