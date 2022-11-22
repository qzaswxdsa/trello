import {
  Body,
  LogoTrello,
  EntryField,
  Input,
  ActionsSpan,
  SignUpSpan,
  LogInSpan,
  SubmitButton,
  Form,
  InputBlank,
} from "./styledAuthorization";
import { useState } from "react";

const AuthorizationApp = () => {
  const [active, setActive] = useState("logIn");

  const keyPress = (e) => {
    const [, fieldIndex] = e.target.name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);
    if (e.key === "Enter") {
      const nextField = document.querySelector(
        `[name=input-${fieldIntIndex + 1}]`
      );
      if (nextField !== null) {
        nextField.focus();
      }
    }
  };

  return (
    <Body>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&family=Roboto+Slab:wght@600&display=swap"
        rel="stylesheet"
      />
      <LogoTrello>Trello</LogoTrello>
      <EntryField>
        <Form>
          <Input
            name={"input-1"}
            placeholder={"E-mail"}
            onKeyPress={keyPress}
          ></Input>
          <Input
            name={"input-2"}
            placeholder={"Password"}
            type={"password"}
            onKeyPress={keyPress}
          ></Input>
          {active === "signUp" ? (
            <Input
              name={"input-3"}
              placeholder={"Confirm password"}
              type={"password"}
              onKeyPress={keyPress}
            ></Input>
          ) : (
            <InputBlank></InputBlank>
          )}
        </Form>
      </EntryField>
      <ActionsSpan>
        <LogInSpan active={active} onClick={() => setActive("logIn")}>
          Log in
        </LogInSpan>
        <SignUpSpan active={active} onClick={() => setActive("signUp")}>
          Sign Up
        </SignUpSpan>
      </ActionsSpan>
      <SubmitButton>SUBMIT</SubmitButton>
    </Body>
  );
};
export default AuthorizationApp;
