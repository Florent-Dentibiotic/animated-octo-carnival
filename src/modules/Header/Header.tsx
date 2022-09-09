import { Link } from 'react-router-dom';
import IonSearchCircle from 'assets/imgs/IonSearchCircle';
import logo from '../../assets/imgs/Logo.png';

export default function Header() {
  return (
    <header className="flex justify-between p-4 items-center">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Dentibiotic's logo" className="h-12 w-12" />
        <h2 className="font-Lobster text-2xl text-dentibiotic-blue">
          Médicadent
        </h2>
      </Link>
      <Link
        to="/"
        className="text-dentibiotic-blue flex items-center hover:underline hover:scale-105 transition-all">
        rechercher <IonSearchCircle width="2em" height="2em" />
      </Link>
    </header>
  );
}
