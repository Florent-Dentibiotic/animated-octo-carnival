import { useState } from 'react';
import { Link } from 'react-router-dom';
import pathologies from '../../assets/data/Pathologies/pathologies';

interface DiseaseProps {
  title: string;
  list: { name: string; id: number }[];
}

export default function Pathologies() {
  const [pathoSelected, setPathoSelected] = useState('');
  const [diseaseList, setDiseaseList] = useState([{ name: '', id: 0 }]);

  const handleSelectPatho = (disease: DiseaseProps) => {
    setPathoSelected(disease.title);
    setDiseaseList(disease.list);
  };

  return (
    <main>
      <h2 className="text-center text-4xl font-semibold text-dentibiotic-blue">
        Pathologies
      </h2>
      <section
        className={`grid grid-cols-1 md:grid-cols-2 mx-auto max-w-2xl gap-10 p-5 mt-10 ${
          pathoSelected !== '' ? 'hidden' : ''
        }`}>
        {pathologies.map((disease) => (
          <button
            key={`button-${disease.title}`}
            type="button"
            onClick={() => handleSelectPatho(disease)}
            className="text-center text-lg bg-dentibiotic-blue-200 w-full h-16 grid place-content-center hover:scale-105 transition">
            {disease.title}
          </button>
        ))}
        <Link to="/" className="text-center md:col-span-2">
          Retour
        </Link>
      </section>
      {pathoSelected !== '' && (
        <section className="mx-auto max-w-2xl p-5 mt-10">
          <h2 className="text-center text-lg bg-dentibiotic-blue-200 w-1/2 mx-auto h-16 grid place-content-center">
            {pathoSelected}
          </h2>
          <article className="flex flex-col mx-auto max-w-2xl gap-10 p-5 mt-10">
            {diseaseList.map((el: any) => (
              <Link to={`${el.id}`} key={`patho-${el.id}`}>
                {el.name}
              </Link>
            ))}
            <button type="button" onClick={() => setPathoSelected('')}>
              Revenir
            </button>
          </article>
        </section>
      )}
    </main>
  );
}
