import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// IMPORT REAL PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Catering from "./pages/Catering";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import Services1 from "./pages/Service1";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<><Home /><Services1 /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery/:category?" element={<Gallery />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
