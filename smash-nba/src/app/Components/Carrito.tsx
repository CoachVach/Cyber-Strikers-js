"use client";
import Item from './Item'
import React from 'react';
import axios from 'axios';
import { Button, Card, Container } from 'react-bootstrap';
import '../StyleComponents/Carrito.css';

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
    return cartItems.reduce((total, item) => total + (item.costo*item.cant_producto), 0);
  };

  return (
    <div className='container'>
    <Container>
      <img src="/images/cart.png" alt="Image" className="img-fluid" />
      {cartItems.map((item) => (
        <Card key={item.id} className="card mb-3">
        <Card.Body>
          <div className="card-header">
            <Button variant="danger" onClick={() => handleRemove(item)} className="delete-button">-</Button>
          </div>
          <Card.Title>{item.jugador.nombre} {item.jugador.apellido}</Card.Title>
          <Card.Text>{item.jugador.equipo.ciudad} {item.jugador.equipo.nombre}</Card.Text>
          <Card.Text className="costo">{item.costo}$</Card.Text>
          <Card.Text className="cant-producto">{item.cant_producto}</Card.Text>
        </Card.Body>
      </Card>
      ))}
      <Button variant="primary" onClick={realizarPedido} className="button">Realizar Pedido</Button>
    </Container>
    </div>
  );
};

export default Carrito;
