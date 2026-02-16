import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedCollections from "./components/FeaturedCollections/FeaturedCollections";
import BestSellers from "./components/BestSellers/BestSellers";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";
import Blog from "./components/Blog/Blog";
import Auth from "./components/Auth/Auth";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <Testimonials />
      <About />
      <CTA />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar will always show */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer /> {/* Footer can stay outside so it always shows */}
    </Router>
  );
}

export default App;
