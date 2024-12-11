import styled, { css } from 'styled-components';
import { Upload as upload, Spin } from 'antd';
import ImgCrop from 'antd-img-crop';
import { DeleteOutlined } from '@ant-design/icons';

const Upload = styled(upload)`
  .ant-upload.ant-upload-select-picture-card {
    border: 1px solid #9ea09f;
    border-radius: 8px;
    background: #ffffff;
  }
  & .ant-upload {
    height: 100%;
  }

  & .ant-upload-select-picture-card {
    overflow: hidden;
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
    props.show === 'delete' &&
    css`
      .ant-upload.ant-upload-select-picture-card {
        &:hover::after {
          display: table !important;
          clear: both !important;
          content: 'delete' !important;
          position: absolute !important;
          top: -5 !important;
          top: -5px !important;
          width: 100% !important;
          height: 100% !important;
          backdrop-filter: blur(15px) !important;
          border-radius: 8px;
        }
      }
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
    props.padding &&
    css`
      padding: ${props.padding};
    `}
    ${props =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width};
      .ant-upload {
        width: ${props.width};
      }
    `}
  ${props =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${props =>
    props.back_color &&
    css`
      background-color: ${props.back_color};
    `}
  ${props =>
    props.text_color &&
    css`
      .ant-tooltip-inner {
        color: ${props.text_color};
      }
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
    props.text_width &&
    css`
      .ant-upload-list-text {
        width: ${props.text_width};
      }
    `}
  ${props =>
    props.display &&
    css`
      display: ${props.display};
    `}
  ${props =>
    props.justify &&
    css`
      display: flex;
      justify-content: ${props.justify};
    `}
`;
const UploadWrapper = styled.div`
  position: relative;
  & .ant-upload-picture-card-wrapper {
    display: flex !important;
  }
  .delete_wrapper {
    transition: all ease 0.3s;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(72, 77, 85, 0.85);
    border-radius: 8px;
    .delete_icon {
      margin-right: 5px;
      svg {
        color: #fff;
      }
    }
  }
  .ant-upload.ant-upload-select-picture-card {
    margin-right: 0;
    margin-bottom: 0;
  }
  &:hover .delete_wrapper {
    opacity: 1;
  }
`;
const CustomUpload = ({
  children,
  onRemove,
  loading,
  showDelete = false,
  fileList = [],
  aspect = 1 / 1,
  ...props
}) => {
  return (
    <Upload {...props} fileList={fileList}>
      {children}
    </Upload>
  );
};
export default CustomUpload;
