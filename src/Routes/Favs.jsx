import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  // Recuperamos los favoritos desde el localStorage cuando el componente se monta
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Función para eliminar un dentista de favoritos
  const removeFavorites = (dentist) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = favorites.filter(fav => fav.id !== dentist.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites); // Actualiza el estado para reflejar el cambio inmediatamente
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
              removeFromFavorites={removeFavorites} // Pasa la función de eliminar
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
