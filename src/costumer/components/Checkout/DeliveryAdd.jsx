import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAdd = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      add: data.get("address"),
      city: data.get("CityName"),
      state: data.get("StateName"),
      pin: data.get("Pincode"),
      phone: data.get("PhoneNumber"),
    };
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
    console.log("orderData:-", orderData);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{
                mt: 2,
                bgcolor: "dodgerblue",
              }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Full Name"
                    fullWidth
                    autoComplete="given-name"
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Delivery Address"
                    fullWidth
                    autoComplete="address-line1"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="CityName"
                    name="CityName"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="StateName"
                    name="StateName"
                    label="Residing State"
                    fullWidth
                    autoComplete="address-level1"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="Pincode"
                    name="Pincode"
                    label="Postal Code"
                    fullWidth
                    autoComplete="postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="PhoneNumber"
                    name="PhoneNumber"
                    label="Contact Number"
                    fullWidth
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        name="PhoneNumber"
                        id="PhoneNumber"
                        color="primary"
                      />
                    }
                    label="Biling address same as shipping address"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    sx={{
                      mt: 2,
                      bgcolor: "dodgerblue",
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    SAVE AND DELIVER HERE
                  </Button>
                  <Button
                    size="large"
                    sx={{
                      mt: 2,
                      bgcolor: "white",
                      ml: "24px",
                    }}
                  >
                    CANCEL
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAdd;
