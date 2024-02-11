// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Box, TextField, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFTextField({
  name,
  fullWidth = true,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          sx={{ position: "relative" }}
          {...field}
          error={!!error}
          helperText={
            <Typography
              component={"span"}
              style={{ position: "absolute", top: "40px", fontSize: "12px" }}
            >
              {error?.message}
            </Typography>
          }
          fullWidth={fullWidth}
          {...other}
        />
      )}
    />
  );
}
