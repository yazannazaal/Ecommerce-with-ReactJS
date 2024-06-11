import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function FloatActionBtn() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 200 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        sx={{
          position: "fixed",
          bottom: 33,
          right: 33,
          backgroundColor: "#1F2937",
          "&:hover": {
            backgroundColor: "#777",
          },
        }}
        size="small"
        color="primary"
        aria-label="add"
      >
        <ArrowUpwardIcon />
      </Fab>
    </Zoom>
  );
}
