import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/home";
import Register from "../pages/Registration";
import LoginPage from "../pages/LoginPage";
import FarmerDashboard from "../pages/Farmers/FarmerDashboard";
import BuyersPage from "../pages/Buyers/BuyersPage";
import Adminmain from "../pages/Admin/adminmain";
import AboutUs from "../pages/Aboutus";
import ContactForm from "../pages/ContactUs";
import FarmingNews from "../components/FarmingNews";
import AddProduct from "../pages/Farmers/AddProduct";
const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/news" element={<FarmingNews />} />
      <Route path="/farmersadd" element={<AddProduct />} />
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      
      <Route
        path="/FarmerDashboard"
        element={
          user?.role === "farmer" ? <FarmerDashboard /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/Buyers"
        element={
          user?.role === "buyer" ? <BuyersPage /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/Adminmain"
        element={
          user?.role === "admin" ? <Adminmain /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
