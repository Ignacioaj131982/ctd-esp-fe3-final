import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/dentistDetail.css';

const DentistDetail = () => {
  const { id } = useParams();
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
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del dentista...</p>;
  }

  if (!dentist) {
    return <p>No se encontró al dentista.</p>;
  }

  return (
    <div className="table-container">
      <h1>Detalles del Dentista</h1>
      <table className="detail-table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{dentist.username}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Web Site</th>
            <td>
              <a href={`http://${dentist.website}`} target="_blank" rel="noopener noreferrer">
                {dentist.website}
              </a>
            </td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{dentist.company.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DentistDetail;
