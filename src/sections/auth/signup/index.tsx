import * as Yup from "yup";

export const defaultValues = {
  first_name: "",
  last_name: "",
  email: " ",
  business_name: "Foster App",
  password: "",
  password_confirmation: "",
};

export const formSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  password_confirmation: Yup.string().required("Required"),
});

export { default as ReactHookForm } from "./SignupForm";
