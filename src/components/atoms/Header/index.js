import styled, { css } from 'styled-components';
import { Layout as layout } from 'antd';

const Header = styled(layout.Header)`
  height: auto;
  line-height: initial;
  z-index: 101;
  position: sticky;

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
    props.height &&
    css`
      height: ${props.height};
    `};
  ${props =>
    props.position &&
    css`
      position: ${props.position} !important;
    `};
  ${props =>
    props.top &&
    css`
      top: ${props.top} !important;
    `};
`;

export default Header;
