"use client";
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CartaContainer from './CartaContainer';
import { dataCartas } from '../api';

interface Item {
  id: number;
  descripcion: string;
  costo: number;
  estadistica: number;
  categoria: string;
  jugador: {
    id: number;
    nombre: string;
    apellido: string;
    nacionalidad: string;
    Nro_Camiseta: number;
    posicion: string;
    foto: string;
    equipo: {
      id: number;
      ciudad: string;
      nombre: string;
      logo: string;
    };
  };
}


const ItemListComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await dataCartas();
        setItems(apiData);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <Row xs={1} sm={2} md={4} lg={4} xl={4} className="g-4">
      {items.map((item) => (
        <Col key={item.id}>
          <CartaContainer item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default ItemListComponent;
