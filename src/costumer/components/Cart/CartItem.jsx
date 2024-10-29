import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    dispatch(updateCartItem(data));
  };
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  return (
    <div className="p-5 shadow-lg border rounded-md flex items-start space-x-5 space-y-0">
      <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[12rem]">
        <img
          className="w-full h-full object-cover object-top rounded-md"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/0/f/r/-original-imagw8esmmwnah4s.jpeg?q=70"
          alt="Product"
        />
      </div>
      <div className="flex-1 space-y-2">
        <p className="font-semibold text-lg">{item.title}</p>
        <p className="text-sm text-gray-600">Size: L</p>
        <p className="text-sm text-gray-400">Seller: {item.brand}</p>
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
            ₹{item.price}
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
            ₹{item.discountedPrice}
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
            {item.discountPercent}% Off
          </div>
        </div>
        <div className="lg: flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton
              onClick={() => handleUpdateCartItem(-1)}
              disabled={item.quantity <= 1}
            >
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
            <IconButton onClick={() => handleUpdateCartItem(1)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>
          <div>
            <Button
              //   variant="contained"

              onClick={handleRemoveCartItem}
              sx={{
                px: "0.8rem", // Reduced horizontal padding
                py: "0.2rem", // Reduced vertical padding
                // bgcolor: "#9155fd",
                marginLeft: "-22px",
                // fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              REMOVE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
