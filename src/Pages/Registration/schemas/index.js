import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const signUpSchema = Yup.object().shape({
  fname: Yup.string().min(2).max(25).required("Please enter your fname"),
  lname: Yup.string().min(2).max(25).required("Please enter your lname"),
  email: Yup.string().email().required("Please enter your email"),
  // phone: Yup.number().min(8).required("A phone number is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email"),
});
