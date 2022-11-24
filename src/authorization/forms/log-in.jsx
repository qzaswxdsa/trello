import { FormInput, Input } from "../authorization.style";
const LogIn = () => {
  return (
    <>
      <Input placeholder={"E-mail"}></Input>
      <Input placeholder={"Password"} type={"password"}></Input>
    </>
  );
};

export default LogIn;
