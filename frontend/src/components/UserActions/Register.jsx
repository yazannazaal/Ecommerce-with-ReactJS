import React, { useState } from "react";
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

export default function Register() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  async function sendRegistrationData(values) {
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username: values.username,
          email: values.email,
          password: values.password,
        }
      );
      console.log(response);
      if (response.statusText === "OK") {
        // Handle successful response
        console.log(response.data.jwt);
        setErrors("");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setErrors("An unexpected error occurred. Please try again later.");
    }
  }

  //   schema for frontend validation
  const schema = Yup.object({
    username: Yup.string()
      .required("Name is required")
      .min(3, "min is 3 charachter")
      .max(10, "max is 10 charachter"),
    email: Yup.string()
      .required("Email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "password should be at least 6"),
    cPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "password doesn't match "),
  });

  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: sendRegistrationData,
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
          <h2 style={{ color: "#2B3445", textAlign: "center" }}>
            Register Now !
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <Typography color="error">{formik.errors.username}</Typography>
            </FormControl>
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
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                type="password"
              />
              <Typography color="error">{formik.errors.password}</Typography>
            </FormControl>
            <FormControl sx={{ mb: 2 }} fullWidth>
              <InputLabel htmlFor="confirm-password">
                Confirm Password
              </InputLabel>
              <Input
                value={formik.values.cPassword}
                onChange={formik.handleChange}
                name="cPassword"
                type="password"
              />
              <Typography color="error">{formik.errors.cPassword}</Typography>
            </FormControl>
            <Button fullWidth type="submit" variant="contained" color="success">
              Submit
            </Button>
          </form>
        </Stack>
      </Box>
    </Container>
  );
}
