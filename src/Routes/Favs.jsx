import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  // Recuperamos los favoritos desde el localStorage cuando el componente se monta
  useEffect (() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <main className="main">
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favorites.length > 0 ? ( 
          favorites.map(dentist => ( 
            <Card key={dentist.id} dentist={dentist} addToFavorites={()=> {}} />
          ))
        ) : (
          <p>No tienes dentistas favoritos.</p>
        )}
      </div>
    </main>
  );
};

export default Favs;
