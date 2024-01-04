import validator from "validator";
function LoginVildation (values) {
    let error = {};
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i;


if (validator.isEmail(values.email) && !validator.isEmpty(values.email) ) {
    console.log(values)
    error.email = "valid"

}else if(validator.isEmpty(values.email))
{
    console.log(values)

    error.email = "email is empty";
}

else {
    console.log(values)

        error.email = "Email is not Valid"; 
        
    }

if (validator.isEmpty(values.password)) {
        error.password = "Password is epmty"; 
    }else {
        error.password = "valid"
    }
    return error;
    
}

export default LoginVildation