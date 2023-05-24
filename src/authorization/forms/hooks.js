import { useEffect, useState } from "react";
import { fieldsSignUp } from "./utils-fields/fields-sign-up";
import { fieldsLogIn } from "./utils-fields/fields-log-in";

export const useSuccessForm = (values) => {
  const [isSuccessValidate, setIsSuccessValidate] = useState(false);
  useEffect(() => {
    if (
      Object.keys(values).length &&
      Object.keys(fieldsSignUp).every(
        (key) =>
          values[key] !== "" &&
          fieldsSignUp[key].getIsValid(
            key === "confirmPassword"
              ? `${values.password} ${values[key]}`
              : values[key]
          )
      )
    ) {
      setIsSuccessValidate(true);
    } else setIsSuccessValidate(false);
  }, [values]);
  return isSuccessValidate;
};

export const useFilledFieldsLogIn = (values) => {
  const [filledFields, setFilledFields] = useState(false);
  useEffect(() => {
    if (
      Object.keys(fieldsLogIn).every(
        (i) => values[i] !== "" && values[i] !== undefined
      )
    ) {
      setFilledFields(true);
    } else setFilledFields(false);
  }, [values]);
  return filledFields;
};
