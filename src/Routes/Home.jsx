import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext'; // Importa el contexto para el tema
import Card from '../Components/Card';  // Importa el componente Card

// Este componente deberá ser estilado como "dark" o "light" dependiendo del tema del Context
const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useContext(AppContext);
  const { theme } = state;

  // Función para obtener los dentistas desde la API
  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  // Función para agregar un dentista a favoritos
  const addFavorites = (dentist) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === dentist.id)) {
      favorites.push(dentist);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${dentist.name} agregado a favoritos`);
    } else {
      alert(`${dentist.name} ya está en favoritos`);
    }
  };

  // Función para eliminar un dentista de favoritos
  const removeFavorites = (dentist) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter(fav => fav.id !== dentist.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    alert(`${dentist.name} eliminado de favoritos`);
  };

  return (
    <main className={theme}>
      <h1>Home</h1>
      <div className={`card-grid ${theme}`}>
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            dentist={dentist}
            addToFavorites={addFavorites}
            removeFromFavorites={removeFavorites} // Pasa la función para eliminar
          />
        ))}
      </div>
    </main>
  );
};

export default Home;