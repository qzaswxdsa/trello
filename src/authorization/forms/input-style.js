import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  text-align: center;
  outline: none;
  border: none;
  width: 300px;

  ${(props) => {
    switch (
      props.checkEmail ||
      props.checkPassword ||
      props.checkConfirmPassword
    ) {
      case "true":
        return css`
          border-bottom: 1px solid green;
        `;
      case "false":
        return css`
          border-bottom: 1px solid #cf2525;
        `;
      default:
        return css`
          border-bottom: 1px solid white;
        `;
    }
  }}
  background-color: transparent;
  margin-top: 40px;
  opacity: 0.7;
  padding: 5px;
  color: white;
  ::-webkit-input-placeholder {
    color: white;
    letter-spacing: 1px;
    opacity: 0.5;
  }
  &:focus {
    color: white;
    opacity: 1;
    border-bottom: 1px solid #59c6a5;
  }
  &:hover {
    color: white;
    opacity: 1;
  }
`;

export const ActionsLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 300px;
  font-size: 14px;
`;

export const LogInLink = styled(NavLink)`
  color: white;
  cursor: pointer;
  opacity: 0.5;
  text-decoration: none;
  &.active {
    opacity: 1;
    border-bottom: 2px solid white;
  }
`;

export const SignUpLink = styled(LogInLink)`
  margin-left: 25px;
`;

export const ErrorMessage = styled.span`
  color: #cf2525;
  font-size: 10px;
  margin-top: 3px;
  text-align: center;
  letter-spacing: 1px;
`;
