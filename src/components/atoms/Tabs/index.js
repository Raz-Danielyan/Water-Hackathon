import styled, { css } from 'styled-components';
import { Tabs as tabs } from 'antd';

const Tabs = styled(tabs)`
  .ant-tabs-tab {
    .ant-tabs-tab-btn {
      text-transform: uppercase;
      font-size: 24px;
      color: #717579;
    }
  }

  .ant-tabs-tab-active {
    .ant-tabs-tab-btn {
      font-weight: 600;
    }
  }

  .ant-tabs-ink-bar {
    background-color: #ff9900;
    height: 3px;
    border-radius: 2px;
  }

  ${props =>
    props.tab_btn_color &&
    css`
      .ant-tabs-tab-btn {
        color: ${props.tab_btn_color};
      }
    `}

  ${props =>
    props.list_padding &&
    css`
      .ant-tabs-nav-wrap {
        padding: ${props.list_padding};
      }
    `}

  ${props =>
    props.tab_btn_fz &&
    css`
      .ant-tabs-tab .ant-tabs-tab-btn {
        font-size: ${props.tab_btn_fz}px;
      }
    `}
  ${props =>
    props.tab_btn_padding &&
    css`
      .ant-tabs-tab-btn {
        padding: ${props.tab_btn_padding}px;
      }
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.active_tab_btn_fw &&
    css`
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          font-weight: ${props.active_tab_btn_fw};
        }
      }
    `}
  ${props =>
    props.tab_btn_fw &&
    css`
      .ant-tabs-tab-btn {
        font-weight: ${props.tab_btn_fw};
      }
    `}
  ${props =>
    props.active_tab_btn_color &&
    css`
      .ant-tabs-tab-active {
        .ant-tabs-tab-btn {
          color: ${props.active_tab_btn_color};
        }
      }
    `}
  ${props =>
    props.active_tab_back_color &&
    css`
      .ant-tabs-tab-active {
        background-color: ${props.active_tab_back_color};
        border-bottom-color: ${props.active_tab_back_color};
      }
    `}
  ${props =>
    props.active_sider_color &&
    css`
      .ant-tabs-ink-bar {
        background-color: ${props.active_sider_color};
      }
    `}
    ${props =>
    props.type === 'yellow' &&
    css`
      .ant-tabs-tab-btn {
        font-weight: 400 !important;
        font-size: 18px;
        line-height: 22px;
        color: #5f6982;
      }
      .ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #ff9900 !important;
      }
    `}
`;

export default Tabs;
