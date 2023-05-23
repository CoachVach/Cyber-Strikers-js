"use client"; 
import React, { useEffect, useState } from 'react';
import fetchData from '../api';

interface Item {
  id: number;
  nombre: string;
  ciudad: string;
  logo: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

const Lista_cartas: React.FC = () => {
  const [data, setData] = useState<Item[] | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData: Item[] = await fetchData();
        setData(apiData);
      } catch (error) {
        // Handle error
      }
    };

    fetchDataFromApi();
  }, []);

  // Render your component using the fetched data
  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.nombre}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Lista_cartas;
