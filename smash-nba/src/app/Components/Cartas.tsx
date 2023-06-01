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

const countryCode = {
  'Guinea': 'GN',
  'Turkey': 'TR',
  'Nigeria': 'NG',
  'Switzerland': 'CH',
  'New Zealand': 'NZ',
  'Italy': 'IT',
  'Cameroon': 'CM',
  'Czech Republic': 'CZ',
  'USA': 'US',
  'St. Lucia': 'LC',
  'United Kingdom': 'UK',
  'Montenegro': 'ME',
  'Brazil': 'BR',
  'Austria': 'AT',
  'Dominican Republic': 'DO',
  'Australia': 'AU',
  'Germany': 'DE',
  'Serbia': 'RS',
  'Macedonia': 'MK',
  'Canada': 'CA',
  'Angola': 'AO',
  'Portugal': 'PT',
  'Finland': 'FI',
  'Ukraine': 'UA',
  'Lithuania': 'LT',
  'Spain': 'ES',
  'Croatia': 'HR',
  'Latvia': 'LV',
  'England': 'GB',
  'Sudan': 'SD',
  'Congo': 'CG',
  'Slovenia': 'SI',
  'Greece': 'GR',
  'Bahamas': 'BS',
  'Georgia': 'GE',
  'Belgium': 'BE',
  'France': 'FR',
  'Israel': 'IL',
  'Senegal': 'SN',
  'Yugoslavia': 'YU',
  'Japan': 'JP',
  'Bosnia and Herzegovina': 'BA',
  'Jamaica': 'JM',
  'DR Congo': 'CD',
};


const ItemListComponent: React.FC<ItemProps> = ({apiCall,name}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const getCountryFlagUrl = (country: string) => {
    const countryShortCode = countryCode[country]
    return `https://flagsapi.com/${countryShortCode}/shiny/64.png`;
  };

  // Cargar elementos del carrito desde localStorage al cargar la página
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
      <Row xs={1} sm={2} md={3} lg={3} xl={3} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <CartaContainer item={item} addToCart={addToCart} imgPais={getCountryFlagUrl(item.jugador.nacionalidad)} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ItemListComponent;
