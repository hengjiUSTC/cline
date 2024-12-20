import React from "react";
import styled from "styled-components";
import { useExtensionState } from "../../context/ExtensionStateContext";
import { DebugMessage } from "../../../../src/shared/ExtensionMessage";

interface DebugViewProps {
  onClose: () => void;
}


const DebugView: React.FC<DebugViewProps> = ({ onClose }) => {
  const { debugMessages } = useExtensionState();

  return (
    <Container>
      <Overlay />
      <Content>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Message>
          <h2>Debug Messages</h2>
          {debugMessages.map((debugMessage: DebugMessage, index: number) => (
            <Request key={index}>
              <strong>{debugMessage.role}:</strong> {debugMessage.content}
            </Request>
          ))}
        </Message>
      </Content>
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const Content = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  z-index: 1001;
`;

const Message = styled.div`
  padding: 20px;
  font-size: 16px;
  line-height: 1.5;
  height: calc(100% - 40px);
  overflow-y: auto;
`;

const Request = styled.div`
  font-size: 14px;
  color: #555;
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  word-break: break-all;
`;

export default DebugView;
