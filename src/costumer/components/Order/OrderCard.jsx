import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/account/order/${5}")}
      className="p-5 shadow-lg hover:shadow-xl border ml-0 mr-20"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[7rem] h-[9rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/l/w/xxl-rfs3386-red-tape-original-imagnefmfwqygyhq.jpeg?q=70"
              alt=""
            />
            <div className="ml-5 space-y-5">
              <p
                className="font-semibold"
                style={{
                  fontSize: "17px",
                }}
              >
                Men Regular Fit Solid Button Down
                <br /> Collar Casual Shirt
              </p>
              <p className="opacity-50 font-semibold">Size : XL</p>
              <p className="opacity-50 font-semibold">Color : Olive</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className="flex items-center space-x-2">
            <div
              className="text-lg font-medium"
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#212121",
                display: "inline-block",
                marginRight: "2px",
                boxSizing: "border-box",
              }}
            >
              ₹1,304
            </div>
          </div>
          {/* <p>1304</p> */}
        </Grid>
        <Grid item xs={4}>
          {true && (
            <p className="ml-12">
              <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 mr-1 text-sm"
              />
              <span>Delivered on 2nd February 2024</span>
            </p>
          )}
          {false && (
            <p>
              <span>Order Delivered</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
