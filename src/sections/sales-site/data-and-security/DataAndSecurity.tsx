/* eslint-disable react/no-unescaped-entities */
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import { introPoints } from "./index";
import React from "react";
import Link from "next/link";
import SalesSiteHeader from "@root/components/SalesSiteHeader";

const DataAndSecurity = () => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={{ p: "30px 30px 0 30px" }}>
        <SalesSiteHeader title="Data & Security" />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={11}>
          <Card
            sx={{
              p: { xs: 2, sm: "0 30px 30px 30px" },
              height: "100vh",
              overflowY: "auto",
              boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
            }}
          >
            <Box id="introduction">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[7600],
                  fontWeight: 700,
                  mt: 4,
                }}
              >
                Introduction
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.grey[800],
                  mt: 2,
                  lineHeight: "30px",
                  mb: 2,
                }}
              >
                {`The Data Protection Act 2018 came into force on 23 May 2018 (it
                replaced the Data Protection Act 1998) and is the UK’s
                implementation of the General Data Protection Regulation (GDPR)
                which came into force on 25 May 2018. The Data Protection Act
                2018 (DPA 2018) provides a legal framework for all data
                protection in the UK and has introduced new requirements for how
                organisations process personal data, as well as expanding the
                rights of individuals to control how their personal information
                is collected and processed.`}{" "}
                <br />
                <br />{" "}
                {`Fostering services across the UK must comply with this
                legislation, in order to be more accountable for data protection
                and consider issues of data compliance. This brief guidance
                outlines some key issues when considering data protection
                legislation for everyone involved in fostering.`}
              </Typography>
            </Box>
            <Box id="about-protection">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[6700],
                  fontWeight: 700,
                  mt: 4,
                  mb: 3,
                }}
              >
                About Data Protection
              </Typography>
              <Typography variant="body1" sx={styles.paragraphStyling}>
                {`Data protection legislation controls how your personal
                information is used by organisations, businesses or the
                government. Fostering services have access to a variety of
                personal data including sensitive personal data when working
                with fostering applicants, foster carers, children and young
                people, birth families, social care staff workforce, fostering
                panel members and so on.`}{" "}
                <br /> <br />{" "}
                {`Everyone responsible for accessing and using data
                within the fostering system (dependant on your role and
                responsibilities) has to follow strict rules called ‘data
                protection principles’.`}{" "}
                <br /> <br /> {`The main concepts and principles under the`}
                <Link
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                  target="__blank"
                  href="https://www.legislation.gov.uk/ukpga/2018/12/contents/enacted"
                >
                  {" "}
                  UK Data Protection Act 2018
                </Link>{" "}
                has incorporated the new elements and important enhancements
                from{" "}
                <Link
                  target="__blank"
                  href="https://gdpr-info.eu/"
                  style={{
                    textDecoration: "none",
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  GDPR
                </Link>
                {` , so therefore public authorities and fostering services will
                need to consider some new areas as well as doing some things
                differently.`}
                <br /> <br />
                {`Both the DPA 2018 and GDPR refer to sensitive personal data as
                “special categories of personal data” and says this is more
                sensitive and so needs more protection i.e. racial or ethnic
                origin, health, political opinions, religious or philosophical
                beliefs, or trade union membership, genetics, biometrics (where
                used for ID purposes) and data concerning a person’s sex life or
                sexual orientation.`}{" "}
                <Link
                  style={{
                    textDecoration: "none",
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                  target="__blank"
                  href="https://www.legislation.gov.uk/ukpga/2018/12/schedule/1/enacted"
                >
                  See DPA 2018 Schedule 1
                </Link>
                .
              </Typography>
            </Box>
            {/* Data we collect section started */}
            <Box id="principles">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[700],
                  fontWeight: 700,
                  mt: 4,
                  mb: 3,
                }}
              >
                Principles of Data Protection
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "30px", mb: 1 }}>
                The following principles should apply in terms of data
                protection:
              </Typography>
              <Box component="ul" sx={styles.unorderedList}>
                {introPoints.map((item: any) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </Box>
              <Box component="ul" sx={styles.unorderedList}>
                <li>
                  {`Public authorities and fostering services have a
                        responsibility to notify the`}{" "}
                  <Link
                    style={{
                      color: theme.palette.primary.main,
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                    target="__blank"
                    href="https://ico.org.uk/"
                  >
                    {`Information Commissioners Office (ICO)`}
                  </Link>{" "}
                  {`to report a breach, as well as individuals where high
                        risk instances will impact on individual rights.`}
                </li>
              </Box>
            </Box>
            {/* Data we collect section started */}
            <Box id="principles">
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.grey[700],
                  fontWeight: 700,
                  mt: 4,
                }}
              >
                Data Protection Officer
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: "30px", mt: 2, mb: 1 }}
              >
                Florence Chiwetu is the Data Protection officer and can be
                contacted using the details below
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "30px", mb: 1 }}>
                {`Tel: +44 7958 482516`}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: "30px", mb: 1 }}>
                Email:{" "}
                <Link
                  href={`mailto:${`florence.chiwetu@fosterapp.co.uk`}`}
                  style={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  florence.chiwetu@fosterapp.co.uk
                </Link>
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DataAndSecurity;

const styles: any = {
  mainWrapper: (theme: any) => ({
    px: { xs: 1, sm: 5, md: 3, lg: 10 },
    pb: { xs: 5, sm: 10 },
    backgroundColor: theme.palette.grey[0],
  }),
  mainTitle: (theme: any) => ({
    color: theme.palette.primary.main,
    display: "inline-block",
    fontWeight: 700,
  }),
  mainGrid: {
    mb: { xs: 3, md: 0 },
    position: "sticky",
    top: "10%",
    left: "8%",
    zIndex: 112,
  },
  paragraphStyling: {
    lineHeight: "30px",
  },
  unorderedList: {
    listStyleType: "disc",
    marginLeft: "10px",
    paddingLeft: "10px",
    lineHeight: "30px",
  },
};
