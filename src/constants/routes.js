export const protectedRouts = {
  customer: {
    dashboard: {
      pageTitle: 'Dashboard',
      key: 'dashboard',
      pathname: '/',
      component: 'pages/customer/dashboard.page',
    },
  },
  agent: {
    dashboard: {
      pageTitle: 'Dashboard',
      key: 'dashboard',
      pathname: '/',
      component: 'pages/agent/dashboard.page',
    },
  },
  admin: {
    dashboard: {
      pageTitle: 'Dashboard',
      key: 'dashboard',
      pathname: '/',
      component: 'pages/admin/dashboard.page',
    },
  },
};

const routes = {
  signIn: {
    pageTitle: 'Sign In',
    pathname: '/sign-in',
    key: 'signIn',
    component: 'pages/guest/sign-in.page',
  },
  signUp: {
    pathname: '/sign-up',
    key: 'signUp',
    component: 'pages/guest/sign-up.page',
    pageTitle: 'Sign Up',
  },
  forgotPass: {
    pathname: '/forgot-password',
    key: 'forgotPass',
    component: 'pages/guest/forgot-password.page',
    pageTitle: 'Forgot Password',
  },
  resetPass: {
    pathname: '/reset-password',
    key: 'resetPass',
    component: 'pages/guest/reset-password.page',
    pageTitle: 'Reset Password',
  },
};

export const roleDefPaths = {
  customer: '/',
  agent: '/',
  admin: '/',
};

export default routes;
