import InquiryBg from "../../assets/inquirybg.png";
import Form from "../common/Form";

const InquiryForm = () => {
  return (
    <div
      className="relative flex justify-center items-center min-h-[70vh] bg-gray-100 bg-cover bg-no-repeat font-primary py-24"
      style={{ backgroundImage: `url(${InquiryBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 max-w-[1500px] flex justify-center items-center relative">
        <div className="w-1/2 grid grid-rows-2 grid-cols-2 gap-6">
          <h2 className="text-5xl font-semibold text-white leading-[55px]">
            Why Our <br /> Service Is The Perfect Choice?
          </h2>
          <div>
            <h3 className="text-4xl font-semibold text-white mb-4 leading-[45px]">
              01.
              <br /> Expertise and Experience
            </h3>
            <p className="text-xl text-white">
              With over 10 years of experience, we offer in-depth market
              knowledge and proven strategies to guide you through every step of
              the real estate process.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-white mb-4 leading-[45px]">
              02.
              <br /> Comprehensive Services
            </h3>
            <p className="text-xl text-white">
              From buying and selling to property management, we provide a full
              range of services, ensuring all your real estate needs are met
              under one roof.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-white mb-4 leading-[45px]">
              03.
              <br /> Customer-Centric Approach
            </h3>
            <p className="text-xl text-white">
              Your needs come first. We focus on understanding your unique goals
              and providing personalized solutions that align with your
              expectations.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
