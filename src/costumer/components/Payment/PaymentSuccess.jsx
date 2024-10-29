import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
// import { updateCartItem } from "../../../State/Cart/Action";
import { updatePayment } from "../../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [PaymentSuccess, setPaymentStatus] = useState();
  const orderId = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);
  useEffect(() => {
    if (paymentId) {
      const data = { orderId, paymentId };
      dispatch(getOrderById(orderId));
      dispatch(updatePayment(data));
    }
  }, [orderId, paymentId]);
  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>PAYMENT SUCCESS✅...</AlertTitle>
          Your order is placed
        </Alert>
        <OrderTracker activeStep={1} />
        <Grid container className="space-y-5 py-5 pt-20">
          {order.order?.orderItems.map((item) => (
            <Grid
              container
              item
              className="shadow-xl rounded-md p-5"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center">
                  <img
                    className="w-[8rem] h-[10rem] object-cover object-top"
                    src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                    alt=""
                  />
                  <div className="ml-5 space-y-2">
                    <p>{/* Men Solid Pure Cotton Straight Kurta (Blue) */}</p>
                    <p>item.product.title</p>
                    <div>
                      <span className="opacity-50 text-s font-semibold space-x-5">
                        Color: item.color (blue)
                      </span>
                      <div>
                        <span className="opacity-50 text-s font-semibold space-x-5">
                          Size: item.size
                        </span>
                      </div>
                    </div>
                    <p>Seller: item.product.brand</p>
                    <p>₹799</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <AddressCard address={""} />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PaymentSuccess;
