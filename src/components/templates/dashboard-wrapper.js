import { memo, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from 'assets/images/mb-logo.png';
import { colors } from 'constants/colors';
import { protectedRouts } from 'constants/routes';
import { Content, Layout, Menu, Sider, Col } from 'components/atoms';
import DashboardHeader from 'components/molecules/dashboard-header';
import { getUserRole } from 'app/services/selector-helpers';

const { SubMenu } = Menu;

const DashboardWrapper = ({ routeData, children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const role = useSelector(getUserRole);
  const [collapsed, setCollapsed] = useState(true);
  const collapsedText = collapsed ? 'collapsed' : '';

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={false}
        theme='light'
        width={260}
        collapsedWidth={56}
        shadow='0px 10px 15px rgba(0, 0, 0, 0.2)'
        // onMouseEnter={() => setCollapsed(false)}
        // onMouseLeave={() => setCollapsed(true)}
      >
        <>
          <Col justify='center' border_bottom={`1px solid ${colors.border_color}`}>
            <Link to='/'>
              <img src={Logo} alt='logo' />
            </Link>
          </Col>
          <Menu
            mode='inline'
            selectedKeys={pathname}
            defaultOpenKeys={[(!collapsed && routeData?.subKey) || '']}
            type='sidebar'
            sectype={collapsedText}
          >
            {Object.values(protectedRouts[role]).map(menuitem =>
              menuitem.items ? (
                <SubMenu
                  key={menuitem.key}
                  icon={menuitem.icon}
                  title={menuitem?.menuTitle || menuitem?.pageTitle}
                >
                  {Object.values(menuitem.items).map(subItem => (
                    <Menu.Item
                      key={subItem.pathname}
                      onClick={() => {
                        navigate(subItem.pathname);
                      }}
                    >
                      {subItem.menuTitle || subItem.pageTitle}
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                !menuitem.hideInSidebar && (
                  <Menu.Item
                    key={menuitem.pathname}
                    icon={menuitem.icon}
                    onClick={() => {
                      setCollapsed(true);
                      navigate(menuitem.pathname);
                    }}
                  >
                    {menuitem?.menuTitle || menuitem?.pageTitle}
                  </Menu.Item>
                )
              )
            )}
          </Menu>
        </>
      </Sider>
      <Layout>
        <DashboardHeader role={role} />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default memo(DashboardWrapper);
