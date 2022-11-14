import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import ModalHeader from "./components/ModalHeader";
import ModalPortal from "./components/Portal";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button``;

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const modalOpen = (): void => {
    setIsOpen(true);
  };

  const modalClose = (): void => {
    setIsOpen(false);
  };

  return (
    <Container>
      <StyledButton onClick={modalOpen}>modal open</StyledButton>
      {isOpen && (
        <ModalPortal>
          <Modal onClose={modalClose}>
            <ModalHeader onClick={modalClose} />
            <p>hello modal</p>
          </Modal>
        </ModalPortal>
      )}
    </Container>
  );
}

export default App;
