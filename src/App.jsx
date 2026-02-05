import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedCollections from "./components/FeaturedCollections/FeaturedCollections";
import BestSellers from "./components/BestSellers/BestSellers";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <BestSellers />
      <Testimonials />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
