"use client";
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { dataEquipos } from '../api';
import Link from 'next/link';
import '../StyleComponents/Teams.css';

interface Item {
  id: number;
  nombre: string;
  ciudad: string;
  logo: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

const TeamsComponent: React.FC = () => {
  const [data, setData] = useState<Item[] | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const apiData: Item[] = await dataEquipos();
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
        <>
          <div className="d-flex flex-wrap justify-content-center mt-4">
            {data.map((item) => (
              <Link href={`/cartasEquipo/${encodeURIComponent(item.nombre)}`} key={item.id}>
                <img src={item.logo} alt={item.nombre} className="team-logo" />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TeamsComponent;

