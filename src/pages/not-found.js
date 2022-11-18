import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import routes, { protectedRouts, roleDefPaths } from '../constants/routes';
import { getUserRole } from '../app/services/selector-helpers';
import { Col, Paragraph } from '../components/atoms';

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const NotFoundPage = () => {
  const { pathname } = useLocation();
  const role = useSelector(getUserRole);
  const protectedRoutsValues =
    protectedRouts.restaurant && protectedRouts.superadmin
      ? [...Object.values(protectedRouts.restaurant), ...Object.values(protectedRouts.superadmin)]
      : [];
  const containRouteList = [...protectedRoutsValues, ...Object.values(routes)].filter(
    el => el?.pathname === `/${pathname?.split('/')?.[1]}`
  );

  const defPath = role ? roleDefPaths[role] : '/sign-in';

  if (pathname === '/') {
    return <Navigate to={defPath} />;
  }
  if (containRouteList?.[0]?.pathname) {
    return <Navigate to={role ? '/' : '/sign-in'} />;
  }
  return (
    <NotFoundWrapper>
      <Col>
        <Paragraph fz={45} fw={600} mb={0}>
          404
        </Paragraph>
        <Paragraph fz={18} fw={600} mb={0}>
          Not Found
        </Paragraph>
        <Link to={defPath}>Go to main page</Link>
      </Col>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
