import Hero from "../common/Hero";
import PropertyRequirement from "../common/PropertyRequirement";
import InquiryForm from "../common/InquiryForm";
import Marquee from "../common/Marquee";
import PropertyList from "../common/PropertyList";
import FactsAndFigures from "../common/FactsAndFigures";
import City from "../common/Location";
import PropertyForm from "../common/PropertyForm"

function Home() {
  return (
    <>
      <Hero />
      <PropertyRequirement />
      <PropertyList />
      <InquiryForm />
      <City />
      <Marquee />
      <FactsAndFigures />
      <PropertyForm />
    </>
  );
}

export default Home;
