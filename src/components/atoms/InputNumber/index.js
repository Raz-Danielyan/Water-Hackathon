import styled, { css } from 'styled-components';
import { InputNumber as inputNumber } from 'antd';
import { colors } from '../../../constants/colors';

const InputNumber = styled(inputNumber)`
  border: 1px solid #9ea09f;
  height: 40px !important;
  padding: 0px !important;
  width: 100%;

  & input {
    height: 100% !important;
  }

  & .ant-input-number-affix-wrapper,
  & .ant-input-number-input-wrap {
    border: none;
    height: 100% !important;
  }
  &,
  & .ant-input-number-wrapper,
  & .ant-input-number-affix-wrapper,
  & .ant-input-number {
    border-radius: 8px !important;
  }
  & .ant-input-number-wrapper > input,
  & .ant-input-number-wrapper > .ant-input-number-affix-wrapper {
    outline: none !important;
    border: none;
    box-shadow: none !important;

    &:focus {
      outline: none !important;
      border: none;
      box-shadow: none !important;
    }
  }
  & .ant-input-number-group-addon {
    background: transparent;
    padding: 0 0 0 10px !important;
    border: none !important;
  }

  &.ant-input-number-input {
    height: 100% !important;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #9ea09f;
    padding: 0 15px;
    font-weight: 300;
    font-size: 14px;
    color: #5f6982;
    width: 100%;
  }

  &:hover {
    border-color: ${colors.main_color}!important;
  }
  &:focus,
  &.ant-input-number-focused {
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
    props.color_type === 'blue' &&
    css`
      border: 1px solid #000080;
      &.ant-input-number-number-disabled {
        color: #000080;
        background-color: #fff;
        border: 1px solid #000080;
      }
    `}
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
  ${props =>
    props.text_align &&
    css`
      input {
        text-align: ${props.text_align};
      }
    `}
  ${props =>
    props.hide === 'controls' &&
    css`
      //padding: 0 10px;
      //.ant-input-number-number-handler-wrap {
      //  display: none;
      //}
    `}
`;

export default InputNumber;
