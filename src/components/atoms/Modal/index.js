import styled from 'styled-components';
import { Modal as modal } from 'antd';
import { colors } from 'constants/colors';

const Modal = styled(modal)`
  @media (max-width: 992px) {
    & .ant-modal-close {
      top: 2% !important;
    }
  }
  @media (max-width: 768px) {
    width: 90% !important;
    max-width: 90% !important;
    & .ant-modal-close {
      top: 1% !important;
    }
    .title {
      font-size: 17px;
    }
    .footer button {
      padding: 10px !important;
    }
  }
  @media (max-width: 468px) {
    .title {
      font-size: 14px;
    }
  }

  background-color: #fff;
  border-radius: 20px !important;
  padding-bottom: 0px;
  min-width: 70%;
  max-width: 90%;

  & .ant-modal-body {
    padding: 0px !important;
  }
  & .ant-modal-header {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }

  & .ant-modal-header {
    padding: 3% !important;
  }
  & .ant-modal-title {
    line-height: 28px;
    font-size: 24px;
    font-weight: 400;
    color: ${colors.text_colors.yankees_blue};
  }
  & .ant-modal-close {
    top: 3%;
    right: 3%;
  }
  & .ant-modal-close-x {
    width: fit-content;
    height: fit-content;
    line-height: 0px;
  }
`;

export default Modal;
