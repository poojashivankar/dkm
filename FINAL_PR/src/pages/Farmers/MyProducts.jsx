import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

const MyProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wheat",
      price: 1000,
      description: "High-quality wheat.",
      buyers: [
        { buyerId: 101, purchasePrice: 1000 },
        { buyerId: 102, purchasePrice: 1200 },
      ],
    },
    {
      id: 2,
      name: "Rice",
      price: 1500,
      description: "Organic rice.",
      buyers: [
        { buyerId: 103, purchasePrice: 1500 },
        { buyerId: 104, purchasePrice: 1400 },
        { buyerId: 105, purchasePrice: 1550 },
      ],
    },
  ]);

  const calculateBuyerStats = (product) => {
    if (!product.buyers || product.buyers.length === 0) {
      return { numberOfBuyers: 0, highestPrice: "N/A" };
    }
    const numberOfBuyers = product.buyers.length;
    const highestPrice = Math.max(...product.buyers.map((buyer) => buyer.purchasePrice));
    return { numberOfBuyers, highestPrice };
  };

  const handleSellClick = (productId) => {
    navigate(`/deal-details/${productId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => {
          const { numberOfBuyers, highestPrice } = calculateBuyerStats(product);
          return (
            <div key={product.id} className="border p-4 rounded shadow">
              <ProductCard product={product} />
              <div className="mt-4">
                <p className="font-semibold">Number of Buyers: {numberOfBuyers}</p>
                <p className="font-semibold">Highest Price: ${highestPrice}</p>
                <button
                  onClick={() => handleSellClick(product.id)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Deal Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProducts;
