import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaBed, FaBuilding } from "react-icons/fa";

const FilterBar = ({ filters, setFilters, searchProperties }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  // Synchronize local filters with parent filters
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    setFilters(localFilters);
    searchProperties();
  };

  // Dropdown state for Bedrooms
  const [isBedroomsDropdownOpen, setIsBedroomsDropdownOpen] = useState(false);

  const toggleBedroomsDropdown = () => {
    setIsBedroomsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="bg-[#e2f4e1] shadow-lg rounded-lg p-4 md:p-6 flex gap-4 items-center">
      {/* Property Type Dropdown */}
      <div className="w-full sm:w-1/6 flex items-center">
        <FaBuilding className="text-primary" size={25} />
        <select
          name="property_type"
          value={localFilters.property_type}
          onChange={handleFilterChange}
          className="p-3 ml-2.5 border border-primary rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary transition duration-200 ease-in-out"
        >
          <option value="">Property Type</option>
          <option value="Apartments">Apartments</option>
          <option value="Villas">Villas</option>
          <option value="Luxury Homes">Luxury Homes</option>
          <option value="Branded Residences">Branded Residences</option>
          <option value="Plot">Plot</option>
        </select>
      </div>

      {/* Location Dropdown */}
      <div className="w-full sm:w-1/6 flex items-center gap-2">
        <FaMapMarkerAlt className="text-primary" size={25} />
        <select
          name="location"
          value={localFilters.location}
          onChange={handleFilterChange}
          className="p-3 border border-primary rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary transition duration-200 ease-in-out"
        >
          <option value="">All Locations</option>
          <option value="Tamando">Tamando</option>
          <option value="Chandrasekharpur">Chandrasekharpur</option>
          <option value="Patia">Patia</option>
          <option value="Nayapalli">Nayapalli</option>
          <option value="Saheed Nagar">Saheed Nagar</option>
          <option value="Balianta">Balianta</option>
          <option value="Patrapada">Patrapada</option>
          <option value="Kalinga Nagar">Kalinga Nagar</option>
          <option value="Khandagiri">Khandagiri</option>
          <option value="Rasulgarh">Rasulgarh</option>
          <option value="Sailashree Vihar">Sailashree Vihar</option>
          <option value="Sundarpada">Sundarpada</option>
          <option value="IRC Village">IRC Village</option>
          <option value="Jaydev Vihar">Jaydev Vihar</option>
          <option value="Niladri Vihar">Niladri Vihar</option>
          <option value="Pahala">Pahala</option>
          <option value="Phulnakhara">Phulnakhara</option>
          <option value="Madanpur">Madanpur</option>
          <option value="Baramunda">Baramunda</option>
          <option value="Trisulia">Trisulia</option>
        </select>
      </div>

      {/* Bedrooms Dropdown */}
      <div className="w-full sm:w-1/6 relative">
        <div
          className="border border-primary rounded-md p-3 cursor-pointer bg-white hover:bg-gray-50 flex justify-between items-center"
          onClick={toggleBedroomsDropdown}
        >
          <div className="flex items-center gap-2">
            <FaBed className="text-primary" size={25} />
            <span>Select Bedrooms</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-500 transform ${
              isBedroomsDropdownOpen ? "rotate-180" : "rotate-0"
            } transition-transform`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Dropdown Content */}
        {isBedroomsDropdownOpen && (
          <div className="absolute z-50 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden">
            <div className="p-2 flex flex-col gap-2 max-h-48 overflow-auto">
              {[2, 3, 4, 5, 6].map((bedroom) => (
                <label
                  key={bedroom}
                  className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="bedrooms"
                    value={bedroom}
                    checked={
                      localFilters.bedrooms?.includes(bedroom.toString()) ||
                      false
                    }
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      setLocalFilters((prev) => {
                        const updatedBedrooms = prev.bedrooms || [];
                        return {
                          ...prev,
                          bedrooms: checked
                            ? [...updatedBedrooms, value]
                            : updatedBedrooms.filter((b) => b !== value),
                        };
                      });
                    }}
                    className="w-4 h-4 text-primary rounded"
                  />
                  <span className="text-sm">{bedroom} Bedroom</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Min Price */}
      <div className="w-full sm:w-1/6 flex items-center gap-2">
        <FaRupeeSign className="text-primary" size={25} />
        <select
          name="min_price"
          value={localFilters.min_price}
          onChange={handleFilterChange}
          className="p-3 border border-primary rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary transition duration-200 ease-in-out"
        >
          <option value="">Min Price</option>
          <option value="3000000">30 Lac</option>
          <option value="4000000">40 Lac</option>
          <option value="5000000">50 Lac</option>
          <option value="6000000">60 Lac</option>
          <option value="7000000">70 Lac</option>
          <option value="8000000">80 Lac</option>
          <option value="9000000">90 Lac</option>
          <option value="10000000">1 Cr</option>
          <option value="20000000">2 Cr</option>
          <option value="30000000">3 Cr</option>
          <option value="40000000">4 Cr</option>
          <option value="50000000">5 Cr</option>
          <option value="60000000">6 Cr</option>
          <option value="70000000">7 Cr</option>
          <option value="80000000">8 Cr</option>
          <option value="90000000">9 Cr</option>
          <option value="100000000">10 Cr</option>
        </select>
      </div>

      {/* Max Price */}
      <div className="w-full sm:w-1/6 flex items-center gap-2">
        <FaRupeeSign className="text-primary" size={25} />
        <select
          name="max_price"
          value={localFilters.max_price}
          onChange={handleFilterChange}
          className="p-3 border border-primary rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary transition duration-200 ease-in-out"
        >
          <option value="">Max Price</option>
          <option value="3000000">30 Lac</option>
          <option value="4000000">40 Lac</option>
          <option value="5000000">50 Lac</option>
          <option value="6000000">60 Lac</option>
          <option value="7000000">70 Lac</option>
          <option value="8000000">80 Lac</option>
          <option value="9000000">90 Lac</option>
          <option value="10000000">1 Cr</option>
          <option value="20000000">2 Cr</option>
          <option value="30000000">3 Cr</option>
          <option value="40000000">4 Cr</option>
          <option value="50000000">5 Cr</option>
          <option value="60000000">6 Cr</option>
          <option value="70000000">7 Cr</option>
          <option value="80000000">8 Cr</option>
          <option value="90000000">9 Cr</option>
          <option value="100000000">10 Cr</option>
        </select>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="p-3 bg-primary text-white rounded-lg w-full sm:w-1/6 transition duration-200 ease-in-out focus:outline-none focus:ring-2"
      >
        Search
      </button>
    </div>
  );
};

export default FilterBar;
