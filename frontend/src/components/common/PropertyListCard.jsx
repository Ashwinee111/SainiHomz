import React from "react";

function PropertyListCard() {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white">
      <div className="mb-4">
        <span className="block text-sm text-gray-500">
          {photosCount} Photos
        </span>
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="text-sm text-gray-500">
        <p>
          Area: <span className="font-medium">{area}</span>
        </p>
        <p>
          Price: <span className="font-medium">{price}</span>{" "}
          <span className="text-xs">{pricePerSqft}</span>
        </p>
        <p>
          Date Posted: <span>{datePosted}</span>
        </p>
        <p>
          Agent: <span className="font-medium">{agent.name}</span>{" "}
          {agent.verified && <span className="text-green-500">(Verified)</span>}
        </p>
        <p>Details: {details}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button className="text-white bg-red-500 px-4 py-2 rounded-lg">
          Contact Agent
        </button>
        <button className="text-red-500 border border-red-500 px-4 py-2 rounded-lg">
          Get Phone No.
        </button>
      </div>
    </div>
  );
}

export default PropertyListCard;
