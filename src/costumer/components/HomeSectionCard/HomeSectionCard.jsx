import React from "react";
import { useNavigate } from "react-router-dom";
const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      // onClick={() => navigate("/product/${4}")}
      className="ProductCard transition-all cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[13rem] h-[25rem] mx-3 border"
    >
      <div className="h-[18rem] w-full">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt={product.imageUrl}
        />
      </div>
      <div className=" TextPart bg-white p-2">
        <h3 className="text-base font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.title}</p>
      </div>
      <div className="flex items-center space-x-2 mr-auto p-1">
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
          ₹{product.price}
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
          ₹{product.discountedPrice}
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
          {product.discountPercent}% Off
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
