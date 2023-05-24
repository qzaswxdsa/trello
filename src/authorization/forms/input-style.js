import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const statuses = {
  error: "#b02727",
  default: "white",
};

const statusesHover = {
  error: "#e01919",
  default: "white",
};

export const ErrorMessage = styled.span`
  color: #b02727;
  font-size: 10px;
  margin-top: 3px;
  text-align: center;
  letter-spacing: 1px;
`;

export const Input = styled.input`
  text-align: center;
  outline: none;
  border: none;
  width: 300px;
  border-bottom: 1px solid
    ${(props) => (props.status ? statuses.default : statuses.error)};
  color: ${(props) => (props.status ? statuses.default : statuses.error)};
  background-color: transparent;
  margin-top: 40px;
  opacity: 0.7;
  padding: 5px;
  ::-webkit-input-placeholder {
    color: white;
    letter-spacing: 1px;
    opacity: 0.5;
  }
  &:hover {
    color: ${({ status }) => statusesHover[status]};
    border-bottom: 1px solid ${({ status }) => statusesHover[status]};
    opacity: 1;
  }

  &:hover + ${ErrorMessage} {
    color: ${statusesHover.error};
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
