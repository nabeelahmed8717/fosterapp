// @mui
import { Grid, IconButton, InputAdornment, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLoginForm } from "./useLoginForm";

export default function LoginForm() {
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
        isErrorMsg
    } = useLoginForm();

    const passwordEndAdornment = {
        endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
            </InputAdornment>
        ),
    };



    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid
                container
                spacing={{ xs: 3, lg: 2, xl: 3 }}
                sx={{ mt: 0, px: { xs: 0, lg: 2 } }}
            >

                <Grid item xs={12} sm={12}>
                    {isErrorMsg && <p style={{ color: "red", fontSize: "16px", fontWeight: "600", textAlign: "center" }}>{isErrorMsg}</p>}
                </Grid>
                <Grid item xs={12} sm={12}>
                    <RHFTextField size="small" name="email" label="Email" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <RHFTextField
                        size="small"
                        name="password"
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        InputProps={passwordEndAdornment}
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
                        Login
                    </LoadingButton>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
