"use client";
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import {dataEquipos} from '../api';
import { Link } from 'react-router-dom';

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
        <Carousel>
          {data.map((item) => (
            <Carousel.Item key={item.id}>
              <Link to={`/cartasEquipo/${encodeURIComponent(item.nombre)}`}>
                <img src={item.logo} alt={item.nombre} />
              </Link>
              <Carousel.Caption>
                <h3>{item.nombre}</h3>
                <p>{item.ciudad}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TeamsComponent;
