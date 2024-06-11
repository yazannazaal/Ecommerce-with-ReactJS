import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../../context/UserDataStore";
export default function Login() {
  const { decodeUserToken } = useContext(userDataContext);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  async function sendLoginData(values) {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: values.email,
          password: values.password,
        }
      );

      // Handle successful response
      if (response.statusText === "OK") {
        localStorage.setItem("userToken", response.data.jwt);
        decodeUserToken(); // decode the token to extract the user data
        await createCartForUser(response.data.user.id);
        navigate("/");
        setErrors("");
      }
    } catch (error) {
      setErrors(error.response.data.error.name);
    }
  }
  async function createCartForUser(userId) {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/carts",
        {
          data: { user: userId },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      console.log(response);
      // Handle successful cart creation response
      console.log("Cart created successfully:");
    } catch (error) {
      console.error("Error creating cart:", error);
    }
  }

  //   schema for frontend validation
  const schema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "password should be at least 6"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: sendLoginData,
    validationSchema: schema,
  });

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          border: "2px solid #2B3445",
          borderRadius: "8px",
          p: 4,
        }}
      >
        <Typography color={"error"}>{errors}</Typography>
        <Stack spacing={2} direction="column">
          <h2 style={{ color: "#2B3445", textAlign: "center" }}>Login Now !</h2>
          <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
              />
              <Typography color="error">{formik.errors.email}</Typography>
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl sx={{ mb: 5 }} fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                type="password"
              />
              <Typography color="error">{formik.errors.password}</Typography>
            </FormControl>

            <Button fullWidth type="submit" variant="contained" color="success">
              Login
            </Button>
          </form>
        </Stack>
      </Box>
    </Container>
  );
}
