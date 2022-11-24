import styled from "styled-components";

export const MainBackground = styled.div`
  font-family: "Roboto Mono", monospace;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(135deg, #daf2e4 1%, #002661 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const LogoTrello = styled.div`
  font-size: 36px;
  color: white;
  margin-bottom: 100px;
`;

export const EntryField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  text-align: center;
  outline: none;
  border: none;
  width: 300px;
  border-bottom: 1px solid white;
  background-color: transparent;
  margin-bottom: 40px;
  opacity: 0.7;
  padding: 5px;
  color: white;
  ::-webkit-input-placeholder {
    color: white;
    letter-spacing: 1px;
  }
  &:focus {
    color: white;
    opacity: 1;
    border-bottom: 1px solid #0a3a82;
  }
  &:hover {
    color: white;
    opacity: 1;
  }
`;

export const SubmitButton = styled.button`
  padding: 7px;
  width: 200px;
  margin-top: 100px;
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

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
