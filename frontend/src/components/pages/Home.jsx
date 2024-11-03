import Hero from "../common/Hero";
import PropertyRequirement from "../common/PropertyRequirement";
import InquiryForm from "../common/InquiryForm";
import Marquee from "../common/Marquee";
import Testimonials from "../common/Testimonials";
import PropertyList from "../common/PropertyList";
import PropertyForm from "../common/PropertyForm"


function Home() {
  return (
    <>
      <Hero />
      <PropertyRequirement />
      <PropertyList />
      <InquiryForm />
      <Marquee />
      <Testimonials />
      <PropertyForm />
    </>
  );
}

export default Home;
