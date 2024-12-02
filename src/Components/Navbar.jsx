import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppContext';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);
  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${theme}`}>

      <div className="navbar-logo">DH Odonto</div>

    
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>

      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </nav>
  );
};

export default Navbar;