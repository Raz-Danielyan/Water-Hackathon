import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Paragraph, Row } from 'components/atoms/index';
import { API_ROOT } from '../../../configs/env-vars';
import { setUser } from '../../../app/slices/user';
import client from '../../../services/main-client';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = values => {
    setLoading(true);
    client()
      .post(`${API_ROOT}api/auth/local`, {
        identifier: 'userik@mail.com',
        password: '123!@#',
      })
      .then(res => {
        setLoading(false);
        dispatch(setUser(res?.data));
        navigate('/');
      })
      .catch(({ response }) => {
        setLoading(false);
        // const errorId = response?.data?.data?.[0]?.messages?.[0]?.id;
        //
        // if (errorId === 'Auth.form.error.blocked') {
        //   confirm({
        //     title: response?.data?.data?.[0]?.messages?.[0]?.message,
        //     icon: <ExclamationCircleOutlined />,
        //     className: 'error-popup',
        //   });
        // } else if (errorId === 'Auth.form.error.confirmed') {
        //   navigate(`/thank-you/${form.getFieldValue('identifier')}`);
        // } else if (errorId === 'Auth.form.error.invalid') {
        //   form.setFields([
        //     {
        //       name: 'identifier',
        //       value: form.getFieldValue('identifier'),
        //       errors: ['Invalid credentials'],
        //     },
        //     {
        //       name: 'password',
        //       value: form.getFieldValue('password'),
        //       errors: ['Invalid credentials'],
        //     },
        //   ]);
        // } else {
        //   notification.error({
        //     description: 'Something went wrong!',
        //   });
        // }
      });
  };

  return (
    <Row gutter={[20, 10]}>
      {[1, 2].map(el => (
        <Col span={8}>
          <Col span={24} padding='5px 8px' shadow='0px 0px 5px 1px black' radius='5px' align='end'>
            <Avatar shape='square' size={50} icon={<UserOutlined />} />
            <Col padding='0 0 0 5px'>
              <Paragraph fw={700} fz={14} mb={5} align='start'>
                Offers Name
              </Paragraph>
              <Paragraph fw={500} fz={15} mb={0} align='start'>
                Discount (Condition)
              </Paragraph>
            </Col>
            <Col ml='auto'>
              <Paragraph fw={500} fz={15} mb={0} align='start'>
                Price
              </Paragraph>
            </Col>
          </Col>
        </Col>
      ))}
    </Row>
  );
};

export default SignIn;
