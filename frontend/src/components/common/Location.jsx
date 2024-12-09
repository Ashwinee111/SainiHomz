import axios from "axios";
import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import Image1 from "../../assets/place/Evos_alchemyy.avif";
import Image2 from "../../assets/place/mahadev_greens.avif";
import Image3 from "../../assets/place/utkal_levels.jpg";
import Image4 from "../../assets/place/utkal_reserve.avif";
import { propertyApi } from "../../Services/api";
const { GET_PROPERTYDATA } = propertyApi;

const initialLocations = [
  {
    name: "Patia",
    image: Image1,
    propertyCount: 0,
  },
  {
    name: "Khandagiri",
    image: Image3,
    propertyCount: 0,
  },
  {
    name: "Pahala",
    image: Image4,
    propertyCount: 0,
  },
  {
    name: "Trisulia",
    image: Image2,
    propertyCount: 0,
  },
];

const Location = () => {
  const [locations, setLocations] = useState(initialLocations);

  useEffect(() => {
    const fetchPropertyCounts = async () => {
      try {
        const response = await axios.get(GET_PROPERTYDATA); // Fetch properties
        const properties = response.data; // Use data from the response

        // Calculate property counts for each location
        const updatedLocations = locations.map((location) => {
          const count = properties.filter(
            (property) => property.location === location.name
          ).length;

          return { ...location, propertyCount: count };
        });

        setLocations(updatedLocations);
      } catch (error) {
        console.error("Error fetching property counts:", error);
      }
    };

    fetchPropertyCounts();
  }, []);

  return (
    <div className="flex justify-center items-center py-24 font-primary bg-[#F9FAFB]">
      <div className="relative overflow-hidden w-[1500px]">
        <h2 className="font-medium text-primary text-2xl text-center">
          Popular Places
        </h2>
        <h2 className="text-center text-5xl font-semibold text-dark mt-6 mb-14">
          Check Our Featured Properties
        </h2>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <LocationCard
                key={index}
                image={location.image}
                name={location.name}
                propertyCount={location.propertyCount}
                locationKey={location.name.toLowerCase()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
