import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="ProductCard w-[15rem] m-3 transition-all cursor-pointer"
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="TextPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div class="harpa">
          <span>Special Price</span>{" "}
        </div>
        <div class="harpaPrice">
          <p className="font-semibold">₹{product.discountedPrice}</p>
        </div>
        <span class="yRaY8j">₹{product.price}</span>
        <span class="UkUFwK">{product.discountPercent}% off</span>
      </div>
    </div>
  );
};

export default ProductCard;
