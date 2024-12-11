import styled from 'styled-components';
import ReactDOM from 'react-dom';

const ModalWrapperComp = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: block;
  justify-content: center;
  background-color: rgba(8, 26, 51, 0.8);
  z-index: 102;
  overflow-y: auto;
  align-items: center;
}


`;

const modalRoot = document.getElementById('modal-root');

const ModalWrapper = ({ children, closeModal }) => {
  const handleClick = event => {
    if (event.target === event.currentTarget) {
      event.stopPropagation();
      closeModal();
    }
  };
  return ReactDOM.createPortal(
    <ModalWrapperComp onMouseDownCapture={handleClick}>{children}</ModalWrapperComp>,
    modalRoot
  );
};

export default ModalWrapper;
