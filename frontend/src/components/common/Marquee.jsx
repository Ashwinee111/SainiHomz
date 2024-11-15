import image1 from "../../assets/patners/1.svg";
import image2 from "../../assets/patners/2.png";
import image3 from "../../assets/patners/3.jpeg";
import image4 from "../../assets/patners/4.png";
import image5 from "../../assets/patners/5.jpeg";
import image6 from "../../assets/patners/6.png";
import image7 from "../../assets/patners/7.png";
import image8 from "../../assets/patners/8.png";
import image9 from "../../assets/patners/9.png";
import image10 from "../../assets/patners/10.png";
import image11 from "../../assets/patners/11.webp";
import image12 from "../../assets/patners/12.webp";
import image13 from "../../assets/patners/13.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
];

const Marquee = () => {
  return (
    <div className="flex justify-center items-center py-24 font-primary">
      <div className="relative overflow-hidden max-w-[1500px]">
        <h2 className="font-medium text-primary text-2xl text-center">
          Our Trusted
        </h2>
        <h2 className="text-center text-5xl font-semibold text-dark mt-6 mb-14">
          Real Estate Partners
        </h2>
        {/* The marquee container */}
        <div className="flex justify-between animate-marquee space-x-8 mt-14">
          {/* Loop through the images and display each */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Marquee image ${index + 1}`}
              className="w-full h-[80px] object-cover"
            />
          ))}
          {/* Duplicate the images to create a seamless loop effect */}
          {images.map((image, index) => (
            <img
              key={`duplicate-${index}`}
              src={image}
              alt={`Marquee duplicate ${index + 1}`}
              className="w-full h-[80px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
