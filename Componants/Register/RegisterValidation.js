import validator from "validator";
function RegisterVildation(values) {
    let error = {};
    console.log(values)
    if(!validator.isAlpha(values.name) && !validator.isEmpty(values.name)) {
      error.name = "name should contain only letters";
    }
    if(!validator.isEmail(values.email)) {
      error.email = "email address is not valid";
    }
    if(!validator.equals(values.password_confirmation, values.password)) {
      error.password = "passwords is not equal";
    }
    if(validator.isEmpty(values.password)) {
      error.password = "password can not be empty";
    }
    if(validator.isEmpty(values.phone)) {
      error.phone = "phone can not be empty";
    }
    if(validator.isEmpty(values.name)) {
      error.name = "name can not be empty";
    }
    if(!validator.isInt(values.phone)) {
      error.phone = "phone has to be only numbers";
    }
    return error;
  }
  
  export default RegisterVildation;
  