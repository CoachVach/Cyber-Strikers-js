import React from 'react';
import CartasPorEquipo from '../Components/CartasPorEquipo';
import CustomNavbar from '../Components/Navbar';
import { useLocation } from 'react-router-dom';
  
export default function cartasPorEquipo(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const equipo = searchParams.get('equipo');
  return (
    <div>
      <CartasPorEquipo equipo= {equipo}/>
    </div>
  );
}