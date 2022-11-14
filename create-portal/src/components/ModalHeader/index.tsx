import React from "react";
import styled from "styled-components";

export const ModalHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  height: 5%;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
`;

interface ModalHeaderProps {
  onClick: () => void;
}

const ModalHeader = ({ onClick }: ModalHeaderProps) => {
  return (
    <ModalHeaderContainer>
      <CloseButton onClick={onClick}>x</CloseButton>
    </ModalHeaderContainer>
  );
};

export default ModalHeader;
