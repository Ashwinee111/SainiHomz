import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Testimonials from "./components/common/Testimonials";
import Footer from "./components/common/Footer";

// <-- Pages -->
import Home from "./components/pages/Home";
import PropertyDetails from "./components/pages/PropertyDetails";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Property from "./components/pages/Property";
import Apartments from "./components/pages/Apartments";
import Villas from "./components/pages/Villas";
import LuxuryHomes from "./components/pages/LuxuryHomes";
import BrandedResidences from "./components/pages/BrandedResidences";
import Patia from "./components/pages/Patia";
import Pahala from "./components/pages/Pahala";
import Khandagiri from "./components/pages/Khandagiri";
import Trisulia from "./components/pages/Trisulia";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:property_id" element={<PropertyDetails />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/property" element={<Property />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/luxury-homes" element={<LuxuryHomes />} />
        <Route path="/branded-residences" element={<BrandedResidences />} />
        <Route path="/Patia" element={<Patia />} />
        <Route path="/Pahala" element={<Pahala />} />
        <Route path="/Trisulia" element={<Trisulia />} />
        <Route path="/Khandagiri" element={<Khandagiri />} />
      </Routes>
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
