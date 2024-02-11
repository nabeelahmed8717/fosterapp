import React, { useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { nameShortner } from "./util/Util";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const SingleFileUploader = ({ uploadText }: any) => {
  const theme: any = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<any>(null);
  const selectFile = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const onFileChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      // fileChanheHand(event.target.files[0]);
      setFile(event.target.files[0]);
      //   const imageUrl = URL.createObjectURL(event.target.files[0]);
      //   setFile(imageUrl);
    }
  };

  return (
    <Grid container>
      {!file && (
        <Grid
          item
          sm={12}
          container
          sx={{
            height: "150px",
            border: `2px dotted ${theme.palette.grey[600]}`,
            borderRadius: "16px",
          }}
          justifyContent="center"
        >
          <Grid
            item
            sm={12}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{ cursor: "pointer" }}
            onClick={selectFile}
          >
            <Grid item>
              <IconButton aria-label="upload">
                <CloudUploadIcon
                  sx={{
                    color: theme.palette.primary.main,
                    width: "40px",
                    height: "40px",
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.grey[700] }}
              >
                {uploadText}
              </Typography>
            </Grid>
            <input
              onChange={onFileChange}
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              accept="image/*"
            />
          </Grid>
        </Grid>
      )}
      {file && (
        <Grid
          item
          sm={12}
          container
          sx={{
            height: "150px",
            border: `2px dotted ${theme.palette.grey[600]}`,
            borderRadius: "16px",
          }}
          justifyContent="center"
        >
          <Grid
            item
            sm={12}
            container
            alignItems="center"
            justifyContent="center"
            direction="column"
            sx={{ cursor: "pointer" }}
            onClick={selectFile}
          >
            <Grid item>
              <IconButton aria-label="delete">
                <CloudUploadIcon
                  sx={{
                    color: theme.palette.primary.main,
                    width: "40px",
                    height: "40px",
                  }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h5">{nameShortner(file?.name)}</Typography>
            </Grid>
            <input
              onChange={onFileChange}
              type="file"
              style={{ display: "none" }}
              ref={fileRef}
              accept="image/*"
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SingleFileUploader;
