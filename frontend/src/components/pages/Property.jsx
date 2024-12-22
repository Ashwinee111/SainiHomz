import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../common/PropertyCard";
import FilterBar from "../common/FilterBar";
import { propertyApi } from "../../Services/api";
import Image1 from "../../assets/property.jpg";

const { GET_PROPERTYDATA } = propertyApi;

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    property_type: "",
    location: "",
    min_price: "",
    max_price: "",
    bedrooms: "",
  });

  const propertiesPerPage = 12;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(GET_PROPERTYDATA);
        setProperties(response.data);
        setFilteredProperties(response.data); // Initialize filtered properties
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Helper function to normalize price
  const normalizePrice = (price) => {
    if (price.includes("Cr")) {
      return parseFloat(price.replace(" Cr", "")) * 10000000; // Convert "1.95 Cr" to 19500000
    } else if (price.includes("Lac")) {
      return parseFloat(price.replace(" Lac", "")) * 100000; // Convert "30 Lac" to 3000000
    }
    return parseFloat(price) || 0; // Handle cases where price is already numeric
  };

  useEffect(() => {
    // Filter properties based on selected filters
    const filtered = properties.filter((property) => {
      const matchesType = filters.property_type
        ? property.property_type === filters.property_type
        : true;
      const matchesLocation = filters.location
        ? property.location
            .toLowerCase()
            .includes(filters.location.toLowerCase())
        : true;

      // Normalize property price for comparison
      const propertyPrice = normalizePrice(property.price);
      const matchesMinPrice = filters.min_price
        ? propertyPrice >= parseInt(filters.min_price, 10)
        : true;
      const matchesMaxPrice = filters.max_price
        ? propertyPrice <= parseInt(filters.max_price, 10)
        : true;

      const matchesBedrooms = filters.bedrooms
        ? property.bedrooms === parseInt(filters.bedrooms, 10)
        : true;

      return (
        matchesType &&
        matchesLocation &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesBedrooms
      );
    });

    setFilteredProperties(filtered);
    setCurrentPage(1); // Reset to the first page when filters change
  }, [filters, properties]);

  // Calculate the properties for the current page
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="pt-16 font-primary">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center flex-col text-white"
        style={{ backgroundImage: `url(${Image1})` }} // Corrected here
      >
        <h2 className="text-4xl md:text-6xl font-bold z-10">
          Property Listing
        </h2>
        <p className="text-xl md:text-2xl mt-6 z-10">
          Home / <span className="text-[#A5A8B1]">Property</span>
        </p>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-[1500px] mx-auto px-4 py-4">
        <FilterBar filters={filters} setFilters={setFilters} />
      </div>

      {/* Properties Grid */}
      <div className="max-w-[1500px] mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-xl font-semibold">
            Loading properties...
          </p>
        ) : currentProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentProperties.map((property) => (
                <Link key={property._id} to={`/property/${property._id}`}>
                  <PropertyCard {...property} />
                </Link>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              {Array.from({
                length: Math.ceil(
                  filteredProperties.length / propertiesPerPage
                ),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-xl font-semibold text-gray-500">
            No properties available with the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
