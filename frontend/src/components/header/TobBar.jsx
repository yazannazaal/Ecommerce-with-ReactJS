import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../../context/UserDataStore";

export default function TobBar() {
  const { userData } = useContext(userDataContext);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        display: "flex",
        justifyContent: "space-between",
        py: "5px",
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", ml: 3, mt: 1, mb: 1 }}
      >
        <Typography
          sx={{
            bgcolor: "#D23F57",
            color: "white",
            mr: 2,
            borderRadius: "12px",
            width: "50px",
            fontWeight: "bold",
            fontSize: "15px",
            textAlign: "center",
          }}
          variant="p"
        >
          HOT
        </Typography>
        <Typography sx={{ color: "white" }} variant="p">
          Free Express Shipping
        </Typography>
      </Box>
      <Box sx={{ mr: 3, mt: 1 }}>
        {!userData ? (
          <>
            <IconButton
              onClick={() => {
                navigate("/login");
              }}
              sx={{ fontSize: "18px" }}
            >
              <Typography sx={{ color: "white", mr: 2 }} variant="p">
                Login
              </Typography>
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("/register");
              }}
            >
              <Typography sx={{ color: "white", fontSize: "18px" }} variant="p">
                Register
              </Typography>
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              onClick={() => {
                navigate("/logout");
              }}
              sx={{ fontSize: "18px" }}
            >
              <Typography sx={{ color: "white", mr: 2 }} variant="p">
                Logout
              </Typography>
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
}
