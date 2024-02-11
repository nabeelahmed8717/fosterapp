import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { defaultValues, formSchema } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const useContactForm = () => {
  const router = useRouter();
  const theme: any = useTheme();
  const [isErrorMsg, setIsErrorMsg] = useState("")
  const [isSuccessMsg, setIsSuccessMsg] = useState("")
  const { fosterCarerId } = router.query;
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    setValue,
    trigger,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = methods;

  const business_name = "Foster App"
  //OnSubmit Function
  const onSubmit = (formValues: any) => {
    formValues.business_name = business_name;

    fetch('https://jobs.orcaloholding.co.uk/api/sale-site/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues), // Convert formValues to JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        if (responseData.status === true) {
          const user = responseData.data.user;
          setIsSuccessMsg(responseData.msg);

          setIsErrorMsg(''); // Clear any previous error messages

        } else {
          console.error('Registration Failed');
          setIsErrorMsg(responseData.msg);
          setIsSuccessMsg(''); // Clear any previous success messages
        }
      })
      .catch((error) => {
        console.error('Fetch Error:', error);
        setIsErrorMsg('An error occurred while submitting the form');
        setIsSuccessMsg('');
      });
    methods.reset()
  };


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsErrorMsg('');
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isErrorMsg, isSuccessMsg]);
  return {
    router,
    onSubmit,
    isLoading,
    theme,
    handleSubmit,
    methods,
    getValues,
    setValue,
    trigger,
    isFetching,
    isSubmitting,
    fosterCarerId,
    isErrorMsg,
    isSuccessMsg
  };
};
