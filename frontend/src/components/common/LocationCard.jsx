import { useNavigate } from "react-router-dom";

const LocationCard = ({ image, name, propertyCount, locationKey }) => {
  const navigate = useNavigate();

  const handlePropertyClick = (key) => {
    const routes = {
      patia: "/patia",
      pahala: "/pahala",
      trisulia: "/trisulia",
      khandagiri: "/khandagiri",
    };
    if (routes[key]) {
      navigate(routes[key]); // Navigate to the corresponding route
    }
  };

  return (
    <div className="bg-white font-primary rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-full h-60 rounded-lg object-cover mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <button
        onClick={() => handlePropertyClick(locationKey)}
        className="bg-primary text-white px-4 py-1 rounded-full text-sm"
      >
        {propertyCount} Properties
      </button>
    </div>
  );
};

export default LocationCard;
