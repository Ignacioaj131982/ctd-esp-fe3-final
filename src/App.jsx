import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Contacto from './Routes/Contact';
import DentistDetail from './Routes/Detail';
import Favs from './Favs';
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
        <Route path='/Footer' element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;
