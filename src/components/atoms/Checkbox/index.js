import styled, { css } from 'styled-components';
import { Checkbox as checkbox } from 'antd';
import { colors } from 'constants/colors';

const Checkbox = styled(checkbox)`
  &:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${colors.main_color};
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${colors.main_color};
    border-color: ${colors.main_color};
  }
  .ant-checkbox-checked::after {
    border: 1px solid ${colors.main_color};
  }

  ${props =>
    props.size &&
    css`
      input,
      .ant-checkbox-inner {
        width: ${props.size}px;
        height: ${props.size}px;
      }
      .ant-checkbox-inner::after {
        left: ${props.size}%;
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
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
  ${props =>
    props.label_margin &&
    css`
      > span:last-child {
        margin: ${props.label_margin};
      }
    `}
  ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
`;

export default Checkbox;
