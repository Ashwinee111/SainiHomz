import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 border-b-2 border-dark">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="site-logo" className="w-[65px] lg:w-[80px]" />
          </Link>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6 items-center font-primary text-lg font-medium">
            <Link to="/" className="relative group">
              <button className="text-gray-700 hover:text-primary">HOME</button>
            </Link>

            <Link to="/property" className="relative group">
              <button className="text-gray-700 hover:text-primary">PROPERTY</button>
            </Link>

            <Link to="/apartments" className="relative group">
              <button className="text-gray-700 hover:text-primary">APARTMENTS</button>
            </Link>

            <Link to="/villas" className="relative group">
              <button className="text-gray-700 hover:text-primary">VILLAS</button>
            </Link>

            <Link to="/aboutus" className="relative group">
              <button className="text-gray-700 hover:text-primary">ABOUT US</button>
            </Link>

            <Link to="/contactus" className="relative group">
              <button className="text-gray-700 hover:text-primary">CONTACT US</button>
            </Link>

            <a
              href="tel:9124570573"
              className="flex items-center space-x-4 bg-primary p-3 text-white rounded-md"
            >
              <FaPhoneAlt className="text-white animate-ring" />
              <span>(+91) 9124570573</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-primary">
              HOME
            </Link>
            <Link to="/property" className="block text-gray-700 hover:text-primary">
              PROPERTY
            </Link>
            <Link to="/apartments" className="block text-gray-700 hover:text-primary">
              APARTMENTS
            </Link>
            <Link to="/villas" className="block text-gray-700 hover:text-primary">
              VILLAS
            </Link>
            <Link to="/aboutus" className="block text-gray-700 hover:text-primary">
              ABOUT US
            </Link>
            <Link to="/contactus" className="block text-gray-700 hover:text-primary">
              CONTACT US
            </Link>
            <a href="tel:9124570573" className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500" />
              <span>(+91) 9124570573</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
