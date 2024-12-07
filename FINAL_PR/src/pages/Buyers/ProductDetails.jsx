import React, { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Fetch the product id from the URL
  const navigate = useNavigate(); // Navigation hook
  const [product, setProduct] = useState(null);
  const [buyingPrice, setBuyingPrice] = useState(""); // State to store buying price
  const [submitted, setSubmitted] = useState(false); // State to manage form submission status

  // Sample product data (this would normally come from an API)
  const items = [
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
  ];

  useEffect(() => {
    // Find the product based on the id from the URL
    const selectedProduct = items.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct); // Set the selected product details
  }, [id]);

  if (!product) {
    return <p>Product not found!</p>; // Handle case when product is not found
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from reloading
    const orderDetails = {
      product,
      buyingPrice,
      status: "Pending", // Initially, status is set to pending
    };
    localStorage.setItem("orderStatus", JSON.stringify(orderDetails)); // Store order in localStorage
    setSubmitted(true); // Mark the response as submitted
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
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
        <h1 style={{ margin: 0, fontSize: "24px" }}>Product Details</h1>
      </header>

      {/* Product Details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "300px",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <h2 style={{ color: "#28a745", marginTop: "20px" }}>{product.name}</h2>
        <p style={{ color: "#28a745", fontSize: "18px" }}>Price: {product.price}</p>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          <strong>Farmer:</strong> {product.farmer}
        </p>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          <strong>Base Price:</strong> {product.basePrice}
        </p>

        {/* Buying Price Section */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label
            htmlFor="buyingPrice"
            style={{ fontSize: "16px", marginBottom: "10px" }}
          >
            Enter Your Buying Price:
          </label>
          <input
            id="buyingPrice"
            type="number"
            value={buyingPrice}
            onChange={(e) => setBuyingPrice(e.target.value)} // Update buying price
            placeholder="Enter your price"
            style={{
              padding: "10px",
              width: "200px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
          <button
            onClick={handleSubmit} // Handle form submission
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
          {submitted && (
            <p style={{ marginTop: "10px", color: "green" }}>
              Your response has been submitted!
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#28a745",
          padding: "10px",
          color: "white",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <p>&copy; 2024 Digital Kisan Market</p>
      </footer>
    </div>
  );
};

export default ProductDetails;
