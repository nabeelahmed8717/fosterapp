// @mui
import { Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSignupForm } from "./useSignupForm";
import CustomSnackbar from "@root/components/snackbar/CustomSnackbar";

export default function SignupForm() {
  const {
    showPassword,
    methods,
    handleShowPassword,
    handleSubmit,
    handleConfirmShowPassword,
    onSubmit,
    isSubmitting,
    isValid,
    confirmPassword,
    isErrorMessage,
    isSuccessMessage
  } = useSignupForm();

  const passwordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleShowPassword} edge="end">
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  const confirmPasswordEndAdornment = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton onClick={handleConfirmShowPassword} edge="end">
          {confirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </InputAdornment>
    ),
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {isErrorMessage || isSuccessMessage ? (<CustomSnackbar severity={isErrorMessage ? "error" : "success"} message={isErrorMessage || isSuccessMessage} />) : null}
      <Grid
        container
        spacing={{ xs: 3, lg: 2, xl: 3 }}
        sx={{ mt: 0, px: { xs: 0, lg: 2 } }}
      >
        <Grid item xs={12} sm={6}>
          <RHFTextField size="small" name="first_name" label="First Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField size="small" name="last_name" label="Last Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField size="small" name="email" label="Email" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="business_name"
            label="Bussiness Name"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={passwordEndAdornment}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RHFTextField
            size="small"
            name="password_confirmation"
            label="Confirm Password"
            type={confirmPassword ? "text" : "password"}
            InputProps={confirmPasswordEndAdornment}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            fullWidth
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            sx={{ fontWeight: 500 }}
          >
            Sign Up
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
