import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'assets/images/mb-logo-mobile.png';
import { Header, Paragraph, Row } from '../atoms';
import { removeUser } from '../../app/slices/user';
import MobileSidebar from './mobile-sidebar';

const HeaderContent = styled.div`
  width: 100%;
  padding: 25px 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: 75px;
`;

const HeaderContentMobile = styled.div`
  width: 100%;
  padding: 5px 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  height: 75px;

  svg {
    cursor: pointer;
  }
`;

const HeaderWrapperMobile = styled(Header)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;

    .logo {
      cursor: pointer;
    }

    .burger {
      width: 24px;
      cursor: pointer;
      position: relative;
      z-index: 99;

      .burger-item {
        width: 24px;
        height: 4px;
        margin-bottom: 4px;
        background: #171717;
        border-radius: 4px;
        transition: all ease 0.3s;
      }

      &.collapsed .burger-item {
        transform: rotate(45deg) translate(-6px, -5px);

        &:nth-last-child(3) {
          transition: none;
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }

        &:nth-last-child(2) {
          transform: rotate(-45deg) translate(-1px, -1px);
        }
      }
    }
  }
`;

const HeaderWrapperDesktop = styled(HeaderContent)`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
    position: sticky;
    top: 0;
  }
`;

const DashboardHeader = ({ role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate('/sign-in');
  };

  return (
    <>
      <HeaderWrapperMobile padding='0' back_color='#fff' position='sticky' top='0'>
        <HeaderContentMobile>
          <Row align='middle' justify='space-between'>
            <img src={Logo} alt='logo' onClick={() => navigate('/')} className='logo' />
            <div
              className={`burger ${collapsed && 'collapsed'}`}
              onClick={() => setCollapsed(!collapsed)}
            >
              <div className='burger-item' />
              <div className='burger-item' />
              <div className='burger-item' />
            </div>
          </Row>
        </HeaderContentMobile>
      </HeaderWrapperMobile>
      <Header padding='0' back_color='#fff'>
        <HeaderWrapperDesktop>
          <Row align='middle' justify='end'>
            <Paragraph
              mb={'0'}
              onClick={handleLogout}
              color={'#000000'}
              fw={500}
              fz={16}
              cursor={'pointer'}
            >
              Log out
            </Paragraph>
          </Row>
        </HeaderWrapperDesktop>
      </Header>
      <MobileSidebar
        role={role}
        setCollapsed={setCollapsed}
        handleLogout={handleLogout}
        collapsed={collapsed}
      />
    </>
  );
};

export default memo(DashboardHeader);
