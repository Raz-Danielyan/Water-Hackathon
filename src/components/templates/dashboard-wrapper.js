import { memo, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from 'assets/images/mb-logo.png';
import { protectedRouts } from 'constants/routes';
import { Content, Layout, Menu, Sider, Col, Header } from 'components/atoms/index';
import DashboardHeader from 'components/molecules/dashboard-header';
import { getUserRole } from 'app/services/selector-helpers';

const { SubMenu } = Menu;

const DashboardWrapper = ({ children }) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};

export default memo(DashboardWrapper);
