import {
  MainBackground,
  AuthorisationForm,
  LogoTrello,
  EntryField,
  SubmitButton,
} from "./authorization.style";
import { FormInput } from "./forms/input-style";
import { ActionsLinks, LogInLink, SignUpLink } from "./forms/input-style";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./forms/sign-up";
import LogIn from "./forms/log-in";
import { useEffect, useState } from "react";
import { EMAIL_REGEXP } from "../constants";

const AuthorizationApp = () => {
  const navigate = useNavigate();

  const [valueField, setValueField] = useState({
    e_mail: "",
    password: "",
    confirm_password: "",
  });
  const [checkEmail, setCheckEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [checkConfirmPassword, setCheckConfirmPassword] = useState("");

  useEffect(() => {
    if (
      checkEmail === "true" &&
      checkPassword === "true" &&
      checkConfirmPassword === "true"
    ) {
      setTimeout(() => navigate("/main"), 1000);
    }
  }, [checkConfirmPassword, checkEmail, checkPassword]);
  const onChange = (e) => {
    setValueField({
      ...valueField,
      [e.target.name]: e.target.value,
    });
  };
  const resetInput = () => {
    valueField.e_mail = "";
    valueField.password = "";
    valueField.confirm_password = "";
    setCheckEmail("");
    setCheckPassword("");
    setCheckConfirmPassword("");
  };
  const checkField = () => {
    EMAIL_REGEXP.test(valueField.e_mail)
      ? setCheckEmail("true")
      : setCheckEmail("false");
    valueField.password.length >= 8
      ? setCheckPassword("true")
      : setCheckPassword("false");
    valueField.confirm_password === valueField.password &&
    valueField.confirm_password !== ""
      ? setCheckConfirmPassword("true")
      : setCheckConfirmPassword("false");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checkField();
  };

  return (
    <MainBackground>
      <FormInput onSubmit={onSubmit}>
        <AuthorisationForm>
          <LogoTrello>Trello</LogoTrello>
          <EntryField>
            <Routes>
              <Route exact path="/logIn" element={<LogIn />} />
              <Route
                exact
                path="/signUp"
                element={
                  <SignUp
                    checkEmail={checkEmail}
                    checkPassword={checkPassword}
                    checkConfirmPassword={checkConfirmPassword}
                    onChange={onChange}
                  />
                }
              />
            </Routes>
          </EntryField>
          <ActionsLinks>
            <LogInLink to="/logIn">Log In </LogInLink>
            <SignUpLink to="/signUp" onClick={resetInput}>
              Sign Up
            </SignUpLink>
          </ActionsLinks>
          <SubmitButton>SUBMIT</SubmitButton>
        </AuthorisationForm>
      </FormInput>
    </MainBackground>
  );
};
export default AuthorizationApp;
