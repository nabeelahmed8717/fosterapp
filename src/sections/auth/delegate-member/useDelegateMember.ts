import useAuth from "@root/hooks/useAuth";
import { useLoginMutation } from "@root/services/authApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";

export const useDelegateMember = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const { login } = useAuth();
  const theme: any = useTheme();
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

  const onSubmit = (credentials: any) => {
    router.push("/auth/verification");
  };

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
    theme
  };
};
