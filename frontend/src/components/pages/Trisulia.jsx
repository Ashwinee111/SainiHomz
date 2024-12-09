import axios from "axios";
import Image1 from "../../assets/trisulia.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../common/PropertyCard";
import { propertyApi } from "../../Services/api";

const { GET_PROPERTYDATA } = propertyApi;

const Trisulia = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [loading, setLoading] = useState(true);

  const propertiesPerPage = 12; // Number of properties per page

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(GET_PROPERTYDATA);
        console.log(response);
        // Filter only apartments
        const apartments = response.data.filter(
          (property) => property.location === "Trisulia"
        );
        setProperties(apartments);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Calculate the properties for the current page
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
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
        style={{ backgroundImage: `url(${Image1})` }}
      >
        <h2 className="text-4xl md:text-6xl font-bold z-10">
          Trisulia
        </h2>
        <p className="text-xl md:text-2xl mt-6 z-10">
          Home / <span className="text-[#A5A8B1]">Trisulia</span>
        </p>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-[1500px] mx-auto px-4 py-8">
        {loading ? (
          <p className="text-center text-xl font-semibold">
            Loading apartments...
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
                length: Math.ceil(properties.length / propertiesPerPage),
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
          <p className="text-center text-xl font-semibold text-red-500">
            No apartments available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Trisulia;
