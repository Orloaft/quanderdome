export const validateSignUp = (form) => {
  if (form.username.length < 5 || form.username.length > 10) {
    return "username should be 5-10 letters";
  } else if (form.password.length < 6 || form.password.length > 12) {
    return "password should be 6-12 letters";
  } else {
    return "";
  }
};
