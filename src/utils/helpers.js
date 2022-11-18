import { addUploadApi } from 'app/services/upload';
import { colors } from 'constants/colors';
import { Modal, Paragraph } from '../components/atoms';

const { confirm } = Modal;

export const defText = (text, align, isPrice, extraProps = {}, emptyValue) => {
  let rowContent = '';
  if (!text) {
    rowContent = emptyValue ? '' : '-';
  } else {
    rowContent = text;
    if (isPrice) {
      rowContent = isPrice?.onlyLocale
        ? `$ ${Number(text).toLocaleString()}`
        : `$ ${Number(text).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
    }
  }

  return (
    <Paragraph fz={18} mb={0} fw={400} color={colors?.text_colors?.yankees_blue} {...extraProps}>
      {rowContent}
    </Paragraph>
  );
};

export const formatPhone = text => text?.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

export const convertFileUrl = url => {
  return url?.includes('https://') ? url : `https://${url}`;
};

export const uploadFile = async (file, setUploadedFile, setUploadLoading) => {
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

export const showConfirm = (params = {}) => {
  confirm({
    icon: false,
    onCancel() {},
    okText: 'YES',
    cancelText: 'NO',
    destroyOnClose: true,
    maskClosable: true,
    centered: true,
    ...params,
  });
};

export const convertPrice = price =>
  Number(price || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
