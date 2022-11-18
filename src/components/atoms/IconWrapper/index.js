import styled, { css } from 'styled-components';
import Icon from '@ant-design/icons';

const IconWrapper = styled(Icon)`
  ${props =>
    props.color &&
    css`
      svg path {
        fill: ${props.color};
      }
    `}
  ${props =>
    props.width &&
    css`
      svg {
        width: ${props.width};
      }
    `}
      ${props =>
    props.height &&
    css`
      svg {
        height: ${props.height};
      }
    `}
`;

export default IconWrapper;
