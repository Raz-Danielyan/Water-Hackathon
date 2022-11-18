import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from 'assets/custom-icons/CloseIcon';
import { Button, Paragraph, Row } from '../atoms';

const ModalContentWrapper = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  height: max-content;
  transform: scale(0);
  transition: all ease 0.3s;
  overflow: hidden;
  position: relative;

  ${props =>
    props.open_status === 'open' &&
    css`
      transform: scale(1);
    `}
  ${props =>
    props.width &&
    css`
      width: ${props.width}!important;
    `}
    ${props =>
    props.height &&
    css`
      height: ${props.height}!important;
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props.margin}!important;
    `}
  ${props =>
    props.max_width &&
    css`
      max-width: ${props.max_width}!important;
    `}
    ${props =>
    props.border &&
    css`
      border: ${props.border}!important;
    `}
`;

const ModalContent = ({
  title,
  closeModal,
  children,
  customWidth,
  customMaxWidth,
  customMargin,
  headerBG,
  icon = true,
  notification = true,
}) => {
  const [openStatus, setOpenStatus] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setOpenStatus('open');
    }, 0);

    return () => setOpenStatus('');
  }, []);

  return (
    <ModalContentWrapper
      onClick={event => event.stopPropagation()}
      open_status={openStatus}
      width={customWidth}
      margin={customMargin}
      max_width={customMaxWidth}
      border='1px solid #00AEE6'
    >
      <Row
        padding={notification ? '16px  16px 16px 46px' : '0 16px'}
        // padding='0 16px'
        align='middle'
        justify='space-between'
        back_color={headerBG}
        // radius='4px 4px 0 0'
        height='32px'
        mb='6'
      >
        <Paragraph fz={20} fw={700} mb={0} color='#58585A'>
          {title}
        </Paragraph>
        <Button type='grey_ghost' padding='0' height='fit-content' onClick={closeModal}>
          <CloseIcon />
        </Button>
      </Row>
      {children}
    </ModalContentWrapper>
  );
};

export default ModalContent;
