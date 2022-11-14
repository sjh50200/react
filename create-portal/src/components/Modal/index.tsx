import React, { ReactNode } from "react";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 60%;
  height: 80%;
  background: white;
  border-radius: 2rem;
`;

export interface ModalProps {
  children: ReactNode | string;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    <ModalOverlay onClick={props.onClose}>
      <ModalContent>{props.children}</ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
