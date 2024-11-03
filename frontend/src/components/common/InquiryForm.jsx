import InquiryBg from "../../assets/inquirybg.png";

const InquiryForm = () => {
  return (
    <div
      className="flex justify-center items-center min-h-[70vh] bg-gray-100 bg-cover bg-no-repeat font-primary py-24"
      style={{ backgroundImage: `url(${InquiryBg})` }} // InquiryBg must be correctly imported
    >
      <div className="container mx-auto px-4 max-w-[1500px] flex justify-center items-center">
        <div className="w-3/5 grid grid-rows-2 grid-cols-2 gap-6">
          <h2 className="text-5xl font-semibold text-white leading-[55px]">
            Why Our <br /> Service Is The Perfect Choice?
          </h2>
          <div>
            <h3 className="text-4xl font-semibold text-white mb-4 leading-[45px]">
              01.
              <br /> Lorem
            </h3>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              placeat voluptas, magni ipsum dolore quaerat quia ipsa neque!
              Nostrum, voluptate.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-white mb-4 leading-[45px]">
              02.
              <br /> Lorem
            </h3>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              placeat voluptas, magni ipsum dolore quaerat quia ipsa neque!
              Nostrum, voluptate.
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold text-white mb-4 leading-[45px]">
              03.
              <br /> Lorem
            </h3>
            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              placeat voluptas, magni ipsum dolore quaerat quia ipsa neque!
              Nostrum, voluptate.
            </p>
          </div>
        </div>
        <div className="w-2/5 flex justify-center items-center">
          <div className="w-[70%] p-8 bg-white rounded-md">
            <h2 className="text-center text-3xl font-semibold text-dark mb-6">
              Inquiry Form
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="example@domain.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="+1 (123) 456-0509"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Please tell us your requirement"
                ></textarea>
              </div>

              <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
