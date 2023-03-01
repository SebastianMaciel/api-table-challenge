import { useState, useEffect } from 'react';

// Manejamos desde este hook todo lo relacionado con la llamada a la API
const useFetch = (url) => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setUsers(data);
        setError(false);
      } catch (error) {
        setError(true);
        console.error('Error en la response: ', error);
      } finally {
        // Salga bien o mal, seteamos el loading en false
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { users, error, loading };
};

export default useFetch;
