
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contacto from './Routes/Contact';
import DentistDetail from './Routes/Detail';
import Favs from './Routes/Favs';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useContext } from 'react';
import { AppContext } from './AppContext';  // Importa el contexto

const App = () => {
  const { state } = useContext(AppContext);  // Accede al tema desde el contexto
  const { theme } = state;

  // Aplica el tema al body
  document.body.className = theme;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/dentist/:id" element={<DentistDetail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
