import Hero from "../common/Hero";
import PropertyType from "../common/PropertyType";
import InquiryForm from "../common/InquiryForm";
import Marquee from "../common/Marquee";
import PropertyList from "../common/PropertyList";
import FactsAndFigures from "../common/FactsAndFigures";
import City from "../common/Location";
// import PropertyForm from "../common/PropertyForm"

function Home() {
  return (
    <>
      <Hero />
      <PropertyType />
      <PropertyList />
      <InquiryForm />
      <City />
      <Marquee />
      <FactsAndFigures />
      {/* <PropertyForm /> */}
    </>
  );
}

export default Home;
