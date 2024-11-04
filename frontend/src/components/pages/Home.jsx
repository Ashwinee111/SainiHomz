import Hero from "../common/Hero";
import PropertyRequirement from "../common/PropertyRequirement";
import InquiryForm from "../common/InquiryForm";
import Marquee from "../common/Marquee";
import Testimonials from "../common/Testimonials";
import PropertyList from "../common/PropertyList";


function Home() {
  return (
    <>
      <Hero />
      <PropertyRequirement />
      <PropertyList />
      <InquiryForm />
      <Marquee />
      <Testimonials />
    </>
  );
}

export default Home;
