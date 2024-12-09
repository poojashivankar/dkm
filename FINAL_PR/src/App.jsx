import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import GoogleTranslatePage from "./components/GoogleTranslate";
import ScrollToTopButton from "./components/ScrollToTopButton";
import './assets/css/style.css';
function App() {
  const [user, setUser] = useState(null);

  // Check localStorage for user data on component mount
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData)); // Parse saved user data and set it
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Remove user data from localStorage
    localStorage.removeItem("token"); // Optional: Remove auth token
  };

  return (
    <Router>
      <Navbar user={user} handleLogout={handleLogout} />
      <AppRoutes user={user} setUser={setUser} />
      <Footer />
      <GoogleTranslatePage />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
