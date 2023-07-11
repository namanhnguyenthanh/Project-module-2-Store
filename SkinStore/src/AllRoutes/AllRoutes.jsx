import { Routes, Route } from "react-router-dom";
import CartPage from "../Pages/Cart";
import Home from "../Pages/Home";
import LoginPage from "../Pages/Login";
import Register from "../Pages/Register";
import SmartSplurgesPage from "../Pages/SmartSplurgesPage";
import Checkout from "../Pages/Checkout";
import PaymentSuccess from "../Pages/PaymentSuccess";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<CartPage />} />
      <Route
        path="/best-of-skinstore/smart-splurges"
        element={<SmartSplurgesPage />}
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    </Routes>
  );
};
export default AllRoutes;
