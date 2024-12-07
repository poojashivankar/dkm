import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate(); // Navigation hook
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("orderStatus"));
    if (storedOrder) {
      setOrder(storedOrder);
    }
  }, []);

  if (!order) {
    return <h2>No orders found!</h2>;
  }

  const handleDelete = () => {
    localStorage.removeItem("orderStatus"); // Remove order from localStorage
    setOrder(null); // Clear order details
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
          <a
            href="/dashboard"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
          >
            Dashboard
          </a>
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
        <h2 style={{ color: "#28a745", textAlign: "center" }}>Order Details</h2>
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p><strong>Product:</strong> {order.product.name}</p>
          <p><strong>Farmer:</strong> {order.product.farmer}</p>
          <p><strong>Base Price:</strong> {order.product.basePrice}</p>
          <p><strong>Your Buying Price:</strong> {order.buyingPrice}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <button
            onClick={handleDelete}
            style={{
              padding: "10px 20px",
              backgroundColor: "#e74c3c",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Delete Order
          </button>
        </div>
        {order === null && (
          <p style={{ color: "red", marginTop: "10px" }}>Your order response is deleted!</p>
        )}
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

export default OrderDetails;
