"use client";
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CartaContainer from './CartaContainer';
import Item from './Item'
import CustomNavbar from './Navbar';

type ItemProps = {
  apiCall: (name:string) => Promise<Item[]>;
  name: string;
};

const ItemListComponent: React.FC<ItemProps> = ({apiCall,name}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<Item[]>([]);
  console.log("HOLA");
  console.log(name);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await apiCall(name);
        setItems(apiData);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  const addToCart = (item: Item, quantity: number) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (!existingItem) {
      item.cant_producto = quantity;
      setCartItems((prevItems) => [...prevItems, item]);
      alert("Carta añadida al Carrito (=")
    }else{
      alert("Ya tienes esta carta en el Carrito.")
    }
    
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
