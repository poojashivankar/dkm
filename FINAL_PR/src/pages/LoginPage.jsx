import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic...

    try {
        const { data } = await axios.post("http://localhost:5000/login", { email, password });

        if (data.success) {
            localStorage.setItem("user", JSON.stringify(data.user)); // Persist user data
            setUser(data.user);

            // Navigate based on role
            if (data.user.role === "farmer") {
                navigate("/FarmerDashboard");
            } else if (data.user.role === "buyer") {
                navigate("/Buyers");
            } else {
                navigate("/"); // Default fallback
            }
        } else {
            alert(data.message || "Invalid credentials.");
        }
    } catch (error) {
        console.error('Login error: ', error);
        alert("An error occurred during login. Please try again.");
    }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-invalid={!!errors.password}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          {errors.form && <p className="text-red-500 text-sm mb-4">{errors.form}</p>}
          <div className="flex justify-center">
            <button type="submit" className="w-full py-3 bg-oliveGreen text-white font-semibold rounded-md hover:bg-forestGreen transition-all duration-300">
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-oliveGreen font-semibold hover:text-oliveGreen-700">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
