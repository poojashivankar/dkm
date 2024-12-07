import { Link } from "react-router-dom";
import GoogleTranslate from "../../components/GoogleTranslate";

const Navbar = () => {
  return (
    <nav className="bg-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Updated logo styling for a circular shape */}
          <img
            src="/logo.png"
            alt="Kisan Market Logo"
            className="h-10 w-10 rounded-full object-cover border-2 border-white"
          />
          <span className="ml-3 text-xl font-bold">Digital Kisan Market</span>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/add-product" className="hover:underline">Add Product</Link>
          <Link to="/my-products" className="hover:underline">My Products</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
