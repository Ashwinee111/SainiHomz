import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { propertyApi } from "../../Services/api";
const { GET_PROPERTYDATA } = propertyApi;
import ApartmentIcon from "../../assets/apartment_icon.png";
import VillaIcon from "../../assets/villa_icon.png"; // Fixed typo here
import LuxuryIcon from "../../assets/luxury_icon.png";
import ResidenceIcon from "../../assets/residence_icon.png";

const PropertyType = () => {
  const [counts, setCounts] = useState({
    apartments: 0,
    villas: 0,
    luxury: 0,
    branded: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(GET_PROPERTYDATA);
        const data = response.data;

        const newCounts = data.reduce(
          (acc, property) => {
            if (property.property_type === "Apartments") acc.apartments++;
            if (property.property_type === "Villas") acc.villas++;
            if (property.property_type === "Luxury Homes") acc.luxury++;
            if (property.property_type === "Branded Residences") acc.branded++;
            return acc;
          },
          { apartments: 0, villas: 0, luxury: 0, branded: 0 }
        );
        setCounts(newCounts);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to fetch property data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleDetailsClick = (key) => {
    const routes = {
      apartments: "/apartments",
      villas: "/villas",
      luxury: "/luxury-homes",
      branded: "/branded-residences",
    };
    if (routes[key]) {
      navigate(routes[key]); // Navigate to the corresponding route
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <section className="bg-gray-50 py-24 font-primary">
      <div className="container mx-auto px-4 max-w-[1500px]">
        <h2 className="font-medium text-primary text-2xl text-center">
          Newly Listed
        </h2>
        <h2 className="text-center text-5xl font-semibold text-dark mt-6 mb-14">
          Explore The Finest Real Estate Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[ 
            {
              key: "apartments",
              label: "Apartments",
              count: counts.apartments,
              icon: ApartmentIcon,
            },
            {
              key: "villas",
              label: "Villas",
              count: counts.villas,
              icon: VillaIcon,
            },
            {
              key: "luxury",
              label: "Luxury Homes",
              count: counts.luxury,
              icon: LuxuryIcon, 
            },
            {
              key: "branded",
              label: "Branded Residences",
              count: counts.branded,
              icon: ResidenceIcon, 
            },
          ].map(({ key, label, count, icon }, index) => (
            <article
              key={index}
              className="bg-white shadow-md rounded-2xl border-2 border-primary p-10 flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition-all"
            >
              <img src={icon} alt={label} className="h-16 w-16 mb-4" /> {/* Render icon image */}
              <h3 className="text-2xl font-semibold my-12">{label}</h3>
              <p className="text-gray-500 text-lg">{count} Properties</p>
              <div
                className="text-primary font-semibold cursor-pointer"
                onClick={() => handleDetailsClick(key)}
              >
                Details
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyType;
