import styled, { css } from 'styled-components';
import maskedInput from 'react-input-mask';
import { colors } from '../../../constants/colors';

const MaskedInput = styled(maskedInput)`
  background: #fff;
  box-sizing: border-box;
  padding: 0 15px;
  font-weight: 300;
  border: 1px solid #9ea09f;
  border-radius: 8px !important;
  height: 40px;
  font-size: 14px;
  color: #5f6982;
  width: 100%;

  &:hover {
    border-color: ${colors.main_color};
  }
  &:focus,
  &.ant-input-focused {
    border-color: ${colors.main_color};
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px ${colors.main_color}2e;
  }

  &[disabled] {
    color: #00000096;
    background-color: #fff;
    border: 1px solid #eeeeee;
  }
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px!important;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding}!important;
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height}!important;
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.type === 'blue' &&
    css`
      border: 1px solid #c9c9c9 !important;
      &:hover {
        border-color: ${colors.main_color} !important;
      }
      &:focus,
      &.ant-input-focused {
        border-color: ${colors.main_color} !important;
        box-shadow: none;
      }
    `}
`;

export default MaskedInput;
