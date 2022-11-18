export const phonePattern = /\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})/;
export const phoneMask = '(111) 111-1111';

export const postalPattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
export const postalMask = '*** ***';

export const sortDirectionKeys = {
  ascend: 'ASC',
  descend: 'DESC',
};

export const defFormLayout = {
  layout: 'horizontal',
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
