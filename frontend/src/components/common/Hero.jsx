import React from "react";
import bgImage from "../../assets/hero.jpg"; // Replace with your background image

const Hero = () => {
  return (
    <section
      className="relative h-screen max-h-[900px] bg-center bg-cover flex items-center justify-center font-primary"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero content */}
      <div className="relative z-10 text-center text-white px-4 flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4 lg:w-4/5 lg:leading-snug">
          Let's start the search for your dream property with SainiHomZ
        </h1>
        <p className="mx-auto text-lg lg:text-2xl mb-6 font-medium">
          Your dream property awaits! This stunning property features all the
          amenities and comfort you desire.
        </p>

        {/* Search Form */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl mx-auto w-full lg:mt-10 text-dark">
          <form className="flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-4 justify-between">
            {/* Property Type */}
            <div className="w-full lg:flex-1">
              <select className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Office</option>
              </select>
            </div>
            {/* Location */}
            <div className="w-full lg:flex-1">
              <select className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>All Cities</option>
                <option>Bhubaneswar</option>
                <option>Cuttack</option>
              </select>
            </div>
            {/* Property Size */}
            <div className="w-full lg:flex-1">
              <select className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm sm:text-base">
                <option>Bedrooms</option>
                <option>1 Bedroom</option>
                <option>2 Bedrooms</option>
                <option>3 Bedrooms</option>
              </select>
            </div>
            {/* Budget */}
            <div className="w-full lg:flex-1">
              <input
                type="text"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm sm:text-base"
                placeholder="Max. Price"
              />
            </div>
            {/* Search Button */}
            <div className="w-full lg:w-auto">
              <button
                type="submit"
                className="w-full lg:w-auto px-6 py-2 sm:py-3 bg-primary text-white rounded-md text-sm sm:text-base font-bold"
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
