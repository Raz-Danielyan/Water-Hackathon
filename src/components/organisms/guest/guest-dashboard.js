/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import {
  getBmo,
  getDataWaterDischarge,
  getDataWaterIntake,
  getIntakeDischargePoints,
  getMarz,
  getPermits,
} from 'services/apis/marz';
import useApiCall from 'utils/hooks/useApiCall';
import { Typography } from 'antd';
import { Spin } from 'antd/lib/index';
import { Col, DatePicker, Divider, Paragraph, Row } from 'components/atoms/index';
import Button from 'components/atoms/Button/index';
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import moment from 'moment';
import DashboardMap from 'components/molecules/dashboard-map';
import DashboardCharts from 'components/molecules/dashbaord-charts';
import placesNames from '../../../data/places-names.json';
import bmoData from '../../../data/bmo-data.json';
import marzData from '../../../data/marz-data.json';

const { Title } = Typography;

const totalQuantity = data => {
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

const engBMO = {
  Ախուրյան: 'Akhuryan',
  Արարատյան: 'Araratyan',
  Հարավային: 'Southern',
  Հյուսիսային: 'Northern',
  Հրազդան: 'Hrazdan',
  Սևան: 'Sevan',
};

const engBMOValues = Object.values(engBMO);

const CustomTooltip = ({ payload, detailedSource = true }) => {
  return (
    <div>
      <div className='ant-popover-arrow' />
      <div>
        <b>{payload?.[0]?.payload?.name}</b>
        <span>
          <p className='desc'>
            <small>{payload?.[0]?.payload?.value}</small>
            {detailedSource && ' k m³/yr`'}
          </p>
        </span>
      </div>
    </div>
  );
};

const GuestDashboard = () => {
  const [marz, , marzCall, , , setMarz] = useApiCall(getMarz);
  const [, , permitsCall] = useApiCall(getPermits);
  const [, , intakeDischargePointsCall] = useApiCall(getIntakeDischargePoints);
  const [, , dataWaterIntakeCall] = useApiCall(getDataWaterIntake);
  const [, , dataWaterDischargeCall] = useApiCall(getDataWaterDischarge);
  const [bmo, , bmoCall, , , setBmo] = useApiCall(getBmo);
  const [separatedDataPerBMO, setSeparatedDataPerBMO] = useState({});
  const [globalBmoData, setGlobalBmoData] = useState({});
  const [separatedDataPerMarz, setSeparatedDataPerMarz] = useState({});
  const [year, setYear] = useState('2024');
  const [charLoading, setCharLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notConnected, setNotConnected] = useState(false);

  useEffect(() => {
    bmoCall(
      {},
      () => {},
      () => {
        setNotConnected(true);
        setMarz(placesNames.marz);
        setBmo(placesNames.bmo);
      }
    );
    marzCall();
  }, []);

  useEffect(() => {
    if (bmo?.length && !notConnected) {
      for (let i = 0; i < bmo.length; i += 1) {
        setLoading(true);
        const allLoaded = {
          permitsCall: false,
          intakeDischargePointsCall: false,
          dataWaterIntakeCall: false,
          dataWaterDischargeCall: false,
        };
        permitsCall({ bmoid: bmo[i].internal_id, year }, data => {
          setSeparatedDataPerBMO(prev => ({
            ...prev,
            [engBMO[bmo[i].name]]: { ...(prev?.[engBMO[bmo[i].name]] || {}), permits: data },
          }));
          allLoaded.permitsCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
        intakeDischargePointsCall({ bmoid: bmo[i].internal_id }, data => {
          setSeparatedDataPerBMO(prev => ({
            ...prev,
            [engBMO[bmo[i].name]]: {
              ...(prev?.[engBMO[bmo[i].name]] || {}),
              intakeDischargePoints: data,
            },
          }));
          allLoaded.intakeDischargePointsCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
        dataWaterIntakeCall({ bmoid: bmo[i].internal_id, year }, data => {
          setSeparatedDataPerBMO(prev => ({
            ...prev,
            [engBMO[bmo[i].name]]: {
              ...(prev?.[engBMO[bmo[i].name]] || {}),
              dataWaterIntake: data,
            },
          }));
          allLoaded.dataWaterIntakeCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
        dataWaterDischargeCall({ bmoid: bmo[i].internal_id, year }, data => {
          setSeparatedDataPerBMO(prev => ({
            ...prev,
            [engBMO[bmo[i].name]]: {
              ...(prev?.[engBMO[bmo[i].name]] || {}),
              dataWaterDischarge: data,
            },
          }));
          allLoaded.dataWaterDischargeCall = true;
          if (Object.values(allLoaded).every(el => el === true)) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
      }
    } else if (notConnected) {
      setGlobalBmoData(bmoData[year]);
      setSeparatedDataPerMarz(marzData[year]);
    }
  }, [bmo, year, notConnected]);

  useEffect(() => {
    const areAllFilled = Object.values(separatedDataPerBMO)
      .map(el => Object.keys(el).length === 4)
      .every(val => val === true);
    if (
      Object.keys(separatedDataPerBMO).length === bmo.length &&
      areAllFilled &&
      bmo.length > 0 &&
      !notConnected
    ) {
      setGlobalBmoData(
        Object.entries(separatedDataPerBMO).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: {
              dataWaterDischargeQuantity: totalQuantity(value.dataWaterDischarge || []),
              dataWaterIntakeQuantity: totalQuantity(value?.dataWaterIntake || []),
              dataResourcesWaterSources: listOfNames([
                ...(value?.dataWaterDischarge || []),
                ...(value?.dataWaterIntake || []),
              ]),
              dataResourcesWaterSourcesLength: listOfNames([
                ...(value.dataWaterDischarge || []),
                ...(value.dataWaterIntake || []),
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
              totalPermits: (value?.permits || []).length,
            },
          }),
          {}
        )
      );
      const allData = Object.values(separatedDataPerBMO).reduce(
        (acc, value) => [
          ...acc,
          ...(value?.dataWaterDischarge
            ? value.dataWaterDischarge.map(el => ({ ...el, dataWaterDischarge: true }))
            : []),
          ...(value?.dataWaterIntake
            ? value.dataWaterIntake.map(el => ({ ...el, dataWaterIntake: true }))
            : []),
        ],
        []
      );
      let createdMarzData = {};

      for (let i = 0; i < marz.length; i += 1) {
        createdMarzData = {
          ...createdMarzData,
          [engMarz[marz[i]?.name]]: allData.filter(
            el => el?.marz_Internal_ID === marz[i]?.internal_id
          ),
        };
      }

      setSeparatedDataPerMarz(
        Object.entries(createdMarzData).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: {
              dataWaterDischargeQuantity: totalQuantity(value.filter(el => el?.dataWaterDischarge)),
              dataWaterIntakeQuantity: totalQuantity(value.filter(el => el?.dataWaterIntake)),
              dataResourcesWaterSources: listOfNames(value),
              dataResourcesWaterSourcesLength: listOfNames(value).length,
            },
          }),
          {}
        )
      );
    }
  }, [separatedDataPerBMO]);

  const exportData = (data, name) => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(data))}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = `${name}.json`;

    link.click();
  };

  const disabledDate = current => {
    return (
      current && (current.isBefore(moment('2003-01-01')) || current.isAfter(moment('2024-12-31')))
    );
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Title>Tim 2 Presentation of Data Research of cadaster API</Title>
        <DatePicker
          picker='year'
          onChange={e => {
            setYear(moment(e).format('YYYY'));
            setSeparatedDataPerBMO({});
            setGlobalBmoData({});
            setSeparatedDataPerMarz({});
          }}
          defaultValue={moment(year, 'YYYY')}
          width='200px'
          mb={10}
          disabledDate={disabledDate}
        />
        <Row gutter={[15, 32]}>
          <Col span={24}>
            <Title level={3}>MAP presentation of cadaster Data</Title>
            <Col span={24} border_radius={'32px'} padding='16px 32px' back_color='rgb(229 229 220)'>
              <Title level={5} style={{ color: 'red' }}>
                In Red text in The Map you'll see Total Water Discharge Quantity per Marz
              </Title>
              <Title level={5} style={{ color: 'green' }}>
                In Green text in The Map you'll see Total Water Intake Quantity per Marz
              </Title>
              <Title level={5} style={{ color: 'black' }}>
                In Black text in The Map you'll see Total Water Sources Quantity per Marz
              </Title>
              <DashboardMap separatedDataPerMarz={separatedDataPerMarz} />
              <Button
                onClick={() => exportData(separatedDataPerMarz, 'marz')}
                margin={'32px 0 0 0'}
              >
                Export Data
              </Button>
            </Col>
          </Col>
          <Col span={24}>
            <Title level={3}>
              Data presentation per Marz and BMO <b>please Hover the Charts for Data</b>
            </Title>
            <Col span={24} border_radius={'32px'} padding='16px 32px' back_color='rgb(229 229 220)'>
              <Spin spinning={charLoading}>
                <DashboardCharts
                  {...{
                    engBMO,
                    setCharLoading,
                    bmo,
                    exportData,
                    engBMOValues,
                    disabledDate,
                    notConnected,
                  }}
                />
              </Spin>
            </Col>
          </Col>
          <Col span={24}>
            <Title level={3}>
              Data presentation per Marz and BMO <b>please Hover the Charts for Data</b>
            </Title>
            <Col span={24} border_radius={'32px'} padding='16px 32px' back_color='rgb(229 229 220)'>
              <Row gutter={[16, 16]}>
                <Col span={24} lg={12}>
                  <Title level={4}>Pie represents Marzs and BMOs Water Discharge Quantity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globalBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterDischargeQuantity),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Pie
                        data={Object.entries(separatedDataPerMarz).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterDischargeQuantity),
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
                <Col span={24} lg={12}>
                  <Title level={4}>Pie represents Marzs and BMOs Water Intake Quantity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globalBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterIntakeQuantity),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Pie
                        data={Object.entries(separatedDataPerMarz).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataWaterIntakeQuantity),
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
                <Col span={24} lg={12}>
                  <Title level={4}>Pie represents Marzs and BMOs Water Sources Quantity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globalBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.dataResourcesWaterSourcesLength),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip
                        content={<CustomTooltip detailedSource={false} />}
                        detailedSource={false}
                      />
                      <Pie
                        data={Object.entries(separatedDataPerMarz).map(([key, value]) => ({
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
                <Col span={24} lg={12}>
                  <Title level={4}>Pie represents BMOs Water Consumption Quantity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globalBmoData).map(([key, value]) => ({
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
                <Col span={24} lg={12}>
                  <Title level={4}>Pie represents BMOs removing the water intake Quantity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globalBmoData).map(([key, value]) => ({
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
                <Col span={24} lg={12}>
                  <Title level={4}>Pie represents BMOs permits Quantity</Title>
                  <ResponsiveContainer width='100%' height={200}>
                    <PieChart width='100%' height={200}>
                      <Pie
                        data={Object.entries(globalBmoData).map(([key, value]) => ({
                          name: key,
                          value: Math.round(value.totalPermits),
                        }))}
                        dataKey='value'
                        cx='50%'
                        cy='50%'
                        outerRadius={60}
                        fill='#8884d8'
                      />
                      <Tooltip
                        content={<CustomTooltip detailedSource={false} />}
                        detailedSource={false}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col span={24}>
                  <Title level={4}>All Water Resources Names</Title>
                  <Col span={24} padding={0} mb={0}>
                    <Row gutter={0} align='middle'>
                      <Col span={8}>
                        <Divider margin={'0px !important'} />
                      </Col>
                      <Col justify='center' span={8}>
                        <Paragraph fw={700} mb={0}>
                          Per BMO
                        </Paragraph>
                      </Col>
                      <Col span={8}>
                        <Divider margin={'0px !important'} />
                      </Col>
                    </Row>
                  </Col>
                  {Object.entries(globalBmoData).length
                    ? Object.entries(globalBmoData).map(([key, value]) => (
                        <div style={{ marginTop: 5 }} key={key}>
                          <Paragraph
                            width='100%'
                            back_color={'rgb(136, 132, 216)'}
                            align='center'
                            padding='5px'
                            color='white'
                            radius='15px'
                            mb={5}
                          >
                            {key}
                          </Paragraph>
                          <p
                            style={{
                              display: 'inline',
                              whiteSpace: 'normal',
                              overflowWrap: 'break-word',
                            }}
                          >
                            {`${Object.entries(value)
                              .filter(([k]) => k === 'dataResourcesWaterSources')
                              .map(([, el]) => el)
                              .join(',')}`}
                          </p>
                        </div>
                      ))
                    : ''}
                  <Col span={24} padding={0} mb={0}>
                    <Row gutter={0} align='middle'>
                      <Col span={8}>
                        <Divider margin={'0px !important'} />
                      </Col>
                      <Col justify='center' span={8}>
                        <Paragraph fw={700} mb={0}>
                          Per Marz
                        </Paragraph>
                      </Col>
                      <Col span={8}>
                        <Divider margin={'0px !important'} />
                      </Col>
                    </Row>
                  </Col>
                  {Object.entries(separatedDataPerMarz).length
                    ? Object.entries(separatedDataPerMarz).map(([key, value]) => (
                        <div style={{ marginTop: 5 }} key={key}>
                          <Paragraph
                            width='100%'
                            back_color={'rgb(136, 132, 216)'}
                            align='center'
                            padding='5px'
                            color='white'
                            radius='15px'
                            mb={5}
                          >
                            {key}
                          </Paragraph>
                          <p
                            style={{
                              display: 'inline',
                              whiteSpace: 'normal',
                              overflowWrap: 'break-word',
                            }}
                          >
                            {`${Object.entries(value)
                              .filter(([k]) => k === 'dataResourcesWaterSources')
                              .map(([, el]) => el)
                              .join(',')}`}
                          </p>
                        </div>
                      ))
                    : ''}
                </Col>
                <Button onClick={() => exportData(globalBmoData, 'BMO')} margin={'32px 0 0 0'}>
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
