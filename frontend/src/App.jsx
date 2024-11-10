import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Testimonials from "./components/common/Testimonials"
import Footer from "./components/common/Footer";

// <-- Pages -->
import Home from "./components/pages/Home";
import PropertyDetails from "./components/pages/PropertyDetails";
import About from "./components/pages/About"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:property_id" element={<PropertyDetails />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
