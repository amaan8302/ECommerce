import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../costumer/pages/Homepage/Homepage";
import Cart from "../costumer/components/Cart/Cart";
import Navigation from "../costumer/components/Navigation/Navigation";
import Footer from "../costumer/components/Footer/Footer";
import Product from "../costumer/components/Product/Product";
import ProductDetails from "../costumer/components/ProductDetails/ProductDetails";
import { Checkout } from "../costumer/components/Checkout/Checkout";
import Order from "../costumer/components/Order/Order";
import OrderDetails from "../costumer/components/Order/OrderDetails";
import PaymentSuccess from "../costumer/components/Payment/PaymentSuccess";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<Homepage />} />
        <Route path="/register" element={<Homepage />} />

        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
