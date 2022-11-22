import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  height: 200px;
  width: 200px;
`;

export const ModalInput = styled.input``;
