"use client";
import Item from './Item'
import React from 'react';
import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';

type CarritoProps = {
  cartItems: Item[];
  removeFromCart: (item: Item) => void;
};

const Carrito: React.FC<CarritoProps> = ({ cartItems, removeFromCart }) => {
  const handleRemove = (item: Item) => {
    removeFromCart(item);
  };

  const realizarPedido = async () => {
    try {
      const pedidoData = {
        estado: 'Pendiente',
        fecha_pedido: new Date().toISOString(),
        fecha_entrega: new Date().toISOString(),
        monto_total: calculateTotal(),
        user_id: 26, // Replace with the actual user ID
        cartas: cartItems.map(item => ({
          id: item.id,
          cant_producto: item.cant_producto
        })),
      };
      console.log(pedidoData)
      const response = await axios.post('https://cyber-strikers-coachvach.vercel.app/rest/cargarPedido', pedidoData);

      if (response.status === 201) {
        console.log('Pedido creado correctamente:', response.data.message);
        alert('Pedido creado correctamente.');
      } else {
        console.error('Error al crear el pedido:', response.status);
        // Handle errors if the response is not successful
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Handle errors if an error occurs during the request
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.costo, 0);
  };

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
            <Card.Title>{item.descripcion}</Card.Title>
            <Card.Text>Costo: {item.costo}</Card.Text>
            <Button variant="danger" onClick={() => handleRemove(item)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
      <Button variant="primary" onClick={realizarPedido}>Realizar Pedido</Button>
    </Container>
  );
};

export default Carrito;
