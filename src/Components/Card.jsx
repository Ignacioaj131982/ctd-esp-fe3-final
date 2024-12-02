import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ dentist, addToFavorites, removeFromFavorites }) => {
  return (
    <div className="card">
      <h3>{dentist.name}</h3>
      <p>{dentist.username}</p>
      
      {/* Botón para agregar a favoritos */}
      <button onClick={() => addToFavorites(dentist)}>ADD FAV</button>
      
      {/* Botón para eliminar de favoritos */}
      <button onClick={() => removeFromFavorites(dentist)}>REMOVE FAV</button>
      
      <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
    </div>
  );
};

Card.propTypes = {
  dentist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired, // Asegúrate de que la función de eliminación esté validada
};

export default Card;
