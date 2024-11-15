import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertyCard from "../common/PropertyCard";
import { propertyApi } from "../../Services/api";

const { GET_PROPERTYDATA } = propertyApi;

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(GET_PROPERTYDATA);
        setProperties(response.data);
        console.log("Fetched properties:", response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <Link key={property._id} to={`/property/${property._id}`}>
                <PropertyCard {...property} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
