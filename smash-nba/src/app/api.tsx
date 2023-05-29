import axios from 'axios';

export const dataEquipos = async () => {
  try {
    const response = await axios.get('https://cyber-strikers-coachvach.vercel.app/rest/equipos');
    console.log("HOLA")
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const dataCartas = async () => {
  try {
    const response = await axios.get('https://cyber-strikers-coachvach.vercel.app/rest/cartaConJugadorConEquipo');
    console.log("HOLA")
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};