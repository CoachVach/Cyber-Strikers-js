"use client";
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CartaContainer, { Item } from './CartaContainer';
import Carrito from './Carrito';
import { dataCartas } from '../api';
import CustomNavbar from './Navbar';



const ItemListComponent: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<Item[]>([]);

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

  const addToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item: Item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <div>
      <CustomNavbar cartItems={cartItems} removeFromCart={removeFromCart} />
      <Row xs={1} sm={2} md={4} lg={4} xl={4} className="g-4">
        {items.map((item) => (
          <Col key={item.id}>
            <CartaContainer item={item} addToCart={addToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemListComponent;
