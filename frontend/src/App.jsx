import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// <-- Pages -->
import Home from "./components/pages/Home";
import PropertyDetails from "./components/pages/PropertyDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:property_id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
