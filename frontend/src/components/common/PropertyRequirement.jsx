import Apartment from "../../assets/apartment.png";
import Villa from "../../assets/villa.png";
import Luxury from "../../assets/luxury.png";
import Residences from "../../assets/residences.png";

const PropertyRequirement = () => {
  const properties = [
    {
      name: "Appartment",
      icon: Apartment,
      count: 6,
      details: "View Details",
    },
    { name: "Villas", icon: Villa, count: 6, details: "View Details" },
    {
      name: "Luxury Homes",
      icon: Luxury,
      count: 4,
      details: "View Details",
    },
    {
      name: "Branded Residences",
      icon: Residences,
      count: 6,
      details: "View Details",
    },
  ];

  return (
    <div className="bg-gray-50 py-24 font-primary">
      <div className="container mx-auto px-4 max-w-[1500px]">
        <h2 className="font-medium text-primary text-2xl text-center">
          Newly Listed
        </h2>
        <h2 className="text-center text-5xl font-semibold text-dark mt-6 mb-14">
          Explore The Finest Real Estate Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl border-2 border-primary p-10 flex flex-col items-center justify-center space-y-2 hover:shadow-xl transition-all"
            >
              {/* Use img tag to display the icon */}
              <img
                src={property.icon}
                alt={property.name}
                className="w-20 h-20 mb-6"
              />
              <h3 className="text-2xl font-semibold my-12">{property.name}</h3>
              <p className="text-gray-500 text-lg">
                {property.count} Properties
              </p>
              <a href="#" className="text-primary font-semibold">
                {property.details}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyRequirement;
