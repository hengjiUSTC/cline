import React from "react";
import styled from "styled-components";

interface HelloViewProps {
  onClose: () => void;
}

const HelloView: React.FC<HelloViewProps> = ({ onClose }) => {
  return (
    <Container>
      <CloseButton onClick={onClose}>×</CloseButton>
      <Message>Hello</Message>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
`;

const Message = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  font-size: 24px;
`;

export default HelloView;
