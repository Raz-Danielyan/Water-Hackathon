import React, { memo } from 'react';
import styled from 'styled-components';

const GuestWrapperComp = styled.div``;

const GuestWrapper = ({ children }) => {
  return <GuestWrapperComp>{children}</GuestWrapperComp>;
};

export default memo(GuestWrapper);
