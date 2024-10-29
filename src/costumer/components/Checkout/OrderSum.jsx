import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { store } from "../../../State/store";
import { createPayment } from "../../../State/Payment/Action";

const OrderSum = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_Id");
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);
  const handleCheckOut = () => {
    dispatch(createPayment(orderId));
  };
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border mb-4">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid lg:grid-cols-3 relative">
          <div className="lg:col-span-2 grid gap-4">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
          {/* PRICE DETAILS */}
          <div className="lg:col-span-1 px-5 sticky top-0 h-[10vh] mt-5 lg:mt-0">
            <p
              style={{
                borderBottom: "1px solid #dcdcdc",
                fontSize: "19px",
                display: "block",
                textTransform: "uppercase",
                padding: "13px 24px",
                fontWeight: "500",
                color: "#4a4a4a",
                minHeight: "47px",
                borderRadius: "2px 2px 0 0",
                boxSizing: "border-box",
                margin: "0",
                opacity: "0.7",
              }}
            >
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold ml-2 mr-2">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span style={{ color: "#388e3c" }}>
                  −₹{order.order?.discount}
                </span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span style={{ color: "#388e3c" }}>Free</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Total Amount</span>
                <span>₹{order.order?.totalDiscountedPrice}</span>
              </div>
            </div>
            <div>
              <Button
                className="w-full"
                variant="contained"
                sx={{
                  px: "0.8rem", // Reduced horizontal padding
                  py: "0.2rem", // Reduced vertical padding
                  // bgcolor: "#9155fd",
                  marginLeft: "0px",
                  marginTop: "10px",
                  fontSize: "1rem",
                }}
                onClick={handleCheckOut}
              >
                CheckOut
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSum;
