import React from "react";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import PaymentsIcon from "@mui/icons-material/Payments";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

export default function IconsMain() {
  const theme = useTheme();
  const boxItems = [
    {
      icon: <LocalShippingRoundedIcon />,
      text1: "Fast Delivery",
      text2: "Start from $10",
    },
    {
      icon: <AttachMoneyIcon />,
      text1: "Money Guarantee",
      text2: "7 Days Back",
    },
    { icon: <AlarmOnIcon />, text1: "365 Days", text2: "For free return" },
    { icon: <PaymentsIcon />, text1: "Payment", text2: "Secure system" },
  ];
  return (
    <Container>
      <Stack
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          alignItems: "center",
          mt: 4,
          [theme.breakpoints.down("sm")]: {
            flexWrap: "wrap",
          },
        }}
        direction="row"
      >
        {boxItems.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                width: "25%",
                flexGrow: 1,
                mr: 2,
                alignItems: "center",
                gap: 4,
                justifyContent: "center",
                py: 2,
              }}
            >
              {React.cloneElement(item.icon, {
                sx: { fontSize: 40, color: "#2B3445" },
              })}
              <Box>
                <Typography sx={{ color: "#2B3445" }} variant="h5">
                  {item.text1}
                </Typography>
                <Typography sx={{ color: "#2B3445" }} variant="body1">
                  {item.text2}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
