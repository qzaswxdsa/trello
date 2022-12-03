import styled from "styled-components";

export const MainBackground = styled.div`
  font-family: "Roboto Mono", monospace;
  height: 100vh;
  width: 100vw;
  background-color: #15616d;
  background-image: linear-gradient(135deg, #15616d 0%, #001524 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const AuthorisationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const LogoTrello = styled.div`
  font-size: 36px;
  color: white;
  margin-bottom: 20px;
`;

export const EntryField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubmitButton = styled.button`
  padding: 7px;
  width: 200px;
  margin-top: 50px;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid white;
  color: white;
  transition: 0.5s;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    color: black;
    background-color: white;
  }
`;
