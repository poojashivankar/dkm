import React, { useEffect, useState } from "react";
import WeatherWidget from "../../components/WeatherWidget";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Mumbai");

  // Fetch Weather Data
 
<WeatherWidget/>
  // Hardcoded Buyers Data
  const buyers = [
    {
      id: 1,
      name: "elon musk",
      email: "amiron@example.com",
     
      address: "Mumbai, Maharashtra",
      image: "https://i.pinimg.com/736x/56/cd/4e/56cd4e2edf3cf669ee86768989e8083d.jpg",
    },
    {
      id: 2,
      name: "Bill Gates",
      email: "jane@example.com",
      
      address: "Pune, Maharashtra",
      image: "https://i.pinimg.com/736x/d2/3c/a8/d23ca8a0be18f83c0431d22416fde49d.jpg",
    },
  ];

  // Hardcoded Products Data
  const products = {
    Fruits: [
      {
        id: 1,
        name: "Apple",
        price: 150,
        quantity: 10,
        image: "https://i.pinimg.com/736x/70/f5/dc/70f5dc3e3ad9298a27ac1979b31b5244.jpg",
      },
      {
        id: 2,
        name: "Mango",
        price: 100,
        quantity: 20,
        image: "https://i.pinimg.com/736x/53/de/81/53de819361c146b854e48cbf2d69e7e8.jpg",
      },
    ],
    Vegetables: [
      {
        id: 3,
        name: "Tomato",
        price: 50,
        quantity: 15,
        image: "https://i.pinimg.com/736x/c2/da/d0/c2dad0767e554eb74dc1d7b59b79581f.jpg",
      },
      {
        id: 4,
        name: "Onion",
        price: 40,
        quantity: 25,
        image: "https://i.pinimg.com/736x/73/75/ce/7375ceba9a2a54adc1b7d63c0a0d8bde.jpg",
      },
    ],
    Grains: [
      {
        id: 5,
        name: "Rice",
        price: 70,
        quantity: 100,
        image: "https://i.pinimg.com/736x/ae/0f/88/ae0f8878b7d6748a3c74ae6b55333920.jpg",
      },
      {
        id: 6,
        name: "Wheat",
        price: 60,
        quantity: 80,
        image: "https://i.pinimg.com/736x/22/d7/0d/22d70d25506467f4b1d4d21e466b84bd.jpg",
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Weather Section */}
      <section className="bg-blue-500 text-white p-4 rounded-md mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Weather Update</h2>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 bg-white text-blue-500 rounded-md"
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>
        {weather ? (
          <div className="flex items-center mt-4">
            <img src={weather.icon} alt={weather.description} className="h-16 w-16" />
            <div className="ml-4">
              <p className="text-lg font-semibold">{weather.description}</p>
              <p className="text-xl font-bold">{weather.temperature}°C</p>
            </div>
          </div>
        ) : (
          <p className="mt-4">Loading weather data...</p>
        )}
      </section>

      {/* Buyers Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Buyer Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {buyers.map((buyer) => (
            <div
              key={buyer.id}
              className="p-4 bg-white shadow-md rounded-md border border-gray-200 flex items-center"
            >
              <img
                src={buyer.image}
                alt={buyer.name}
                className="h-16 w-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{buyer.name}</h3>
                <p>Email: {buyer.email}</p>
                <p>Phone: {buyer.phone}</p>
                <p>Address: {buyer.address}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Farmer Products Section */}
      <section>
        <h2 className="text-2xl font-bold text-green-600 mb-4">Farmer Products</h2>
        <div className="space-y-8">
          {Object.keys(products).map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {products[category].map((product) => (
                  <div
                    key={product.id}
                    className="p-4 bg-white shadow-md rounded-md border border-gray-200 flex flex-col items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-20 w-20 mb-4"
                    />
                    <h4 className="font-semibold">{product.name}</h4>
                    <p>Price: ₹{product.price}</p>
                    <p>Quantity: {product.quantity} kg</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
