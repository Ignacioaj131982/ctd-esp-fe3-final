import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Styles/styles.css';

const Card = ({ dentist, addToFavorites, removeFromFavorites, showRemoveButton }) => {
  return (
    <div className="card">
      <Link to={`/dentist/${dentist.id}`}>
        <img src="/images/doctor.jpg" alt="Dentist" className="card-image" />
      </Link>

      <h3 className="card-title">{dentist.name}</h3>
      <p className="card-username">{dentist.username}</p>

      {!showRemoveButton && (
        <button
          className="favorite-button"
          onClick={() => addToFavorites(dentist)}
          >
          <img
            src="/images/tooth-icon.jpg"
            alt="Add to favorites"
            className="favorite-icon"
          />
          Add to Favorites
        </button>
      )}

      {showRemoveButton && (
        <button
          className="remove-button"
          onClick={() => {
          console.log('Removing:', dentist);
          removeFromFavorites(dentist);
    }}
  >
    REMOVE FAV
  </button>
)}

      <Link to={`/dentist/${dentist.id}`} className="details-link">
        Ver detalles
      </Link>
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
  showRemoveButton: PropTypes.bool,
};

Card.defaultProps = {
  showRemoveButton: false,
};

export default Card;

