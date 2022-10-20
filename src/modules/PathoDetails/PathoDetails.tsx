import { Link, useNavigate, useParams } from 'react-router-dom';
import Hypertension from 'assets/data/Pathologies/hypertension';
import MaladieCoronarienne from 'assets/data/Pathologies/maladieCoronariennes';
import { useEffect, useState } from 'react';

export default function PathoDetails() {
  const navigate = useNavigate();
  const { type } = useParams();
  const disease = [Hypertension, MaladieCoronarienne].find(
    (el) => el.id.toString() === type,
  );
  const [selectedMenu, setSelectedMenu] = useState('general');

  useEffect(() => {
    if (disease === undefined) navigate('/pathologies');
  }, [disease, navigate]);

  const handleSelectMenu = (e: string) => {
    setSelectedMenu(e);
  };

  if (!disease) return <div>No disease found</div>;

  return (
    <main className="max-w-screen-2xl flex flex-col items-center">
      <p className="text-center">{disease.type}</p>
      <h1 className="text-center text-3xl">{disease.title}</h1>
      <section className="flex justify-around p-5 w-full">
        <aside className="w-4/12">
          <ul>
            <li className="font-semibold text-center">Menu</li>
            <li>
              <button type="button" onClick={() => handleSelectMenu('general')}>
                Généralités
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSelectMenu('general')}>
                Impact et risques bucco-dentaire
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSelectMenu('support')}>
                Prise en charge au cabinet
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleSelectMenu('buccal_effects')}>
                Précaution et actes Contre-indiqués
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSelectMenu('general')}>
                Situation clinique
              </button>
            </li>
          </ul>
        </aside>

        <article className="w-8/12">
          {Object.entries(disease[selectedMenu]).map(([key, value]) => (
            <ul key={`${key}`}>
              <li className="capitalize text-lg font-bold">{key}</li>
              {Array.isArray(value) && (
                <ul>
                  {value.map((el) => (
                    <li key={`${el}`}>
                      {Array.isArray(el) ? (
                        <ul>
                          {el.map((list) => (
                            <li key={`list2-${list}`}>{list}</li>
                          ))}
                        </ul>
                      ) : (
                        el
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </ul>
          ))}
        </article>
      </section>

      <Link to="/pathologies">Retour</Link>
    </main>
  );
}
