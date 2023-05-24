import { ErrorMessage, Input } from "./input-style";
import { fieldsSignUp } from "./utils-fields/fields-sign-up";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SignUp = (props) => {
  const { values, changeValues, resetValues } = props;
  const location = useLocation();

  useEffect(() => {
    resetValues();
  }, [location.pathname]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValues({ [name]: value });
  };
  return (
    <>
      {Object.values(fieldsSignUp).map((i, idx) => {
        const isValid = i.getIsValid(
          i.name === "confirmPassword"
            ? `${values.password} ${values[i.name]}`
            : values[i.name]
        );
        return (
          <>
            <Input
              onChange={handleChange}
              placeholder={i.placeholder}
              key={idx}
              type={i.type}
              name={i.name}
              status={isValid || !values[i.name]}
            />
            {!isValid && values[i.name] && (
              <ErrorMessage>{i.errorMessage}</ErrorMessage>
            )}
          </>
        );
      })}
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
