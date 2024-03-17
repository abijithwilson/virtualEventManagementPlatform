const validRequiredField = (value) => {
  if (typeof value === "string") {
    if (!value || value === "" || value === " ") {
      return false;
    }
    return true;
  }
};

const validateUserRegistration = (user) => {
  const errors = [];
  const requiredFields = [
    "username",
    "password",
    "confirmPassword",
    "email",
    "phone",
  ];
  requiredFields.forEach((field) => {
    if (!validRequiredField(user[field])) {
      errors.push({
        field,
        msg: `${field} is required`,
      });
    }
  });
};

module.exports = { validateUserRegistration };
