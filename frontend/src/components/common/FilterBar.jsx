import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaRupeeSign, FaBed, FaBuilding } from "react-icons/fa";

const FilterBar = ({ filters, setFilters, searchProperties }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  console.log(localFilters);

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

      {/* Bedrooms */}
      <div className="w-full sm:w-1/6 flex items-center gap-2">
        <FaBed className="text-primary" size={25} />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={localFilters.bedrooms}
          onChange={handleFilterChange}
          className="p-3 border border-primary rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-primary hover:border-primary transition duration-200 ease-in-out"
        />
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
