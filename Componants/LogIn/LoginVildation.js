import validator from "validator";

function LoginVildation(values) {
  let error = {};
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i;

  if (validator.isEmpty(values.email)) {
    error.email = "Email is empty";
  } else if (!validator.isEmail(values.email)) {
    error.email = "Email is not valid";
  } else {
    error.email = "valid";
  }

  if (validator.isEmpty(values.password)) {
    error.password = "Password is empty";
  } else {
    error.password = "valid";
  }

  return error;
}

export default LoginVildation;
