import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

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
          <img src={Logo} alt="site-logo" className="w-[65px] lg:w-[80px]" />

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6 items-center font-primary text-lg font-medium">
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary">HOME</button>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary">
                PROPERTY
              </button>
              {/* Dropdown */}
              <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Apartment
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Houses
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Offices
                </a>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary">
                ABOUT US
              </button>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-primary">
                CONTACT US
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-gray-500" />
              <span>(+91) 9124570573</span>
            </div>
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
          <div className="md:hidden">
            <div className="space-y-2">
              <a href="#" className="block text-gray-700 hover:text-primary">
                HOME
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                PROPERTIES
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                PROPERTY
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                REALTOR
              </a>
              <a href="#" className="block text-gray-700 hover:text-primary">
                OTHERS
              </a>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-500" />
                <span>(800) 987 6543</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
