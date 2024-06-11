import React from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import imageBarToys from "../../images/imagesBar toys.webp";
import imageBarSports from "../../images/imagesBar sports.webp";
import imageBarFashion from "../../images/imagesBar fashion.webp";
import imageBarFurniture from "../../images/imagesBar furniture.webp";
import imageBarCameras from "../../images/imagesBar cameras.webp";
import imageBarGaming from "../../images/imagesBar gaming.webp";
import { Typography } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ImagesBar() {
  const imagesItems = [
    { text: "Toys", img: imageBarToys },
    { text: "Sports", img: imageBarSports },
    { text: "Gaming", img: imageBarGaming },
    { text: "Fashion", img: imageBarFashion },
    { text: "Cameras", img: imageBarCameras },
    { text: "Furniture", img: imageBarFurniture },
  ];
  return (
    <Box sx={{ flexGrow: 1, px: 3, mt: 15 }}>
      <Grid container spacing={2}>
        {imagesItems.map((item, idx) => {
          return (
            <Grid
              key={idx}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{
                backgroundColor: "#F6F9FC",
                transition: "background-color 0.3s",
              }}
            >
              <Item>
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      "&::before": {
                        content: "''",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        // backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay on hover
                        transition: "opacity 0.3s",
                        zIndex: 1,
                      },
                      "& img": {
                        transform: "scale(1.1)",
                        transition: "transform 0.3s",
                      },
                      "& h4": {
                        color: "black", // Text color on hover
                        transition: "color 0.3s", // Transition for text color
                      },
                    },
                  }}
                >
                  <img src={item.img} alt="#" />
                  <Typography
                    sx={{
                      fontWeight: 400,
                      position: "absolute",
                      bottom: "5px",
                      left: "20px",
                      zIndex: 2,
                      padding: "5px 10px",
                      borderRadius: "5px",
                      backgroundColor: "transparent", // Initial background color
                    }}
                    variant="h4"
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
