import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Icon,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const TeamsCard = ({ image, title, description, hoverContent }: any) => {
  const theme: any = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      elevation={3}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.04)" : "scale(1)",
        boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.22)",
        p: "30px 30px 0 30px",
        borderRadius: "10px",
        backgroundColor: "#F6F6F6",
        maxWidth: { xs: 350, lg: 380 },
      }}
    >
      <CardActionArea>
        <Image src={image} alt="icons" style={{ height: "100%" }} />
        <CardContent sx={{ p: "20px 0 20px 0" }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: theme.palette.grey[800], fontWeight: 700 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.grey[600], fontWeight: 500 }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {isHovered && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
            zIndex: 1,
            backgroundColor: "rgba(14, 145, 140, 0.7)",
          }}
        >
          <Box textAlign="start" sx={{ p: "30px 30px 0 30px" }}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.grey[0], fontWeight: 700, mb: 1 }}
              gutterBottom
            >
              {hoverContent?.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                color: theme.palette.grey[0],
                fontWeight: 400,
                lineHeight: "28px",
              }}
              gutterBottom
            >
              {hoverContent?.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                mt: { xs: 0, md: 3 },
                zIndex: 2,
                position: "relative",
              }}
            >
              {hoverContent?.icons?.map((item: any, index: any) => (
                <Link key={item.id} href={item.link}>
                  <Icon sx={styles.socialIcons}>{item.icon}</Icon>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Card>
  );
};

const styles: any = {
  socialIcons: (theme: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    color: theme.palette.grey[200],
    border: `1px solid ${theme.palette.grey[200]}`,
    padding: 1.8,
  }),
};
