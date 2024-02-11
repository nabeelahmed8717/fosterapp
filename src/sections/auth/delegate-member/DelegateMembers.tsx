// @mui
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDelegateMember } from "./useDelegateMember";
import { delegatesMembers } from ".";
import Link from "next/link";

export default function DelegateMembers() {
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
    theme,
  } = useDelegateMember();

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
      <Grid
        container
        spacing={{ xs: 1.5, lg: 1, xl: 1.5 }}
        alignItems="center"
        sx={{ px: { xs: 0, lg: 2 } }}
      >
        {delegatesMembers.map((form: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id}>
              <Box>
                <form.component size="small" {...form.otherOptions}>
                  {form.otherOptions.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              </Box>
            </Grid>
          );
        })}
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
            name="confirmPassword"
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
        <Grid item xs={12}>
          <Typography variant="body1">
            {`Already have an account? `}
            <Link
              href="https://app-dev.fosterapp.co.uk/auth/login"
              target="__blank"
              style={{
                color: theme.palette.primary.main,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Sign in
            </Link>
          </Typography>
          <Typography sx={{ mt: 1, mb: 1 }} variant="body1">
            {` By Signing up, you are creating a guest account, and you agree to `}
            <Typography
              sx={{
                mt: 1,
                mb: 1,
                fontWeight: 700,
                color: theme.palette.primary.main,
              }}
              variant="body1"
              component={"span"}
            >
              {` FosterApp`}
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.primary.main, fontWeight: 500 }}
          >
            Terms and conditions & Privacy
          </Typography>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
