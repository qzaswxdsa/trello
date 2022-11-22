import styled, { css } from "styled-components";

export const Body = styled.body`
  font-family: "Roboto Mono", monospace;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(135deg, #daf2e4 1%, #002661 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const InputBlank = styled.input`
  cursor: default;
  outline: none;
  border: none;
  width: 300px;
  border-bottom: 1px solid white;
  background-color: transparent;
  margin-bottom: 40px;
  opacity: 0;
  padding: 5px;
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

export const ActionsSpan = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 300px;
  font-size: 14px;
`;

export const LogInSpan = styled.span`
  ${(props) => {
    switch (props.active) {
      case "logIn":
        return css`
          color: white;
          border-bottom: 2px solid white;
          margin-right: 20px;
          cursor: pointer;
        `;
      default:
        return css`
          color: white;
          margin-right: 20px;
          opacity: 0.5;
          cursor: pointer;
        `;
    }
  }}
`;

export const SignUpSpan = styled.span`
  ${(props) => {
    switch (props.active) {
      case "signUp":
        return css`
          color: white;
          border-bottom: 2px solid white;
          cursor: pointer;
        `;
      default:
        return css`
          color: white;
          opacity: 0.5;
          cursor: pointer;
        `;
    }
  }}
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
