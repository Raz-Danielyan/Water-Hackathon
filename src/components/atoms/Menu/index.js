import styled, { css } from 'styled-components';
import { Menu as menu } from 'antd';

const Menu = styled(menu)`
  ${props =>
    props.type === 'sidebar' &&
    css`
      border-right: 0;
      padding: 25px 30px 30px;

      .ant-menu-item {
        color: #717579;
        background-color: #fff !important;
        padding-left: 15px !important;

        &:hover {
          color: #0085ff;
          path {
            fill: #717579;
          }
        }

        .case_icon svg {
          width: 18px;
        }
        .ant-menu-item-icon {
          width: 24px;
        }

        &.ant-menu-item-selected,
        &:active,
        .ant-menu-submenu-title:active {
          border-radius: 8px !important;
          color: #fff;
          background-color: #0085ff !important;

          :after {
            left: 0;
            right: unset;
            border-radius: 0 57px 57px 0;
            border-right: none;
          }

          path {
            fill: #0085ff;
          }
        }
      }

      .ant-menu-sub {
        background-color: #fff;

        .ant-menu-item {
          padding-left: 65px !important;
        }
      }
      .ant-menu-item,
      .ant-menu-submenu {
        font-weight: 400;
        font-size: 18px;
        svg {
          font-size: 18px;
        }
      }
      .ant-menu-item:active,
      .ant-menu-submenu-title:active {
        background-color: #fff;
      }
      .ant-menu-submenu {
        color: #717579 !important;
        font-weight: 500 !important;
      }
      .ant-menu-submenu-title:hover {
        color: #0085ff !important;

        path {
          fill: #0085ff;
        }
      }
      .ant-menu-submenu {
        .ant-menu-submenu-arrow {
          color: #717579 !important;
        }
        &:hover {
          .ant-menu-submenu-title > .ant-menu-submenu-arrow {
            color: #0085ff !important;
            path {
              fill: #0085ff;
            }
          }
        }
      }
    `}
  ${props =>
    props.type === 'sidebar' &&
    props.sectype === 'collapsed' &&
    css`
      .ant-menu-item {
        &.ant-menu-item-selected,
        &:active,
        .ant-menu-submenu-title:active {
          width: 100%;
          border-radius: 0;
        }
      }
    `}
`;

export default Menu;
