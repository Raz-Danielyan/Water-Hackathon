import { Menu, Row, Col, Paragraph } from 'components/atoms';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { protectedRouts } from 'constants/routes';
import { colors } from 'constants/colors';

const MobileMenuWrapper = styled.div`
  overflow: hidden;
  background: #fff;
  backdrop-filter: blur(10px);
  width: 100vw;
  top: 75px;
  left: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 99;
  transition: all ease 0.3s;
  ${props =>
    props.collapsed &&
    props.collapsed === 'collapsed' &&
    css`
      left: 0;
    `}
    @media screen and (min-width: 768px) {
      display: none;
    }
}
`;
const { SubMenu } = Menu;

const MobileSidebar = ({ role, setCollapsed, handleLogout, collapsed }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <MobileMenuWrapper collapsed={collapsed ? 'collapsed' : ''}>
      <Row width={'100%'}>
        <Col span={24}>
          <Menu mode='inline' selectedKeys={pathname} type='sidebar'>
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
                        setCollapsed(false);
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
                      setCollapsed(false);
                      navigate(menuitem.pathname);
                    }}
                  >
                    {menuitem?.menuTitle || menuitem?.pageTitle}
                  </Menu.Item>
                )
              )
            )}
            <Menu.Item key='logOut' onClick={handleLogout}>
              <Paragraph mb={0} color={colors.main_color}>
                Log out
              </Paragraph>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </MobileMenuWrapper>
  );
};

export default MobileSidebar;
