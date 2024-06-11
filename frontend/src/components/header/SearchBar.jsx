import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import "./headerStyle.css";
import { ExpandMore } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { userDataContext } from "../../context/UserDataStore";

export default function SearchBar() {
  // take data about user to display the cart icon
  const { userData } = useContext(userDataContext);
  const navigate = useNavigate();
  // Styles for the search bar
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderWidth: "2px 0px 2px 2px",
    borderStyle: "solid",
    borderColor: "#DAE1E7",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#4B566B",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // end of the styles for the search bar

  //   style for the personal cart icon
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: -2,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  // end of the style for the peronal cart icon

  // styles for the drop down menu with the select bar
  const options = [
    "All Categories",
    "Cars",
    "Clothes",
    "Electronics",
    "Laptop",
    "Camera",
    "Disktop",
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // end of styles for the drop down menu with the select bar

  return (
    <Container sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
      {/* start shoping */}
      <Stack
        sx={{ cursor: "pointer" }}
        alignItems="center"
        onClick={() => {
          navigate("/");
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ color: "black", fontSize: "30px" }} />
        <Typography sx={{ color: "#373F50" }} variant="p">
          START SHOPING
        </Typography>
      </Stack>
      {/* // start shoping */}

      {/* search bar */}
      <Box sx={{ display: "flex" }}>
        <Search
          sx={{
            bgcolor: "#F3F5F9",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            width: "500px !important",
            mr: 0,
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            sx={{ display: "inline" }}
            placeholder="Search for a product"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <List
          //   className="border"
          component="nav"
          aria-label="Device settings"
          sx={{
            bgcolor: "#F3F5F9",
            borderBottomRightRadius: "20px",
            borderTopRightRadius: "20px",
            borderWidth: "2px 2px 2px 1px",
            borderStyle: "solid",
            borderColor: "#DAE1E7",
            padding: "0 !important",
            "&:hover": { cursor: "pointer" },
          }}
        >
          <ListItem
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText secondary={options[selectedIndex]} />
            <ExpandMore sx={{ fontSize: "25px", color: "#4B566B" }} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* // search bar */}

      {/* person and cart icon  */}

      <Stack direction="row">
        <IconButton>
          <PersonOutlineOutlinedIcon sx={{ color: "#7D879C" }} />
        </IconButton>

        {!userData ? (
          <></>
        ) : (
          <>
            <IconButton>
              <StyledBadge color="error">
                <ShoppingBagOutlinedIcon sx={{ color: "#7D879C" }} />
              </StyledBadge>
            </IconButton>
          </>
        )}
      </Stack>
      {/* // person and cart icon  */}
    </Container>
  );
}
