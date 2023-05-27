
import Inicio from './Components/Inicio';
import CustomNavbar from './Components/Navbar';
import TeamsComponent from './Components/TeamsComponent';

export default function Home() {
  return (
    <div>
      <CustomNavbar />
      <div className="container">
        <Inicio/>
        <TeamsComponent />
      </div>
    </div>
  );
}
