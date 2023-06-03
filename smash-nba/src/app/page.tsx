"use client";
import Inicio from './Components/Inicio';
import TeamsComponent from './Components/TeamsComponent';
import CustomNavbar from './Components/Navbar';
import Item from './Components/Item';
import { useEffect, useState } from 'react';


export default function Home() {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Guardar elementos del carrito en localStorage al actualizar el carrito
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (item: Item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };
  return (
    
    <div>
      <div>
        <CustomNavbar cartItems={cartItems} removeFromCart={removeFromCart} />
        <Inicio/>
        <TeamsComponent/>
      </div>
    </div>
  );
}
