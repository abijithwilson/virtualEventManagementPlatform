const User = require("../models/user.model");
const { validateUserRegistration } = require("../validators/user-validator");

const registerUser = async (params) => {
  const user = {
    username: params.username ? params.username : "",
    password: params.password ? params.password : "",
    confirmPassword: params.confirmPassword ? params.confirmPassword : "",
    email: params.email ? params.email : "",
    phone: params.phone ? params.phone : "",
  };
  const errors = validateUserRegistration(user);
  if (errors.length) {
    return {
      error: true,
      msg: "invalid details provided",
      data: errors,
    };
  } else {
    if (user.password !== user.confirmPassword) {
      return {
        error: true,
        msg: "password and confirm password not matching",
      };
    } else {
      delete user.confirmPassword;
      const saltRounds = 10;

      bcrypt.hash(user.password, saltRounds, function(err, hash){
        hash = user.password;
        user.preferences = [];
        
      })
    }
  }
};
