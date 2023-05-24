import { SubmitButton } from "../authorization.style";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import { useFilledFieldsLogIn, useSuccessForm } from "./hooks";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const client = axios.create({
  baseURL: "http://localhost:3000",
});
const SubmitBtn = (props) => {
  const { values } = props;
  const success = useSuccessForm(values);
  const filled = useFilledFieldsLogIn(values);
  const location = useLocation();

  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const getUser = () => {
    client
      .get("/user")
      .then((response) => {
        setUser(response.data);
        validUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validUser = () => {
    user.some((i) => i.email === values.email && i.password === values.password)
      ? navigate("/main")
      : alert("no user");
  };

  const disabledButton = () => {
    if (location.pathname === "/signUp") return !success;
    return !filled;
  };
  return (
    <>
      <SubmitButton onClick={() => getUser()} disabled={disabledButton()}>
        Submit
      </SubmitButton>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};
const mapStateToProps = (state) => ({
  values: state.values,
});
export default connect(mapStateToProps, mapDispatchToProps)(SubmitBtn);
