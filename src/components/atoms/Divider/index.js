import styled, { css } from 'styled-components';
import { Divider as divider } from 'antd';

const Divider = styled(divider)`
  ${props =>
    props.color &&
    css`
      border-color: ${props.color} !important;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
    ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${props =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
`;

export default Divider;
