import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './layout/Home';
import Mayoreo from './layout/Mayoreo';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './utils/scrollTop';
import Carnitas from './layout/Carnitas';
import Contacto from './layout/Contacto';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mayoreo" element={<Mayoreo />} />
            <Route path="/carnitas" element={<Carnitas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App
