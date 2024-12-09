import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropertyCard from "../common/PropertyCard";
import { propertyApi } from "../../Services/api";

const { GET_PROPERTYDATA } = propertyApi;

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState(8); // Number of properties to show
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(GET_PROPERTYDATA);
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSeeMore = () => {
    navigate("/property"); // Redirect to a new page
  };

  return (
    <div className="py-24 font-primary flex justify-center items-center">
      <div className="max-w-[1500px] px-4">
        <div>
          <h2 className="font-medium text-primary text-2xl text-center">
            Latest Projects
          </h2>
          <h2 className="text-center text-5xl font-semibold text-dark mt-6 mb-14">
            Comfort Living Solution
          </h2>
        </div>
        {loading ? (
          <p>Loading properties...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {properties.slice(0, visibleProperties).map((property) => (
                <Link key={property._id} to={`/property/${property._id}`}>
                  <PropertyCard {...property} />
                </Link>
              ))}
            </div>
            {/* See More Button */}
            {properties.length > visibleProperties && (
              <div className="text-center mt-10">
                <button
                  onClick={handleSeeMore}
                  className="px-6 py-3 bg-primary text-white rounded-md text-sm sm:text-base font-bold mt-10"
                >
                  See More Properties
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
