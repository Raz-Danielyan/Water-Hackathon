import styled, { css } from 'styled-components';
import { Layout as layout } from 'antd';

const Sider = styled(layout.Sider)`
  z-index: 5;
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
    ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default Sider;
