import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyersPage = () => {
  const navigate = useNavigate(); // Navigation hook
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Wheat",
      price: "₹20/kg",
      farmer: "Farmer John",
      basePrice: "₹18/kg",
      image: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg",
    },
    {
      id: 2,
      name: "Sweet Corn",
      price: "₹30/kg",
      farmer: "Farmer Smith",
      basePrice: "₹28/kg",
      image: "https://3.imimg.com/data3/EK/OH/MY-16554865/fresh-sweet-corn-1000x1000.png",
    },
    {
      id: 3,
      name: "Rice",
      price: "₹25/kg",
      farmer: "Farmer Brown",
      basePrice: "₹22/kg",
      image: "https://media.istockphoto.com/id/671580286/photo/rice.jpg?s=1024x1024&w=is&k=20&c=QrIMkDQIZYoBKQRTu4antAMxGSyKmHa14oYiO5S0OqE=",
    },
  ]);

  // Navigate to product details page
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`); // Redirect to product details page
  };

  // Navigate to Dashboard
  const handleDashboard = () => {
    navigate("/dashboard"); // Redirect to dashboard page
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#28a745",
          padding: "10px",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px" }}>Digital Kisan Market</h1>
        <nav style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={handleDashboard} // Navigate to dashboard
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/news")}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            News
          </button>
          <button
            onClick={() => navigate("/order-details")}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Order Details
          </button>
          <a
            href="/contact"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            Contact Us
          </a>
          <a
            href="/about"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            About
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          minHeight: "60vh",
        }}
      >
        <h2 style={{ color: "#28a745", textAlign: "center" }}>
          Welcome, Buyer!
        </h2>
        <p style={{ textAlign: "center" }}>
          Browse through the available products:
        </p>

        {/* Product List */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div
                style={{
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <strong style={{ fontSize: "18px" }}>{item.name}</strong>
                <p style={{ margin: "10px 0", color: "#28a745" }}>
                  {item.price}
                </p>
                <button
                  onClick={() => handleViewDetails(item.id)} // Navigate to product details
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#28a745",
          padding: "10px",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>&copy; 2024 Digital Kisan Market</p>
        <a
          href="/terms"
          style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
        >
          Terms & Conditions
        </a>
        <a
          href="/privacy"
          style={{ color: "white", margin: "0 10px", textDecoration: "none" }}
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default BuyersPage;