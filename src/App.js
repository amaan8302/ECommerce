import logo from "./logo.svg";
import "./App.css";
import Navigation from "./costumer/components/Navigation/Navigation";
import { Homepage } from "./costumer/pages/Homepage/Homepage";
import Footer from "./costumer/components/Footer/Footer";
import Product from "./costumer/components/Product/Product";
import ProductDetails from "./costumer/components/ProductDetails/ProductDetails";
import Cart from "./costumer/components/Cart/Cart";
import { Checkout } from "./costumer/components/Checkout/Checkout";
import Order from "./costumer/components/Order/Order";
import OrderDetails from "./costumer/components/Order/OrderDetails";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRouters from "./Routers/AdminRouters";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>
      {/* <OrderDetails /> */}
    </div>
  );
}

export default App;
