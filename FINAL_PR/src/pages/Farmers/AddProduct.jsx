import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    price: "",
    description: "",
    quantity: "",
    farmerName: "",
    farmerContact: "",
    productImage: null, // For storing the uploaded image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, productImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data for the backend
    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("price", product.price);
    formData.append("description", product.description);
    formData.append("quantity", product.quantity);
    formData.append("farmerName", product.farmerName);
    formData.append("farmerContact", product.farmerContact);
    formData.append("productImage", product.productImage);

    console.log("Product and Farmer Details with Image Added:", formData);

    // Integrate with your backend to upload formData
    // Example: axios.post('your-api-endpoint', formData, { headers: { 'Content-Type': 'multipart/form-data' }})
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Details */}
        <h3 className="text-lg font-semibold">Product Details</h3>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={product.productName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Farmer Details */}
        <h3 className="text-lg font-semibold">Farmer Details</h3>
        <input
          type="text"
          name="farmerName"
          placeholder="Farmer Name"
          value={product.farmerName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="farmerContact"
          placeholder="Farmer Contact"
          value={product.farmerContact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Image Upload */}
        <h3 className="text-lg font-semibold">Upload Product Image</h3>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
