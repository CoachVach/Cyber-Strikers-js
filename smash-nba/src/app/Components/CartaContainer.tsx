import React from 'react';
import { Card } from 'react-bootstrap';

export interface Item {
  id: number;
  descripcion: string;
  costo: number;
  estadistica: number;
  categoria: string;
  jugador_id: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}

type ItemProps = {
  item: Item;
  addToCart: (item: Item) => void;
};

const CartaContainer: React.FC<ItemProps> = ({ item, addToCart }) => {
  const { id, descripcion, costo, estadistica, categoria, jugador_id } = item;

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-dark">Item {id}</Card.Title>
        <Card.Text className="text-dark">
          <strong>Descripción:</strong> {descripcion}
          <br />
          <strong>Costo:</strong> {costo}
          <br />
          <strong>Estadística:</strong> {estadistica}
          <br />
          <strong>Categoría:</strong> {categoria}
          <br />
          <strong>Jugador ID:</strong> {jugador_id}
        </Card.Text>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </Card.Body>
    </Card>
  );
};

export default CartaContainer;
