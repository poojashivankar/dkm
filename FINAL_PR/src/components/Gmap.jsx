import React, { useState } from "react";
import axios from "axios";

const DistanceCalculator = () => {
  const [distance, setDistance] = useState(null);
  const [buyerLocation, setBuyerLocation] = useState("Mumbai");
  const [sellerLocation, setSellerLocation] = useState("Pune");

  const calculateDistance = async () => {
    const apiKey = "AIzaSyCvBUq24PHOxZ2qRzq2uX-v7HJnw47uAaU"; // Replace with your actual API key
    const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=New+York,NY&destinations=Los+Angeles,CA&key=YOUR_API_KEY`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      if (data && data.rows[0]?.elements[0]?.distance) {
        const distanceText = data.rows[0].elements[0].distance.text;
        setDistance(distanceText);
      } else {
        setDistance("Distance data unavailable");
      }
    } catch (error) {
      console.error("Error fetching distance:", error);
      setDistance("Error calculating distance");
    }
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-xl font-bold">Calculate Distance</h2>
      <div className="mt-4">
        <label className="block font-semibold">Buyer Location:</label>
        <input
          type="text"
          value={buyerLocation}
          onChange={(e) => setBuyerLocation(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block font-semibold">Seller Location:</label>
        <input
          type="text"
          value={sellerLocation}
          onChange={(e) => setSellerLocation(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <button
        onClick={calculateDistance}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Calculate Distance
      </button>

      {distance && (
        <div className="mt-4">
          <h3 className="font-semibold">Distance:</h3>
          <p>{distance}</p>
        </div>
      )}
    </div>
  );
};

export default DistanceCalculator;
