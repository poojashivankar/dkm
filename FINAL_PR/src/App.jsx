import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import GoogleTranslatePage from "./components/GoogleTranslate";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData)); // Parse saved user data and set it
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <AppRoutes user={user} setUser={setUser} />
      <Footer />
      <GoogleTranslatePage />
    </Router>
  );
}

export default App;
