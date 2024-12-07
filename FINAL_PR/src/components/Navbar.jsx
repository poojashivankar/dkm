import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";

const Navbar = () => {
  return (
    
    <nav className="bg-oliveGreen text-white p-4">
       
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <img src="/logo.png" alt="Kisan Market Logo" className="h-10 w-auto" />
          <span className="ml-3 text-xl font-bold">Digital Kisan Market </span>
        </div>
        <div className="space-x-4">
          <Link to="/FarmerDashboard" className="hover:underline">Dashboard</Link>
          <Link to="/login" className="text-white">Login</Link> {/* Link to login page */}
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/about-us" className="hover:underline">About Us</Link>
          
        
        </div>
      </div>
      
     </nav>
  );
};

export default Navbar;
