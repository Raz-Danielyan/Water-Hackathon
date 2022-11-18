import { Collapse as collapse } from 'antd';
import styled, { css } from 'styled-components';

const Collapse = styled(collapse)`
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    (props.head_mb || props.head_mb === 0) &&
    css`
      .ant-collapse-header {
        margin-bottom: ${props.head_mb}px;
      }
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${props =>
    props.border_bot &&
    css`
      border-bottom: ${props.border_bot};
    `}
  ${props =>
    props.border_top &&
    css`
      border-top: ${props.border_top};
    `}
  ${props =>
    props.hide === 'arrow' &&
    css`
      .ant-collapse-arrow {
        display: none;
      }
    `}
  ${props =>
    props.head_padding &&
    css`
      .ant-collapse-header {
        padding: ${props.head_padding} !important;
      }
    `}
  ${props =>
    props.arrow_right &&
    css`
      .ant-collapse-arrow {
        right: ${props.arrow_right};
      }
    `}
  ${props =>
    props.content_padding &&
    css`
      .ant-collapse-content-box {
        padding: ${props.content_padding};
      }
    `}
  ${props =>
    props.header_align &&
    css`
      .ant-collapse-header {
        display: flex;
        align-items: ${props.header_align};
      }
    `}
`;

export default Collapse;
