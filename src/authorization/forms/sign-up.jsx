import { Input } from "../authorization.style";

const SignUp = () => {
  return (
    <>
      <Input placeholder={"E-mail"}></Input>
      <Input placeholder={"Password"} type={"password"}></Input>
      <Input placeholder={"Confirm password"} type={"password"}></Input>
    </>
  );
};

export default SignUp;
