import React from "react";
import { BiArea } from "react-icons/bi";
import { LuBedSingle } from "react-icons/lu";
import { LiaBathSolid } from "react-icons/lia";

const PropertyCard = ({
  featured_image,
  title,
  price,
  location,
  carpet_area,
  bedrooms,
  bathrooms,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
      <div className="relative">
        <img
          src={featured_image}
          alt={title}
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{location}</p>
        <div className="mt-2">
          <p className="text-lg font-bold text-primary">₹{price}</p>
        </div>
        <div className="mt-4 flex justify-between text-gray-600 text-sm gap-2">
          <span className="flex justify-center items-center gap-2 font-medium text-sm">
            <BiArea size={22} color="bg-primary" /> {carpet_area} Sq Ft
          </span>
          <span className="flex justify-center items-center gap-2 font-medium text-sm">
            <LuBedSingle size={22} color="bg-primary" /> {bedrooms} Beds
          </span>
          <span className="flex justify-center items-center gap-2 font-medium text-sm">
            <LiaBathSolid size={22} color="bg-primary" /> {bathrooms} Baths
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
