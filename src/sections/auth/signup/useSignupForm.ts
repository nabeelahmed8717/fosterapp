import useAuth from "@root/hooks/useAuth";
import { useLoginMutation } from "@root/services/authApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

export const useSignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const { login } = useAuth();
  const [isErrorMessage, setIsErrorMessage] = useState("");
  const [isSuccessMessage, setIsSuccessMessage] = useState("");
  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleConfirmShowPassword = () => {
    setConfirmPassword((show) => !show);
  };

  // const onSubmit = (credentials: any) => {
  //   router.push("/auth/verification");
  // };


  const businessName = "Foster App";
  const onSubmit = (formValues:any) => {
    formValues.business_name = businessName;
    formValues.business_name = businessName;
    if (formValues.password !== formValues.password_confirmation) {
      setIsErrorMessage("Password and Confirm Password do not match");
      return;
    }

    fetch("https://jobs.orcaloholding.co.uk/api/sale-site/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.status === true) {
          const user = responseData.data.user;
          setIsSuccessMessage(responseData.msg);
          setIsErrorMessage(""); // Clear any previous error messages
          methods.reset(); // Reset the form
        } else {
          console.error("Registration Failed");
          setIsErrorMessage(responseData.msg);
          setIsSuccessMessage(""); // Clear any previous success messages
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        setIsErrorMessage("An error occurred while submitting the form");
        setIsSuccessMessage("");
      });
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSuccessMessage("");
      setIsErrorMessage("");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSuccessMessage, isErrorMessage]);
  return {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    onSubmit,
    isSubmitting,
    isValid,
    handleConfirmShowPassword,
    confirmPassword,
    isErrorMessage,
    isSuccessMessage
  };
};
