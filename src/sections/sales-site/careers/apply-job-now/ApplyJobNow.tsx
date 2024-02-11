import {
  Box,
  FormControlLabel,
  Grid,
  RadioGroup,
  useTheme,
  Radio,
  Typography,
  Card,
} from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import React from "react";
import { useApplyJobNow } from "./useApplyJobNow";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@root/components/hook-form";
import heroVector from "@root/assets/img/hero-vector.png";
import { contactFormData } from "..";
import SingleFileUploader from "@root/components/hook-form/single-file-uploader/SingleFileUploader";

const ApplyJobNow = () => {
  const theme: any = useTheme();
  const {
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    getValues,
    setValue,
    trigger,
  } = useApplyJobNow();

  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={{ p: 3.5 }}>
        <SalesSiteHeader title="Join Our Team" />
      </Box>
      <Grid container justifyContent={"center"} sx={{ pb: 5 }}>
        <Grid item xs={12} md={7} xl={6} sx={{ p: { xs: 3, lg: 0 } }}>
          <Card
            sx={{ p: 4, boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                m: 0,
                fontWeight: 700,
                color: theme.palette.grey[700],
                mb: 2,
              }}
            >
              Personal Information
            </Typography>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={3}
                alignItems="center"
              >
                {contactFormData.map((form: any) => {
                  return (
                    <Grid item xs={12} md={form?.gridLength} key={form.id}>
                      <Box sx={{ py: 1 }}>
                        {form.component !== "RadioGroup" && (
                          <form.component
                            sx={{ backgroundColor: theme.palette.grey[0] }}
                            size="small"
                            {...form.otherOptions}
                          >
                            {form.otherOptions.select
                              ? form.options?.map((option: any) => (
                                  <option
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </option>
                                ))
                              : null}
                          </form.component>
                        )}
                        {form.component === "RadioGroup" && (
                          <Box
                            sx={{
                              display: "flex",
                              gap: 2,
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                color: theme.palette.grey[500],
                                fontWeight: theme.typography.fontWeightMedium,
                              }}
                              variant="body1"
                              color="initial"
                            >
                              {form.otherOptions.label}
                            </Typography>
                            <RadioGroup
                              name={form.otherOptions.name}
                              defaultValue={getValues(
                                `${form.otherOptions.name}`
                              )}
                              onChange={(e) => {
                                setValue(
                                  `${form.otherOptions.name}`,
                                  `${e.target.value === "yes" ? true : false}`
                                );
                                trigger(`${form.otherOptions.name}`);
                              }}
                              //  value={getValues(`${form.otherOptions.name}`)}
                              sx={{ display: "flex", flexDirection: "row" }}
                            >
                              {form?.Options?.map((mode: any, index: any) => {
                                return (
                                  <Grid key={mode} item>
                                    <FormControlLabel
                                      label={mode === true ? "yes" : "No"}
                                      control={<Radio />}
                                      value={mode}
                                    />
                                  </Grid>
                                );
                              })}
                            </RadioGroup>
                          </Box>
                        )}
                      </Box>
                    </Grid>
                  );
                })}

                <Grid xs={12} item>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      m: 0,
                      fontWeight: 700,
                      color: theme.palette.grey[700],
                      mb: 2,
                    }}
                  >
                    Add a CV
                  </Typography>

                  {/* Component to uplaod CV */}
                  <SingleFileUploader uploadText="Upload CV" />

                  {/* Component to upload Cover Letter */}
                  <Box sx={{ mt: 3 }}>
                    <SingleFileUploader uploadText="Upload Cover Letter" />
                  </Box>
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      "&:hover": { bgcolor: theme.palette.primary.main },
                      width: "100%",
                      py: 1,
                      mt: 4,
                    }}
                    variant="contained"
                  >
                    Continue
                  </LoadingButton>
                </Grid>
              </Grid>
            </FormProvider>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplyJobNow;

const styles: any = {
  mainWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[0],
    backgroundImage: `url(${heroVector.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }),

  cardWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[200],
    width: 350,
    "&:hover": {
      boxShadow: "7px 6px 3.5px -1px rgb(14 145 140 / 74%)",
    },
  }),

  cardTitle: (theme: any) => ({
    fontWeight: 600,
    color: theme.palette.grey[700],
  }),

  cardDescription: (theme: any) => ({
    color: theme.palette.grey[600],
    fontWeight: 500,
  }),

  cardFooter: (theme: any) => ({
    fontWeight: 700,
    color: theme.palette.primary.main,
    mt: 3,
  }),

  cardsGrid: (theme: any) => ({
    p: "20px 50px 50px 50px",
    backgroundColor: theme.palette.grey[0],
    mt: 4,
  }),
};
