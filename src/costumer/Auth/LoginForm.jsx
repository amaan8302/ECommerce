import { Button, Grid, TextField, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../State/Auth/Action";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev); // Toggle the visibility
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log("user data", userData);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        maxWidth: 400,
        margin: "2rem auto",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Welcome Back!
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
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
              Log In
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center mt-3">
        <Typography variant="body1">
          New here? Welcome, please Register😊
        </Typography>
        <Button
          onClick={() => navigate("/register")}
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
          Register
        </Button>
      </div>
    </Paper>
  );
};

export default LoginForm;
