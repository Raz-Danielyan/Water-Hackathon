import styled, { css } from 'styled-components';
import { Form as form } from 'antd';

const Form = styled(form)`
  ${props =>
    props.label_height &&
    css`
      & .ant-form-item-label,
      & .ant-form-item-label label {
        height: ${props.label_height} !important;
      }
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
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
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
  ${props =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
`;

export default Form;
