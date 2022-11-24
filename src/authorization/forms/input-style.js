import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ActionsLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
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
