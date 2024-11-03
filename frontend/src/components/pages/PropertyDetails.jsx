import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheckCircle } from "react-icons/fa";
import { propertyApi } from "../../Services/api";

import Image1 from "../../assets/1.webp";
import Image2 from "../../assets/2.webp";
import Image3 from "../../assets/3.webp";

function PropertyDetails() {

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { GET_PROPERTYDATA_BY_ID } = propertyApi;
  
  const { property_id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await axios.get(`${GET_PROPERTYDATA_BY_ID}${property_id}`);
        setProperty(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [property_id]);

  if (loading) return <p>Loading property details...</p>;
  if (!property) return <p>Property not found.</p>;

  const featuredProperties = [
    {
      title: "Light and Modern House",
      location: "Austin, TX",
      image: Image1,
    },
    {
      title: "Luxury Villa",
      location: "Bhubaneswar",
      image: Image2,
    },
    {
      title: "Modern Family House",
      location: "New York, NY",
      image: Image3,
    },
    {
      title: "Modern Family House",
      location: "New York, NY",
      image: Image3,
    },
  ];

  const amenitiesList = [
    "Air Conditioning",
    "Gym",
    "Laundry",
    "Shared Gym",
    "Kitchen Appliances",
    "Outdoor Shower",
    "Two Refrigerators",
    "Club House",
    "TV Cable",
    "Washer",
  ];

  return (
    <div className="container mx-auto p-4 max-w-[1500px] font-primary">
      {/* Property Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-white shadow">
        <div>
          <h1 className="text-2xl font-bold">Light and Modern House</h1>
          <p className="text-gray-600 flex items-center">
            <span className="material-icons mr-1">location_on</span> Austin, TX
          </p>
        </div>
        <div className="text-3xl font-bold text-green-600">$4,500/mo</div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6">
        {/* Left Column */}
        <div className="lg:w-2/3">
          {/* Image Carousel */}
          <Slider {...carouselSettings} className="my-6">
            <div>
              <img src={Image1} alt="House 1" className="w-full object-cover " />
            </div>
            <div>
              <img src={Image2} alt="House 2" className="w-full object-cover" />
            </div>
            <div>
              <img src={Image3} alt="House 3" className="w-full object-cover" />
            </div>
          </Slider>

          {/* Property Overview */}
          <div className="p-4 rounded-lg shadow">
            <h2 className="bg-gray-100 text-xl font-medium mb-4 p-3 rounded-lg">Overview</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <strong>Property Type</strong> <br /> Apartment
              </div>
              <div>
                <strong>Status</strong> <br /> Under Construction
              </div>
              <div>
                <strong>Area</strong> <br /> 1950 Sqft
              </div>
              <div>
                <strong>Bedrooms</strong> <br /> 6
              </div>
              <div>
                <strong>Bathrooms</strong> <br /> 3
              </div>
            </div>
          </div>

          {/* Property Description */}
          <div className="mt-8 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-medium mb-4 bg-gray-100 rounded-lg p-3">Description</h2>
            <p className="text-gray-700">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Property Details */}
          <div className="mt-8 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-medium mb-4 bg-gray-100 rounded-lg p-3">Details</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <strong>Price:</strong> 2.25 Cr
              </div>
              <div>
                <strong>Configuration:</strong> 3 BHK, 4 BHK
              </div>
              <div>
                <strong>Possession:</strong> June-2024
              </div>
              <div>
                <strong>Floor:</strong> 1 (Out of 12)
              </div>
              <div>
                <strong>Address:</strong> Bhubaneswar
              </div>
              <div>
                <strong>Furnishing:</strong> Unfurnished
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white p-6 mt-8 shadow rounded-lg">
            <h2 className="text-xl font-medium mb-4 bg-gray-100 rounded-lg p-3">Amenities</h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {amenitiesList.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <span className="material-icons text-green-500 mr-2">
                    <FaCheckCircle />
                  </span>{" "}
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Submit an Inquiry</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Phone (Optional)"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full mb-4 p-2 border border-gray-300 rounded h-32"
              />
              <button className="w-full bg-green-500 text-white p-2 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Featured Listings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {featuredProperties.map((property, index) => (
            <div key={index} className="bg-white p-4 shadow rounded-lg">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-52 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
