import { motion } from "framer-motion";
import Hero from "./Hero";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ContactoYMapa from "../components/Map";
// import Galery from "../components/Galery"; 
import CarnitasSection from "../components/CarnitasSection";
import FeaturesSection from "../components/FeaturesSection";
import MasVendidos from "../components/MasVendidos";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <AboutUs />
      <Services />
      <CarnitasSection />
      <FeaturesSection />
      <MasVendidos />
      <ContactoYMapa />
    </motion.div>
  );
};
export default Home;
