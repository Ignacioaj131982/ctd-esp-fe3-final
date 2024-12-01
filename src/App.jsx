import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contacto from './Routes/Contact';
import DentistDetail from './Routes/Detail';
import Favs from './Routes/Favs';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/dentist/:id" element={<DentistDetail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer /> {/* Esto asegura que Footer se renderiza en todas las páginas */}
    </Router>
  );
};

export default App;
