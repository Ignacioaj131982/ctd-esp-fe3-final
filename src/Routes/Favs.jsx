import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

 
  const removeFavorites = (dentist) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter(fav => fav.id !== dentist.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites); 
    alert(`${dentist.name} eliminado de favoritos`);
  };

  return (
    <main className="main">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map(dentist => (
            <Card
              key={dentist.id}
              dentist={dentist}
              addToFavorites={() => {}}
              removeFromFavorites={removeFavorites} 
              showRemoveButton={true} 
            />
          ))
        ) : (
          <p>No tienes dentistas en tus favoritos.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;