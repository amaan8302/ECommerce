import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Button, Grid } from "@mui/material";
import { blue, deepPurple } from "@mui/material/colors";
// import { StarIcon } from "@heroicons/react/24/outline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 mt">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>
      <Grid container className="space-y-4">
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border hover:shadow-2xl"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-10">
                <img
                  className="w-[10rem] h-[10rem] object-cover object-top"
                  src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/c/p/e/32-lrdncslpb21890-louis-philippe-jeans-original-imagtgdfytzx3fzc.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2 ml-5">
                  <p className="font-semibold text-xl">
                    Men Slim Low Rise Green Jeans
                  </p>
                  <p className="opacity-40 font-semibold">
                    Louis Philippe Jeans
                  </p>
                  <p className="space-x-7 opacity-40 font-semibold text-s">
                    <span>Color:Green</span>
                    <span>Size:34</span>
                  </p>
                  <div className="flex items-center space-x-2">
                    <div
                      className="text-sm"
                      style={{
                        fontSize: "14px",

                        color: "#878787",
                        textDecoration: "line-through",
                        display: "inline-block",
                        boxSizing: "border-box",
                        marginRight: "2px",
                        fontWeight: 500,
                      }}
                    >
                      ₹3,299
                    </div>
                    <div
                      className="text-lg font-medium"
                      style={{
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#212121",
                        display: "inline-block",
                        marginRight: "2px",
                        boxSizing: "border-box",
                      }}
                    >
                      ₹1,715
                    </div>
                    <div
                      className="text-sm"
                      style={{
                        fontWeight: 700,
                        color: "#388e3c",
                        fontSize: "14px",
                        marginRight: "2px",
                        boxSizing: "border-box",
                      }}
                    >
                      48% Off
                    </div>
                  </div>
                  {/* <p className="font-semibold ">₹1,715</p> */}
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: blue[500] }}>
                <Button>
                  <StarBorderIcon
                    sx={{ fontSize: "2.5rem" }}
                    fontSize={"2px"}
                    className="px-2 text-xl"
                  ></StarBorderIcon>
                  <span style={{ fontSize: "1.1rem" }}>
                    Rate and review product
                  </span>
                </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
