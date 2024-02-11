import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const CardComponent = ({ mappingData }: any) => {
  const theme: any = useTheme();
  return (
    <>
      {mappingData?.map((item: any) => (
        <Card
          key={item.id}
          sx={{
            boxShadow: "0px 0px 6px 1px rgba(14, 145, 140, 0.20)",
            borderRadius: "24px",
            color: theme.palette.grey[700],
            height: "100%",
            width: "550px",
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={item.icon}
                alt="children-icons"
                style={{ width: "70px", height: "70px" }}
              />
            </Box>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontWeight: 700 }}
            >
              {item.title}
            </Typography>
            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                component="div"
                sx={{
                  whiteSpace: { sx: "normal", lg: "pre-line" },
                  lineHeight: "26px",
                  fontWeight: 400,
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;
