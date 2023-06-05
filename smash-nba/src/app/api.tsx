"use client";
import axios from 'axios';
export const dataEquipos = async () => {
  try {
    const response = await axios.get('https://cyber-strikers-coachvach.vercel.app/rest/equipos');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const dataCartas = async () => {
  try {
    const response = await axios.get('https://cyber-strikers-coachvach.vercel.app/rest/cartaConJugadorConEquipo');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

  export const dataCartasPorEquipo = async (nombreEquipo:String|null) => {
    try {
      const response = await axios.get('https://cyber-strikers-coachvach.vercel.app/rest/cartasPorEquipoPorNombre/'+nombreEquipo);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  export const dataPorCategoria = async (categoria:String|null, page: number, tam_page: number) =>{
    try {
      const response = await axios.get('https://cyber-strikers-coachvach.vercel.app/rest/cartasPorCategoria/'+categoria+'?página='+page+'&tamaño_página='+tam_page);
      return response.data;    
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    } 
  }