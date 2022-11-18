import styled, { css } from 'styled-components';
import { Radio as radio } from 'antd';
import { colors } from 'constants/colors';

const Radio = styled(radio)`
  .ant-radio {
    cursor: inherit;
  }
  .ant-radio-checked {
    cursor: pointer;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${colors.main_color};
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: ${colors.main_color};
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: ${colors.main_color};
  }

  ${props =>
    props.active_color &&
    css`
      .ant-radio-checked .ant-radio-inner {
        border-color: ${props.active_color} !important ;
      }

      .ant-radio-checked .ant-radio-inner:after {
        background-color: ${props.active_color};
      }

      .ant-radio:hover .ant-radio-inner {
        border-color: ${props.active_color};
      }
    `}
`;

/** @component */
export default Radio;
