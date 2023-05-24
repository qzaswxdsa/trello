import { Input } from "./input-style";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";
import { fieldsLogIn } from "./utils-fields/fields-log-in";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const LogIn = (props) => {
  const { changeValues, resetValues } = props;
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
      {Object.values(fieldsLogIn).map((i, idx) => {
        return (
          <>
            <Input
              onChange={handleChange}
              placeholder={i.placeholder}
              key={idx}
              type={i.type}
              name={i.name}
              status={true}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
