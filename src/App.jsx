import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contacto from './Routes/Contact';
import Favs from './Routes/Favs';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import DentistDetail from './Components/DentistDetail';
import { useContext } from 'react';
import { AppContext } from './AppContext';  

const App = () => {
  const { state } = useContext(AppContext); 
  const { theme } = state;

  document.body.className = theme;

  return (
    <Router>
      {}
      <Navbar />
      
      <div className="main-content">
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/dentist/:id" element={<DentistDetail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </div>

      {/* Renderiza el Footer de forma fija */}
      <Footer />
    </Router>
  );
};

export default App;
