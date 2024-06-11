import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import leftImg from "../../images/banner-21.jpg";
import rightImg from "../../images/banner-22.jpg";
export default function AdBar() {
  const imageBar = [
    {
      img: leftImg,
      text1: "Final Reduction",
      text2: "Sale up to 20% Off",
      text3: "Only From",
      text4: "$270.00",
      color: "#2B3445",
    },
    {
      img: rightImg,
      text1: "Weekend Sale",
      text2: "Fine Smart Speaker",
      text3: "Starting at",
      text4: "$185.00",
      color: "white",
    },
  ];
  return (
    <Stack direction="row" gap={3} sx={{ mx: 8 }}>
      {imageBar.map((item) => {
        return (
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: "20%", left: "5%" }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "17px",
                  fontWeight: 600,
                  color: `${item.color}`,
                  position: "absolute",
                  left: 0,
                }}
              >
                {item.text1}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "27px",
                  fontWeight: 700,
                  color: `${item.color}`,
                  mt: 3,
                }}
              >
                {item.text2}
              </Typography>
              <hr
                style={{
                  width: "60px",
                  borderColor: `${item.color}`,
                  position: "absolute",
                  left: 0,
                }}
              ></hr>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  gap: 1,
                  textAlign: "center",
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    pt: 0.5,
                    color: `${item.color}`,
                  }}
                >
                  {item.text3}
                </Typography>
                <Typography
                  sx={{ color: "#D23F57", fontSize: "21px", fontWeight: 700 }}
                >
                  {item.text4}
                </Typography>
              </Box>
            </Box>
            <img src={item.img} alt="#" />
          </Box>
        );
      })}
    </Stack>
  );
}
