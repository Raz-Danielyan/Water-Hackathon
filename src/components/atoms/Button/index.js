import { memo } from 'react';
import styled, { css } from 'styled-components';
import { Button as button } from 'antd';
import { colors } from '../../../constants/colors';

const Button = styled(button)`
  background: ${colors.main_color};
  border-radius: 8px;
  border: none;
  font-weight: 500;
  color: #fff;
  padding: 0 16px;
  font-size: 14px;
  height: 40px;
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
    ${props =>
    props.fw &&
    css`
      font-weight: ${props.fw};
    `}
  ${props =>
    props.fz &&
    css`
      font-size: ${props.fz};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
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
      & span {
        color: ${props.color};
      }
    `}
  ${props =>
    props.icon_height &&
    css`
      svg {
        height: ${props.icon_height};
      }
    `}
    ${props =>
    props.type === 'primary' &&
    css`
      color: #fff;
      background: ${colors.main_color};
      box-shadow: none;
      &:hover {
        background: ${colors.main_color}90;
        color: #fff;
      }
      &:active {
        background: ${colors.main_color};
        color: #fff;
      }
      &:focus {
        background: ${colors.main_color};
        color: #fff;
      }
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
    ${props =>
    props.max_width &&
    css`
      max-width: ${props.max_width};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    (props.mt || props.mt === 0) &&
    css`
      margin-top: ${props.mt}px;
    `}
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${props =>
    props.align &&
    css`
      display: flex;
      align-items: ${props.align};
    `}
  ${props =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify};
    `}
  ${props =>
    props.line_height &&
    css`
      line-height: ${props.line_height};
    `}
  ${props =>
    props.hover_border &&
    css`
      &:hover {
        border-color: ${props.hover_border};
      }
    `}
`;

export default memo(Button);
