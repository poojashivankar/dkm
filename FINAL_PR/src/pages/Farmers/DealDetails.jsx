import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DistanceCalculator from "../../components/Gmap";


const DealDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Static data simulating a database
  const allProducts = [
    {
      id: 1,
      name: "Organic Wheat",
      price: 1200,
      description: "High-quality organic wheat grown without pesticides.",
      quantity: "20 Quintals",
      sellerLocation: "Nagpur, Maharashtra",
      buyers: [
        {
          buyerId: 1,
          name: "Ramesh Traders",
          contact: "ramesh.traders@example.com",
          location: "Pune, Maharashtra",
          purchaseQuantity: "10 Quintals",
          purchasePrice: 1150,
        },
        {
          buyerId: 2,
          name: "Suresh Wholesalers",
          contact: "suresh.wholesalers@example.com",
          location: "Mumbai, Maharashtra",
          purchaseQuantity: "5 Quintals",
          purchasePrice: 1180,
        },
      ],
    },
    {
      id: 2,
      name: "Organic Rice",
      price: 1500,
      description: "Premium quality organic rice.",
      quantity: "15 Quintals",
      sellerLocation: "Aurangabad, Maharashtra",
      buyers: [
        {
          buyerId: 3,
          name: "Ganesh Retailers",
          contact: "ganesh.retailers@example.com",
          location: "Nashik, Maharashtra",
          purchaseQuantity: "8 Quintals",
          purchasePrice: 1450,
        },
      ],
    },
  ];

  // State to store selected product details
  const [productDetails, setProductDetails] = useState(null);

  // Fetch product details based on productId
  useEffect(() => {
    const product = allProducts.find((prod) => prod.id === parseInt(productId));
    setProductDetails(product || null);
  }, [productId]);

  // Function to handle cancel action
  const handleCancel = () => {
    navigate("/"); // Navigate to home or previous page
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Deal Details for Product: {productDetails?.name || "Loading..."}
      </h2>
      {productDetails ? (
        <div>
          <h3 className="text-xl font-semibold">Product Information</h3>
          <p><strong>Name:</strong> {productDetails.name}</p>
          <p><strong>Price:</strong> ₹{productDetails.price} per quintal</p>
          <p><strong>Description:</strong> {productDetails.description}</p>
          <p><strong>Quantity Available:</strong> {productDetails.quantity}</p>
          <p><strong>Seller Location:</strong> {productDetails.sellerLocation}</p>

          

          <div className="mt-4">
            <h3 className="text-xl font-semibold">Buyer Details</h3>
            {productDetails.buyers && productDetails.buyers.length > 0 ? (
              productDetails.buyers.map((buyer) => (
                <div key={buyer.buyerId} className="border p-2 mb-2 rounded shadow">
                  <p><strong>Buyer ID:</strong> {buyer.buyerId}</p>
                  <p><strong>Name:</strong> {buyer.name}</p>
                  <p><strong>Contact:</strong> {buyer.contact}</p>
                  <p><strong>Location:</strong> {buyer.location}</p>
                  <p><strong>Quantity Purchased:</strong> {buyer.purchaseQuantity}</p>
                  <p><strong>Price Paid:</strong> ₹{buyer.purchasePrice} per quintal</p>
                  <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Sell to {buyer.name}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="mt-2 ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
                
              ))
            ) : (
              <p>No buyers found for this product.</p>
            )}
          </div>
          {/* Adding DistanceCalculator component */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Distance Calculator</h3>
            <DistanceCalculator/>
          </div>
        </div>
      ) : (
        <p>No product details available.</p>
      )}
    </div>
  );
};

export default DealDetails;
