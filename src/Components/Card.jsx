import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ dentist, addToFavorites, removeFromFavorites }) => {
  return (
    <div className="card">
      <h3>{dentist.name}</h3>
      <p>{dentist.username}</p>

      <button onClick={() => addToFavorites(dentist)}>ADD FAV</button>
      <button onClick={() => removeFromFavorites(dentist)}>REMOVE FAV</button>

      {/* Enlace a la página de detalles del dentista */}
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
  removeFromFavorites: PropTypes.func.isRequired,
};

export default Card;
