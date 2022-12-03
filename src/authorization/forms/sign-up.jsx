import { ErrorMessage, Input } from "./input-style";

const SignUp = ({
  onChange,
  checkEmail,
  checkPassword,
  checkConfirmPassword,
}) => {
  return (
    <>
      <Input
        checkEmail={checkEmail}
        name={"e_mail"}
        placeholder={"E-mail"}
        onChange={onChange}
      />
      <span>
        {checkEmail === "true" ? (
          ""
        ) : checkEmail === "" ? (
          ""
        ) : (
          <ErrorMessage>Invalid email format.</ErrorMessage>
        )}
      </span>
      <Input
        checkPassword={checkPassword}
        name={"password"}
        placeholder={"Password"}
        type={"password"}
        onChange={onChange}
      />
      {checkPassword === "true" ? (
        ""
      ) : checkPassword === "" ? (
        ""
      ) : (
        <ErrorMessage>
          Short password.
          <br />
          Try one with at least 8 characters.
        </ErrorMessage>
      )}
      <Input
        checkConfirmPassword={checkConfirmPassword}
        name={"confirm_password"}
        placeholder={"Confirm password"}
        type={"password"}
        onChange={onChange}
      />
      {checkConfirmPassword === "true" ? (
        ""
      ) : checkConfirmPassword === "" ? (
        ""
      ) : (
        <ErrorMessage>Please make sure your passwords match.</ErrorMessage>
      )}
    </>
  );
};

export default SignUp;
