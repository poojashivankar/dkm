import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  return (
    <nav className="bg-oliveGreen text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Kisan Market Logo" className="h-10 w-auto" />
          <span className="ml-3 text-xl font-bold">Digital Kisan Market</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>

          {/* Conditional Rendering for Login/Logout */}
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-goldenYellow px-4 py-2 rounded-md hover:bg-oliveGreen"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-goldenYellow px-4 py-2 rounded-md text-white hover:bg-oliveGreen">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
