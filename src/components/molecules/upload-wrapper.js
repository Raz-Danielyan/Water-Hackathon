import { useState } from 'react';
import { CameraFilled } from '@ant-design/icons';
import { addUploadApi } from 'services/uploads';
import { convertFileUrl } from 'utils/helpers';
import { Col, Upload } from '../atoms';
import { colors } from '../../constants/colors';

const UploadWrapper = ({
  children,
  setUploadedFile,
  uploadedFile,
  uploadExtraProps,
  accept,
  firstDesc,
  secDesc,
}) => {
  const [uploadLoading, setUploadLoading] = useState(false);

  const uploadFile = async file => {
    setUploadLoading(true);
    const callback = await addUploadApi(file);
    setUploadLoading(false);
    if (callback) {
      const uploadedData = callback?.data ? callback?.data[0] : null;
      const uploadedObjFile = { ...uploadedData, url: convertFileUrl(uploadedData?.url) };
      // if you want to collect your images, your default value should be array, otherwise what type do you want
      setUploadedFile(prev => (Array.isArray(prev) ? [...prev, uploadedObjFile] : uploadedObjFile));
    }
    return false;
  };

  return (
    <Upload
      accept={accept || '.jpeg,.jpg,.png'} // .jpeg,.jpg,.png,.tiff,.pdf,.zip,.doc,.docx
      beforeUpload={file => uploadFile(file)}
      onRemove={() => setUploadedFile(prev => (Array.isArray(prev) ? [] : null))}
      showDelete={!!uploadedFile}
      loading={uploadLoading}
      listType='picture-card'
      maxCount={1}
      fileList={uploadedFile ? [uploadedFile] : []}
      customRequest={() => {}}
      showUploadList={false}
      width='100%'
      display='inline-flex'
      radius='8px'
      border={`1px solid ${colors.border_color}}`}
      {...uploadExtraProps}
    >
      {children ||
        (uploadedFile ? (
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
            src={uploadedFile?.url}
            alt='logo'
          />
        ) : (
          <Col align='center' direction='column'>
            <div>
              <CameraFilled style={{ color: '#484D55', fontSize: '44px' }} />
            </div>
            <div style={{ fontSize: '12px' }}>
              {firstDesc || `Upload or drag Icon ${secDesc && 'of'}`}
            </div>
            <div style={{ fontSize: '12px' }}>{secDesc}</div>
          </Col>
        ))}
    </Upload>
  );
};
export default UploadWrapper;
