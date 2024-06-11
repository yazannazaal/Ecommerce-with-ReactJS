import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Container,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

export default function BottomBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Fashion", icon: <LocalMallOutlinedIcon /> },
    { text: "Electronics", icon: <TvOutlinedIcon /> },
    { text: "Home and Garden", icon: <YardOutlinedIcon /> },
  ];
  const displayMenuItems = menuItems.map((item, index) => {
    return (
      <MenuItem onClick={handleClose} key={item.index}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText>{item.text}</ListItemText>
      </MenuItem>
    );
  });
  return (
    <Container sx={{ textAlign: "start", my: 2, ml: "3px" }}>
      <Button
        sx={{
          width: "300px",
          alignItems: "center",
          color: "#373F50",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <CategoryIcon />
        <Typography>Categories</Typography>
        <Box flexGrow={1}></Box>
        <ArrowForwardOutlinedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ ".MuiList-root": { width: "290px", backgroundColor: "#F3F5F9" } }}
      >
        {displayMenuItems}
      </Menu>
    </Container>
  );
}
