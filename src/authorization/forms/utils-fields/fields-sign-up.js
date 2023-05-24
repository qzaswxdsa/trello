export const fieldsSignUp = {
  name: {
    name: "name",
    placeholder: "name",
    regex: /^.{2,}$/,
    required: true,
    getIsValid: function (value) {
      if (this.required && !value) return false;
      return this.regex.test(value);
    },
    errorMessage: "Invalid name format",
  },
  lastName: {
    name: "lastName",
    placeholder: "last name",
    regex: /^.{2,}$/,
    required: true,
    getIsValid: function (value) {
      if (this.required && !value) return false;
      return this.regex.test(value);
    },
    errorMessage: "Invalid last name format",
  },
  email: {
    name: "email",
    placeholder: "email",
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
    required: true,
    getIsValid: function (value) {
      if (this.required && !value) return false;
      return this.regex.test(value);
    },
    errorMessage: "Invalid email format",
  },
  password: {
    name: "password",
    placeholder: "password",
    type: "password",
    regex: /^.{8,}$/,
    required: true,
    getIsValid: function (value) {
      if (this.required && !value) return false;
      return this.regex.test(value);
    },
    errorMessage: "Short password. Try one with at least 8 characters.",
  },
  confirmPassword: {
    name: "confirmPassword",
    type: "password",
    placeholder: "confirm password",
    regex: /^.{8,}$/,
    required: true,
    getIsValid: function (value) {
      const [password, confirmPassword] = value.split(" ");
      if (this.required && !confirmPassword) return false;
      return this.regex.test(confirmPassword) && password === confirmPassword;
    },
    errorMessage: "Please make sure your passwords match",
  },
};
