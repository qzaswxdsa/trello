import {
  MainBackground,
  ContentDiv,
  LogoTrello,
  EntryField,
  SubmitButton,
  FormInput,
} from "./authorization.style";
import { ActionsLinks, LogInLink, SignUpLink } from "./forms/input-style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./forms/sign-up";
import LogIn from "./forms/log-in";

const AuthorizationApp = () => {
  return (
    <BrowserRouter>
      <MainBackground>
        <ContentDiv>
          <LogoTrello>Trello</LogoTrello>
          <EntryField>
            <FormInput>
              <Routes>
                <Route exact path="/logIn" element={<LogIn />} />
                <Route exact path="/signUp" element={<SignUp />} />
              </Routes>
            </FormInput>
          </EntryField>
          <ActionsLinks>
            <LogInLink to="/logIn">Log In</LogInLink>
            <SignUpLink to="/signUp">Sign Up</SignUpLink>
          </ActionsLinks>
          <SubmitButton>SUBMIT</SubmitButton>
        </ContentDiv>
      </MainBackground>
    </BrowserRouter>
  );
};
export default AuthorizationApp;
