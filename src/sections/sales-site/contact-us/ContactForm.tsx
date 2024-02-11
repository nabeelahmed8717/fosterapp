import {
  Box,
  FormControlLabel,
  Grid,
  RadioGroup,
  useTheme,
  Radio,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import SalesSiteHeader from "@root/components/SalesSiteHeader";
import React from "react";
import { useContactForm } from "./useContactForm";
import { cardsData, contactFormData } from ".";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@root/components/hook-form";
import heroVector from "@root/assets/img/hero-vector.png";
import cardBg from "@root/assets/img//contact-us-bg.png";
import Image from "next/image";
import CustomSnackbar from "@root/components/snackbar/CustomSnackbar";

const ContactForm = () => {
  const theme: any = useTheme();
  const {
    methods,
    onSubmit,
    handleSubmit,
    isSubmitting,
    getValues,
    setValue,
    trigger,
    isErrorMsg,
    isSuccessMsg

  } = useContactForm();

  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={{ p: { xs: "35px 0 0 0" } }}>
        <SalesSiteHeader title="Contact Us" />
      </Box>

      {isErrorMsg || isSuccessMsg ? (<CustomSnackbar severity={isErrorMsg ? "error" : "success"} message={isErrorMsg || isSuccessMsg} />) : null}
      <Grid
        container
        justifyContent={{ xs: "center", lg: "start" }}
        sx={{ p: { xs: 2, lg: 0 }, mb: { xs: 4, sm: 7, lg: 10, xl: 12 } }}
      >
        <Grid
          item
          xs={12}
          sm={11}
          md={10}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Card sx={styles.cardWrapper}>
            {cardsData.map((item: any) => (
              <CardContent key={item.id}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Image
                    src={item.icon}
                    alt="cards-image"
                    width={50}
                    height={50}
                  />
                  <Box>
                    <Typography gutterBottom variant="h6" sx={styles.cardTitle}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.cardDescription}>
                      {item.contact}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            ))}
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={11}
          md={10}
          lg={6}
          xl={5.5}
          sx={{ mt: { xs: 3, md: 4, lg: 2 } }}
        >
          <Card
            sx={{
              p: { xs: 2.5, sm: 4 },
              boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
            }}
          >


            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={1}
                alignItems="center"
                sx={{ pl: { lg: 8, xl: 15 } }}
              >
                {contactFormData.map((form: any) => {
                  return (
                    <Grid item xs={12} md={form?.gridLength} key={form.id}>
                      <Box sx={{ px: 0.9, py: 1 }}>
                        {form.component !== "RadioGroup" && (
                          <form.component
                            sx={{ backgroundColor: "#fff" }}
                            disabled={form?.disabled}
                            size="small"
                            {...form.otherOptions}
                          >
                            {form.otherOptions.select
                              ? form.options.map((option: any) => (
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
                  <LoadingButton
                    type="submit"
                    loading={isSubmitting}
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      "&:hover": { bgcolor: theme.palette.primary.main },
                      width: "100%",
                      py: 1,
                    }}
                    variant="contained"
                  >
                    Send Message
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

export default ContactForm;

const styles: any = {
  mainWrapper: (theme: any) => ({
    backgroundColor: theme.palette.grey[0],
    backgroundImage: `url(${heroVector.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }),

  cardWrapper: (theme: any) => ({
    backgroundImage: `url(${cardBg.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: { xs: "100%", lg: 390 },
    position: { xs: "block", lg: "absolute" },
    right: { xs: "0", lg: "-100px", xl: "-150px" },
    zIndex: 3,
    py: { xs: 1, sm: 2, lg: 8 },
  }),

  cardTitle: (theme: any) => ({
    fontWeight: 400,
    color: theme.palette.grey[0],
    margin: 0,
  }),

  cardDescription: (theme: any) => ({
    color: theme.palette.grey[0],
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
    mb: { xs: 2, md: 4 },
  }),
};
