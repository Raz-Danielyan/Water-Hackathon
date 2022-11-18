import styled, { css } from 'styled-components';
import { DatePicker as datepicker } from 'antd';
import { colors } from 'constants/colors';

const DatePicker = styled(datepicker)`
  border: 1px solid #9ea09f;
  height: 40px;
  border-radius: 8px !important;
  background: #fff;
  box-sizing: border-box;
  padding: 0 15px;
  font-weight: 300;
  font-size: 14px;
  color: #5f6982;
  width: 100%;

  &:hover {
    border-color: ${colors.main_color}!important;
  }
  &:focus,
  &.ant-input-focused {
    border-color: ${colors.main_color}!important;
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
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin};
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
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
`;

export default DatePicker;
