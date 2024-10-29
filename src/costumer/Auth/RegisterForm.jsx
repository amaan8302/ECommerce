import { Button, Grid, TextField, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, register } from "../../State/Auth/Action";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev); // Toggle the visibility
  };
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
    console.log("user data", userData);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "1rem",
        maxWidth: 600,
        margin: "2rem auto",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        align="center"
        gutterBottom
        className="flex justify-center flex-col items-center"
      >
        CREATE ACCOUNT
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              autoComplete="new-password"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#9155FD",
                color: "white",
                "&:hover": {
                  backgroundColor: "#7a46c4",
                },
                padding: "0.8rem 0",
                width: "100%",
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center mt-3">
        <Typography variant="body1">Already have an account?</Typography>
        <Button
          onClick={() => navigate("/login")}
          className="ml-5"
          size="large"
          sx={{
            textTransform: "none",
            color: "#9155FD",
            "&:hover": {
              color: "#7a46c4",
            },
          }}
        >
          LogIn
        </Button>
      </div>
    </Paper>
  );
};

export default RegisterForm;
