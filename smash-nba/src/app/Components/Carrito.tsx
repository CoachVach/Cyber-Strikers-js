import { Item } from './CartaContainer';
import React from 'react';
import axios from 'axios';

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
        cartas: cartItems.map(item => item.id),
      };

      const response = await axios.post('https://cyber-strikers-coachvach.vercel.app/rest/cargarPedido', pedidoData);
      
      if (response.status === 201) {
        console.log('Pedido creado correctamente:', response.data.message);
        // Perform any additional actions after creating the pedido
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
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.descripcion}</h3>
          <p>Costo: {item.costo}</p>
          <button onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}
      <button onClick={realizarPedido}>Realizar Pedido</button>
    </div>
  );
};

export default Carrito;
