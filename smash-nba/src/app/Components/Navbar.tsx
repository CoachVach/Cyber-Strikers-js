"use client";
import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Carrito from './Carrito';
import Item from './Item'

type CustomNavbarProps = {
  cartItems: Item[];
  removeFromCart: (item: Item) => void;
};

function CustomNavbar({ cartItems,removeFromCart }: CustomNavbarProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cartas">Cartas</Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Dropdown show={isCartOpen} onToggle={toggleCart}>
              <Dropdown.Toggle variant="success" id="cart-dropdown-toggle">
                Cart
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={toggleCart}>Toggle Cart</Dropdown.Item>
                <Dropdown.Item>
                  {/* Render the Carrito component here */}
                  <Carrito cartItems={cartItems} removeFromCart={removeFromCart} />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
