import * as Yup from "yup";

export const defaultValues = {
  email: " ",
  password: "",
};

export const formSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export { default as ReactHookForm } from "./LoginForm";
