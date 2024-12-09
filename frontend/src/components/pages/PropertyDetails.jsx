import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheckCircle } from "react-icons/fa";
import { propertyApi } from "../../Services/api";
import { FaLocationDot } from "react-icons/fa6";
import Form from "../common/Form";
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";
import EmiCalculator from "../common/EmiCalculator";

import Image1 from "../../assets/1.webp";
import Image2 from "../../assets/2.webp";
import Image3 from "../../assets/3.webp";
import Customer from "../../assets/customer.webp";

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
        const response = await axios.get(
          GET_PROPERTYDATA_BY_ID.replace(":id", property_id)
        );
        console.log(response.data);
        setProperty(response.data);
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

  const {
    address,
    amenities,
    availability_status,
    bathrooms,
    bedrooms,
    carpet_area,
    configuration,
    description,
    furnishing,
    location,
    price,
    property_type,
    title,
    possession,
    status,
    gallery,
    floor_plan,
  } = property;

  const amenitiesArray = amenities || [];

  return (
    <div className="container mx-auto p-4 max-w-[1500px] font-primary pt-[150px]">
      {/* Property Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-4 bg-white shadow">
        <div>
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="flex items-center text-green-600 font-semibold">
              <span className="material-icons mr-1">
                <FaLocationDot />
              </span>{" "}
              {location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="bg-primary p-2 text-white font-semibold rounded-md text-center w-full mt-2">
              {property_type}
            </p>
            <p className="bg-[#94A0DF] p-2 text-white font-semibold rounded-md text-center w-full mt-2">
              {availability_status}
            </p>
          </div>
        </div>
        <div className="text-3xl font-semibold text-green-600">₹ {price}</div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6">
        {/* Left Column */}
        <div className="lg:w-2/3">
          {/* Image Carousel */}
          <Slider {...carouselSettings} className="mb-6">
            {gallery && gallery.length > 0 ? (
              gallery.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    src={imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="w-[1200px] h-[628px] object-cover"
                  />
                </div>
              ))
            ) : (
              <div>
                <p className="text-center text-gray-500">No images available</p>
              </div>
            )}
          </Slider>

          {/* Property Overview */}
          <div className="p-4 rounded-lg shadow">
            <h2 className="bg-gray-100 text-xl font-medium mb-4 p-3 rounded-lg">
              Overview
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <strong>Property Type</strong> <br /> {property_type}
              </div>
              <div>
                <strong>Status</strong> <br /> {status}
              </div>
              <div>
                <strong>Area</strong> <br /> {carpet_area} Sqft
              </div>
              <div>
                <strong>Bedrooms</strong> <br /> {bedrooms}
              </div>
              <div>
                <strong>Bathrooms</strong> <br /> {bathrooms}
              </div>
            </div>
          </div>

          {/* Property Description */}
          <div className="mt-8 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-medium mb-4 bg-gray-100 rounded-lg p-3">
              Description
            </h2>
            <p className="text-gray-700">{description}</p>
          </div>

          {/* Property Details */}
          <div className="mt-8 bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-medium mb-4 bg-gray-100 rounded-lg p-3">
              Details
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <strong>Price:</strong> {price}
              </div>
              <div>
                <strong>Configuration:</strong> {configuration}
              </div>
              <div>
                <strong>Possession:</strong> {possession}
              </div>
              <div>
                <strong>Floor:</strong> 1 (Out of 12)
              </div>
              <div>
                <strong>Address:</strong> {address}
              </div>
              <div>
                <strong>Furnishing:</strong> {furnishing}
              </div>
              <div>
                <strong>Availability Status:</strong> {availability_status}
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white p-6 mt-8 shadow rounded-lg">
            <h2 className="text-xl font-medium mb-4 bg-gray-100 rounded-lg p-3">
              Amenities
            </h2>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {amenitiesArray.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <span className="material-icons text-green-500 mr-2">
                    <FaCheckCircle />
                  </span>{" "}
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Floor plans */}
          <div className="bg-white p-6 mt-8 shadow rounded-lg">
            <h2 className="text-xl font-medium mb-4 bg-gray-100 rounded-lg p-3">
              Floor Plans
            </h2>
            <div className="flex gap-4 flex-wrap justify-center p-4">
              {floor_plan.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-56 h-auto rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side*/}
        <div className="lg:w-1/3">
          <div className="flex items-center justify-center mb-10">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full text-center">
              <img
                src={Customer}
                alt="Expert"
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h2 className="text-lg font-semibold mt-4">
                Get Advice from Our Real Estate Experts
              </h2>
              <p className="text-gray-600 mt-2">
                Book your site visit today and explore your future home!
              </p>
              <a
                href="tel:+1234567890"
                className="bg-primary text-white font-semibold px-4 py-2 rounded-full mt-4 inline-block hover:bg-green-600"
              >
                Call Now
              </a>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-primary hover:text-green-600">
                  <FaInstagram />
                </a>
                <a href="#" className="text-primary hover:text-green-600">
                  <FaSquareFacebook />
                </a>
                <a href="#" className="text-primary hover:text-green-600">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-primary hover:text-green-600">
                  <FaSquareTwitter />
                </a>
              </div>
            </div>
          </div>
          {/* {Form} */}
          <div>
            <Form />
          </div>
          {/* EmiCalculator */}
          <div>
            <EmiCalculator />
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      {/* <div className="mt-8">
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
      </div> */}
    </div>
  );
}

export default PropertyDetails;
