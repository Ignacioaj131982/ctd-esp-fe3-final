import PropTypes from 'prop-types'; // Importa PropTypes

import { Link } from 'react-router-dom'; // Importa 'Link' para la navegación

// El componente Card recibe un 'dentist' y la función 'addToFavorites' como props
const Card = ({ dentist, addToFavorites }) => {
  return (
    <div className="card">
      <h3>{dentist.name}</h3>
      <p>{dentist.username}</p>
      <button onClick={() => addToFavorites(dentist)}>ADD FAV</button>
      <Link to={`/dentist/${dentist.id}`}>Ver detalles</Link>
    </div>
  );
};

// Validación de las props
Card.propTypes = {
  dentist: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired, // Definimos los tipos y requisitos de la prop 'dentist'
  addToFavorites: PropTypes.func.isRequired // Aseguramos que 'addToFavorites' sea una función
};

export default Card;
