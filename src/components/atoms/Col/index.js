import styled, { css } from 'styled-components';
import { Col as col } from 'antd';

const Col = styled(col)`
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
    props.position &&
    css`
      position: ${props.position};
    `}
    ${props =>
    props.ml &&
    css`
      margin-left: ${props.ml} !important;
    `}
      ${props =>
    props.mr &&
    css`
      margin-right: ${props.mr} !important;
    `}
      ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt} !important;
    `}
  ${props =>
    props.padding &&
    css`
      padding: ${props.padding}!important;
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
    ${props =>
    props.min_height &&
    css`
      min-height: ${props.min_height};
    `}
    ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.max_height &&
    css`
      max-height: ${props.max_height};
    `}

    ${props =>
    props.bg_img &&
    css`
      background-image: url(${props.bg_img});
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
    props.wrap &&
    css`
      flex-wrap: ${props.wrap};
    `}
    ${props =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `}
    ${props =>
    props.pr &&
    css`
      padding-right: ${props.pr}!important;
    `}
    ${props =>
    props.pl &&
    css`
      padding-left: ${props.pl}!important;
    `}

  ${props =>
    props.direction &&
    css`
      display: flex;
      flex-direction: ${props.direction};
    `}
    ${props =>
    props.border_radius &&
    css`
      border-radius: ${props.border_radius};
    `}
  ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${props =>
    props.border_right &&
    css`
      border-right: ${props.border_right};
    `}
    ${props =>
    props.border_bottom &&
    css`
      border-bottom: ${props.border_bottom};
    `}
  ${props =>
    props.border_top &&
    css`
      border-top: ${props.border_top};
    `}
  ${props =>
    props.cursor &&
    css`
      cursor: ${props.cursor};
    `}
  ${props =>
    props.overflow_y &&
    css`
      overflow-y: ${props.overflow_y};
    `}
  ${props =>
    props.shadow &&
    css`
      box-shadow: ${props.shadow};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
`;

/** @component */
export default Col;
