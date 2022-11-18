import styled, { css } from 'styled-components';
import { Row as row } from 'antd';

const Row = styled(row)`
  ${props =>
    (props.mb || props.mb === 0) &&
    css`
      margin-bottom: ${props.mb}px;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin} !important;
    `}
    ${props =>
    props.position &&
    css`
      position: ${props.position};
    `}
  ${props =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
  ${props =>
    props.border &&
    css`
      border: ${props.border};
    `}
  ${props =>
    props.radius &&
    css`
      border-radius: ${props.radius};
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
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
    props.flex &&
    css`
      flex: ${props.flex};
    `}
  ${props =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${props =>
    props.border_bot &&
    css`
      border-bottom: ${props.border_bot};
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
    props.odd_back &&
    css`
      &:nth-child(odd) {
        background-color: ${props.odd_back};
      }
    `}
`;

/** @component */
export default Row;
