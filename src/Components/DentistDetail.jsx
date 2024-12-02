import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Para acceder al ID de la URL

const DentistDetail = () => {
  const { id } = useParams(); // Obtener el ID del dentista de la URL
  const [dentist, setDentist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDentistDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
        setLoading(false);
      }
    };

    fetchDentistDetails();
  }, [id]); // Vuelve a ejecutar cuando el ID cambie

  if (loading) {
    return <p>Cargando detalles del dentista...</p>;
  }

  if (!dentist) {
    return <p>No se encontró al dentista.</p>;
  }

  return (
    <div>
      <h1>{dentist.name}</h1>
      <p><strong>Username:</strong> {dentist.username}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Phone:</strong> {dentist.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">{dentist.website}</a></p>
      <p><strong>Company:</strong> {dentist.company.name}</p>
    </div>
  );
};

export default DentistDetail;

