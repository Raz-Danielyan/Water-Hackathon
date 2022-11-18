import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from 'constants/routes';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';
import styled from 'styled-components';
import PageContainer, { getPageComponents } from './getPageContainer';
import { getUser, getUserRole } from './app/services/selector-helpers';
import NotFoundPage from './pages/not-found';

const PageLoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RouteList = () => {
  const role = useSelector(getUserRole);
  const user = useSelector(getUser);
  const routeList = user ? getPageComponents(role) : routes;

  return (
    <Routes>
      {Object.values(routeList)
        .filter(el => el.pathname)
        .map(route => (
          <Route
            exact
            path={route.pathname}
            key={route.pathname}
            element={
              <Suspense
                fallback={
                  <PageLoadingWrapper>
                    <Spin spinning={true} size='large' />
                  </PageLoadingWrapper>
                }
              >
                <PageContainer route={route} />
              </Suspense>
            }
          />
        ))}
      <Route path='*' key='not-found' element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteList;
