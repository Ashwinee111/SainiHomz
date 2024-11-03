import React from "react";

function SearchBar() {
  return (
    <>
      <div className="flex items-center justify-center p-4 font-primary">
        <div className="bg-white shadow-md rounded-lg flex flex-wrap space-x-4 space-y-4 p-4 border border-gray-300 sm:flex-nowrap sm:space-y-0">
          {/* Location Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto appearance-none bg-transparent border-b-2 border-primary py-2 pr-8 pl-2 focus:outline-none">
              <option>Location</option>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
            <span className="absolute right-0 top-0 mt-2 mr-2 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>

          {/* Property Type Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto appearance-none bg-transparent border-b-2 border-primary py-2 pr-8 pl-2 focus:outline-none">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>House</option>
              <option>Condo</option>
            </select>
            <span className="absolute right-0 top-0 mt-2 mr-2 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>

          {/* Price Range Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto appearance-none bg-transparent border-b-2 border-primary py-2 pr-8 pl-2 focus:outline-none">
              <option>Price Range</option>
              <option>$100k - $200k</option>
              <option>$200k - $500k</option>
              <option>$500k+</option>
            </select>
            <span className="absolute right-0 top-0 mt-2 mr-2 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>

          {/* Bedroom Dropdown */}
          <div className="relative w-full sm:w-auto">
            <select className="w-full sm:w-auto appearance-none bg-transparent border-b-2 border-primary py-2 pr-8 pl-2 focus:outline-none">
              <option>Bedroom</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3 Bedrooms</option>
            </select>
            <span className="absolute right-0 top-0 mt-2 mr-2 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </div>

          {/* Search Button */}
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-primary hover:bg-[#53b54c] text-white py-2 px-6 rounded transition duration-300">
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
