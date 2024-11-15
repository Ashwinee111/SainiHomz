import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import the Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import Image1 from "../../assets/testimonial/1.jpeg";
import Image2 from "../../assets/testimonial/2.jpeg";
import Image3 from "../../assets/testimonial/3.jpeg";
import Image4 from "../../assets/testimonial/4.webp";
import Image5 from "../../assets/testimonial/5.webp";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Pagedone is simply the best tool of investment in the market right now.",
      author: "Supriya Mohapatra",
      position: "Doctor",
      avatar: Image1,
    },
    {
      text: "Pagedone helped us boost our business effortlessly.",
      author: "Monisha Patnaik",
      position: "House Wife",
      avatar: Image4,
    },
    {
      text: "Amazing product with top-notch customer support!",
      author: "Mr. Tapan Mohanty",
      position: "Businessman",
      avatar: Image5,
    },
    {
      text: "Exceeded our expectations in every way.",
      author: "Bharati Tirpathy",
      position: "CA",
      avatar: Image2,
    },
    {
      text: "A must-have tool for every growing business.",
      author: "Binayk Das",
      position: "Software Engineer",
      avatar: Image3,
    },
  ];

  return (
    <section className="py-24 font-primary">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="font-medium text-primary text-2xl text-center">
            Testmonial
          </h2>
          <h2 className="text-center text-5xl font-semibold text-dark mt-6 mb-14">
            What our happy user says!
          </h2>
        </div>

        {/*Slider wrapper*/}
        <Swiper
          slidesPerView={3} // Show 3 testimonials at a time
          spaceBetween={30} // Optional: Adjust spacing between slides
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000 }} // Automatically slide every 3 seconds
          modules={[Navigation, Autoplay]} // Add the Autoplay module
          loop={true} // Enable infinite loop
          className="swiper-container lg:flex grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full">
                <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-primary">
                  {/* Star rating */}
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-5">
                  <img
                    className="rounded-full object-cover w-[60px] h-[60px]"
                    src={testimonial.avatar}
                    alt="avatar"
                  />
                  <div className="grid gap-1">
                    <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-primary">
                      {testimonial.author}
                    </h5>
                    <span className="text-sm leading-6 text-gray-500">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
