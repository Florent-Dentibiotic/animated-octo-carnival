import BxSearchAlt from 'assets/imgs/BxSearchAlt';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="grid place-content-center p-12 gap-12">
      <section className="max-w-lg">
        <h3 className="text-2xl font-light">
          Rechercher par pathologie ou par médicament :
        </h3>
        <div className="w-full relative">
          <input
            type="text"
            className="border-2 w-full rounded h-12 text-xl p-2 my-2"
            placeholder="Hypertension, Eliquis,..."
          />
          <BxSearchAlt
            height="2em"
            width="2em"
            className="absolute right-3 top-4 opacity-50"
          />
        </div>
      </section>
      <section className="max-w-lg">
        <h3 className="text-2xl font-light text-center">
          Accéder à la bibliothèque des :
        </h3>
        <form className="flex justify-center gap-12 m-4">
          <Link
            to="/pathologies"
            className="bg-dentibiotic-blue text-white py-2 px-4 rounded text-2xl font-light hover:scale-105 transition-all">
            Pathologies
          </Link>
          <Link
            to="/treatments"
            className="bg-dentibiotic-blue text-white py-2 px-4 rounded text-2xl font-light hover:scale-105 transition-all">
            Traitements
          </Link>
        </form>
      </section>
    </main>
  );
}
