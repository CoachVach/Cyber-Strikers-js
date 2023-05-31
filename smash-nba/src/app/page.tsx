"use client";
import Inicio from './Components/Inicio';
import TeamsComponent from './Components/TeamsComponent';

export default function Home() {
  return (
    <div>
      <div className="container">
        <Inicio/>
        <TeamsComponent/>
      </div>
    </div>
  );
}
