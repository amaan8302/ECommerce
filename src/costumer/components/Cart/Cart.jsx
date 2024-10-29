import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { store } from "../../../State/store";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store);
  // const cart = useSelector((store) => store.cart);
  const checkoutBut = () => {
    navigate("/checkout?step=2");
  };
  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);
  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 lg:px-16 relative">
        <div className="lg:col-span-2 grid gap-4">
          {/* {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))} */}
          {cart?.cartItems?.length > 0 ? (
            cart.cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <p>No items in the cart</p>
          )}
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
              <span>₹{cart.cart?.totalPrice}</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Discount</span>
              <span style={{ color: "#388e3c" }}>−₹{cart.cart?.discount}</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Delivery Charge</span>
              <span style={{ color: "#388e3c" }}>Free</span>
            </div>
            <div className="flex justify-between pt-3 text-black">
              <span>Total Amount</span>
              <span>₹{cart.cart?.totalDiscountedPrice}</span>
            </div>
          </div>
          <div>
            <Button
              onClick={checkoutBut}
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
            >
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
