import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";

const scrollAnimation = keyframes`
  0% { transform: translateX(130%); }

  100% { transform: translateX(-150%); }
`;

export default function ScrollingText() {
  return (
    <Stack sx={{ gap: 12, mt: 10, alignItems: "center" }} direction="row">
      <Box>
        <Typography sx={{ color: "#1F2937", ml: 2 }} variant="h4">
          BLACK FRIDAY SALE!
        </Typography>
      </Box>
      <Box
        flexGrow={1}
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#1F2937",
          height: "70px",
          mr: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            animation: `${scrollAnimation} 18s linear infinite`,
            display: "inline-block",
            color: "white",
            pt: 2,
            fontWeight: 300,
            zIndex: 0,
          }}
        >
          PAY ONLY FOR YOUR LOVING ELECTRONICS
        </Typography>

        <Button
          sx={{
            position: "absolute",
            right: 1,
            width: "100px",
            zIndex: 100,
            top: "30%",
            bottom: "translateY(-50%)",
            backgroundColor: "white",
            color: "black",
            fontWeight: 700,
            "&:hover": { backgroundColor: "#1F2937", color: "white" },
          }}
          variant="contained"
        >
          shop now
        </Button>
      </Box>
    </Stack>
  );
}
