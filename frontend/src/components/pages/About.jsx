import {
  FaBuilding,
  FaCar,
  FaPiggyBank,
  FaFileContract,
  FaKey,
} from "react-icons/fa";
import AboutImage from "../../assets/about.jpg";
import AboutImage2 from "../../assets/about2.jpg";

function About() {
  return (
    <div className="pt-16 font-primary">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center flex-col text-white"
        style={{ backgroundImage: `url(${AboutImage})` }}
      >
        <h2 className="text-4xl md:text-6xl font-bold z-10">About Us</h2>
        <p className="text-xl md:text-2xl mt-6 z-10">
          Home / <span className="text-[#A5A8B1]">About Us</span>
        </p>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 pt-12">
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
        <div className="py-6 flex flex-col justify-center sm:py-12">
          <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical bar running through middle */}
              <div className="hidden sm:block w-1 bg-[#50C55E] absolute h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Timeline Items */}
              {[
                {
                  icon: FaBuilding,
                  text: "Search & Shortlist",
                  description:
                    "Nullam pharetra, velit quis varius porta, lorem libero maximu justo, at sodales sem.",
                },
                {
                  icon: FaCar,
                  text: "Site Visit",
                  description:
                    "Nullam pharetra, velit quis varius porta, lorem libero maximu justo, at sodales sem.",
                },
                {
                  icon: FaPiggyBank,
                  text: "Loan Assistance",
                  description:
                    "Nullam pharetra, velit quis varius porta, lorem libero maximu justo, at sodales sem.",
                },
                {
                  icon: FaFileContract,
                  text: "Legal Advice",
                  description:
                    "Nullam pharetra, velit quis varius porta, lorem libero maximu justo, at sodales sem.",
                },
                {
                  icon: FaKey,
                  text: "Unit Booking",
                  description:
                    "Nullam pharetra, velit quis varius porta, lorem libero maximu justo, at sodales sem.",
                },
              ].map((item, index) => (
                <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex flex-col sm:flex-row items-center">
                    <div
                      className={`flex ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                      } w-full mx-auto items-center`}
                    >
                      <div className="w-full sm:w-1/2 bg-[#cbf7c8]">
                        <div className="px-10 py-5 rounded shadow text-xl font-semibold">
                          <p>{item.text}</p>
                          <p className="mt-2 text-gray-600 text-lg font-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primary border-white border-4 w-16 h-16 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <item.icon className="text-white text-2xl" />
                    </div>
                  </div>
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
