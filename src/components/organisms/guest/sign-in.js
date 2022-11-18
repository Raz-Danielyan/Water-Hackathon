import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../atoms';
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
    <div>
      <Button loading={loading} onClick={handleLogin}>
        SignIn
      </Button>
    </div>
  );
};

export default SignIn;
