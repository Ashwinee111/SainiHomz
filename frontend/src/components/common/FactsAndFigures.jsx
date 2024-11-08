import CountUp from "react-countup";

const FactsAndFigures = () => {
  return (
    <div className="flex justify-center items-center py-24 font-primary bg-[#F9FAFB]">
      <div className="relative overflow-hidden max-w-[1500px]">
        <h2 className="font-medium text-primary text-2xl text-center">
          Our Trusted
        </h2>
        <h2 className="text-center text-5xl font-semibold text-dark mt-6 mb-14">
          Facts & Figure
        </h2>
        <div className="flex space-x-16 mt-6">
          {/* Years */}
          <div className="text-center">
            <CountUp
              start={0}
              end={15}
              duration={2}
              suffix="+"
              className="text-7xl font-bold text-primary"
            />
            <p className="text-gray-600 mt-2 font-medium text-2xl">Years</p>
          </div>

          {/* Projects */}
          <div className="text-center">
            <CountUp
              start={0}
              end={500}
              duration={2}
              suffix="+"
              className="text-7xl font-bold text-primary"
            />
            <p className="text-gray-600 mt-2 font-medium text-2xl">Projects</p>
          </div>

          {/* Customers */}
          <div className="text-center">
            <CountUp
              start={0}
              end={5000}
              duration={2}
              separator=","
              suffix="+"
              className="text-7xl font-bold text-primary"
            />
            <p className="text-gray-600 mt-2 font-medium text-2xl">Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsAndFigures;
