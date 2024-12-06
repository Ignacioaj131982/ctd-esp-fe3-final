import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { state } = useContext(AppContext);
  const { theme } = state;

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
            removeFromFavorites={removeFavorites}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;