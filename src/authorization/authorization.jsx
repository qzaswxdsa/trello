import {
  MainBackground,
  AuthorisationForm,
  LogoTrello,
  EntryField,
} from "./authorization.style";
import { FormInput } from "./forms/input-style";
import { ActionsLinks, LogInLink, SignUpLink } from "./forms/input-style";
import { Route, Routes } from "react-router-dom";
import SignUp from "./forms/sign-up";
import LogIn from "./forms/log-in";
import SubmitBtn from "./forms/submit-button";

const AuthorizationApp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <MainBackground>
      <FormInput onSubmit={handleSubmit}>
        <AuthorisationForm>
          <LogoTrello>Trello</LogoTrello>
          <EntryField>
            <Routes>
              <Route exact path="/logIn" element={<LogIn />} />
              <Route exact path="/signUp" element={<SignUp />} />
            </Routes>
          </EntryField>
          <ActionsLinks>
            <LogInLink to="/logIn">Log In </LogInLink>
            <SignUpLink to="/signUp">Sign Up</SignUpLink>
          </ActionsLinks>
          <SubmitBtn />
        </AuthorisationForm>
      </FormInput>
    </MainBackground>
  );
};

export default AuthorizationApp;
