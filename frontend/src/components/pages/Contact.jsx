import ContactImage from "../../assets/contact.jpg";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Form from "../common/Form";

function Contact() {
  return (
    <div className="pt-16 font-primary">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center flex-col text-[#FFFFFF]"
        style={{ backgroundImage: `url(${ContactImage})` }}
      >
        <h2 className="text-4xl md:text-6xl font-bold z-10">Contact Us</h2>
        <p className="text-xl md:text-2xl mt-6 z-10">
          Home / <span className="text-[#A5A8B1]">Contact Us</span>
        </p>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 pt-12">
        {/* Map Section */}
        <div className="w-full h-60 lg:h-80 mb-8 overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18418.679450321524!2d85.856257!3d20.2916605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a0502390e87%3A0xca2acd5e051094cf!2sSaini%20Properties!5e1!3m2!1sen!2sin!4v1731309304395!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            className="w-full h-full"
            title="Map"
          ></iframe>
        </div>

        {/* Contact Info & Form Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-12 px-6 py-10 rounded-md">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              To Know More About Properties
            </h2>

            {/* Address Section */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#cbf7c8]">
                <FaGlobe className="text-primary text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-2xl text-gray-800">
                  Our Address
                </h4>
                <p className="text-gray-600">
                  OU-636,6th Floor, Nexus Esplanade, Rasulgarh, Bhubaneswar,
                  Odisha 751010
                </p>
              </div>
            </div>

            {/* Working Hours Section */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#cbf7c8]">
                <FaMapMarkerAlt className="text-primary text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-2xl text-gray-800">
                  Working Hours
                </h4>
                <p className="text-gray-600">Thu - Tue: 10 AM - 6 PM</p>
                <p className="text-gray-600">Wed: Close</p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#cbf7c8]">
                <FaPhoneAlt className="text-primary text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-2xl text-gray-800">
                  Contact Us
                </h4>
                <p className="text-gray-600">+91-9124570576</p>
                <p className="text-gray-600">+91-9124570573</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#cbf7c8]">
                <FaEnvelope className="text-primary text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold text-2xl text-gray-800">
                  Email Us
                </h4>
                <p className="text-gray-600">
                  official.sainiproperties@gmail.com
                </p>
                <p className="text-gray-600">sainihomz@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
