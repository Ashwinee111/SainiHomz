import { useState } from "react";
import {
  FaBuilding,
  FaCar,
  FaPiggyBank,
  FaFileContract,
  FaKey,
} from "react-icons/fa";
import AboutImage from "../../assets/about.jpg";
import AboutImage2 from "../../assets/about2.jpg";

const steps = [
  {
    id: 1,
    title: "Search & Shortlist",
    description:
      "Nullam pharetra, velit quis varius porta, lorem libero maximus justo, at sodales sem.",
    icon: <FaBuilding size={30} />,
  },
  {
    id: 2,
    title: "Site Visit",
    description:
      "Nullam pharetra, velit quis varius porta, lorem libero maximus justo, at sodales sem.",
    icon: <FaCar size={30} />,
  },
  {
    id: 3,
    title: "Loan Assistance",
    description:
      "Nullam pharetra, velit quis varius porta, lorem libero maximus justo, at sodales sem.",
    icon: <FaPiggyBank size={30} />,
  },
  {
    id: 4,
    title: "Legal Advice",
    description:
      "Nullam pharetra, velit quis varius porta, lorem libero maximus justo, at sodales sem.",
    icon: <FaFileContract size={30} />,
  },
  {
    id: 5,
    title: "Unit Booking",
    description:
      "Nullam pharetra, velit quis varius porta, lorem libero maximus justo, at sodales sem.",
    icon: <FaKey size={30} />,
  },
];

function About() {
  const [hoveredStep, setHoveredStep] = useState(1);

  return (
    <div className="pt-16 font-primary">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center flex-col text-[#FFFFFF]"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <h2 className="text-4xl md:text-6xl font-bold z-10">About Us</h2>
        <p className="text-xl md:text-2xl mt-6 z-10">
          Home / <span className="text-[#A5A8B1]">About Us</span>
        </p>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-12">
        {/* Who We Are */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark">
            Who We Are?
          </h2>
          <div className="w-20 h-1 mx-auto bg-green-500 my-3"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* About Company Text */}
          <div className="md:w-1/2 p-4">
            <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              About the Company
            </h4>
            <p className="text-gray-700 mb-6 text-xl">
              At Saini Properties, we are revolutionizing the way property
              owners experience selling their valuable land. We understand that
              selling land, whether it's residential, commercial, industrial, or
              agricultural, can be a complex and often frustrating process.
              That's why we've built a platform that empowers property owners to
              take control of their land transactions and secure the maximum
              return they deserve.
            </p>
            <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Why Choose SainiHomz
            </h4>
            <p className="text-gray-700 mb-6 text-xl">
              At SainiHomZ, we believe that finding your dream property is more
              than just a transaction—it’s about building a lifestyle. Here’s
              why thousands of satisfied customers have trusted us with one of
              the most significant decisions of their lives.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-4 flex justify-center">
            <img
              src={AboutImage2}
              alt="Team discussing"
              className="rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3"
            />
          </div>
        </div>

        {/* Our Process */}
        <div className="text-center mt-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark">
            Our Process
          </h2>
          <div className="w-20 h-1 mx-auto bg-green-500 my-3"></div>
        </div>

        {/* Our Process Content */}
        <div className="py-20 bg-[#F9FAFB] rounded-md mt-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative text-center flex-1 z-10 mb-8 md:mb-0"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step Circle Icon */}
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto ${
                      hoveredStep === step.id
                        ? "bg-primary text-white"
                        : "text-primary bg-gray-100"
                    }`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <p className="text-xs font-semibold mt-2 text-primary">
                    STEP {step.id.toString().padStart(2, "0")}
                  </p>

                  {/* Step Title */}
                  <h3
                    className={`font-semibold mt-2 text-lg ${
                      hoveredStep === step.id ? "text-primary" : "text-gray-800"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description (Only shown on hover) */}
                  {hoveredStep === step.id && (
                    <p className="mt-2 text-lg text-gray-600 max-w-xs mx-auto">
                      {step.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
