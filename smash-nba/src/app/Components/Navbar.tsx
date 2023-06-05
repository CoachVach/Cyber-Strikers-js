"use client";
import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import Carrito from './Carrito';
import Item from './Item';
import Link from 'next/link';
import '../StyleComponents/Navbar.css'

type CustomNavbarProps = {
  cartItems: Item[];
  removeFromCart: (item: Item) => void;
};

function CustomNavbar({ cartItems, removeFromCart }: CustomNavbarProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Nav className='item'>
        <img src="/images/logo.png"></img>
      </Nav>
      <Navbar.Brand className='item' as={Link} href="/">SMASH NBA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="item mr-auto">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="categoria-dropdown-toggle">
              Categorias
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} href="/cartasCategoria/Oro">
                Oro
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/cartasCategoria/Plata">
                Plata
              </Dropdown.Item>
              <Dropdown.Item as={Link} href="/cartasCategoria/Bronce">
                Bronce
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav className="item ml-auto">
          <Dropdown show={isCartOpen} onToggle={toggleCart}>
            <Dropdown.Toggle variant="success" id="cart-dropdown-toggle">
              Carrito
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Carrito cartItems={cartItems} removeFromCart={removeFromCart} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
