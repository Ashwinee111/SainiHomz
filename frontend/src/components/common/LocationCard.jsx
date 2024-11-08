const LocationCard = ({ image, name, propertyCount }) => {
    return (
      <div className="bg-white font-primary rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-60 rounded-lg object-cover mb-4 transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="bg-primary text-white px-4 py-1 rounded-full text-sm">
          {propertyCount} Properties
        </div>
      </div>
    );
  };
  
  export default LocationCard;
  