import { lazy, Suspense } from 'react';
import { protectedRouts } from 'constants/routes';
import DashboardWrapper from './components/templates/dashboard-wrapper';
import GuestWrapper from './components/templates/guest-wrapper';

const lazyLoadPage = path => lazy(() => import(`./${path}`));

const PageContainer = ({ route }) => {
  const Children = lazyLoadPage(route.component);
  // if (user?.id) {
  return (
    <Suspense>
      <DashboardWrapper>
        <Children />
      </DashboardWrapper>
    </Suspense>
  );
  // }

  // return (
  //   <Suspense>
  //     <GuestWrapper>
  //       <Children />
  //     </GuestWrapper>
  //   </Suspense>
  // );
};

export default PageContainer;

export const getPageComponents = role => {
  const components = {};
  Object.values(protectedRouts[role]).forEach(route => {
    components[route.key] = {
      component: route.component,
      pathname: route.pathname,
      redirectPath: route.redirectPath,
      pageTitle: route.pageTitle,
      key: route.key,
    };

    if (route.items) {
      Object.values(route.items).forEach(childRoute => {
        components[childRoute.key] = {
          component: childRoute.component,
          pathname: childRoute.pathname,
          redirectPath: route.redirectPath,
          pageTitle: route.pageTitle,
          key: route.key,
          subKey: route.subKey,
        };
      });
    }
  });

  return components;
};
