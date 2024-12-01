import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext'; // Importa el contexto para el tema
import Card from '../Components/Card';  // Importa el componente Card

// Este componente deberá ser estilado como "dark" o "light" dependiendo del tema del Context

const Home = () => {
  // Estado local para los dentistas
  console.log(React);
  const [dentists, setDentists] = useState([]);
  const { state } = useContext(AppContext); // Accede al estado del contexto
  const { theme } = state; // Obtener el tema (light o dark)

  // Función para obtener los dentistas desde la API
  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data); // Guardar los dentistas en el estado local
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists(); // Llamar la función cuando el componente se monta
  }, []); // El array vacío asegura que solo se ejecute una vez al cargar

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

  return (
    <main className={theme}> {/* Usamos el tema del contexto */}
      <h1>Home</h1>
      <div className={`card-grid ${theme}`}>
        {/* Renderizamos las Cards utilizando el componente Card */}
        {dentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist} addToFavorites={addFavorites} />
        ))}
      </div>
    </main>
  );
};

export default Home;
