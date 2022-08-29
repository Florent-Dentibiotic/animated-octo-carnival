import { Link } from 'react-router-dom';

const diseases = [
  'Maladies cardio-vasculaires',
  'Maladies respiratoires',
  'Maladies endocriniennes',
  'Maladies hépatiques et gastro-intestinales',
  'Dépression',
  'Maladies rénales',
  'Maladies neurologiques',
  "Troubles de l'hémostase",
  "Troubles de l'immunité",
  'Toxicomanie',
];

export default function Pathologies() {
  return (
    <main>
      <h2 className="text-center text-4xl font-semibold text-dentibiotic-blue">
        Pathologies
      </h2>
      <section className="grid grid-cols-2 mx-auto max-w-2xl gap-10 p-5 mt-10">
        {diseases.map((disease) => (
          <Link
            to="mdiCardio"
            className="text-center text-lg bg-dentibiotic-blue-200 w-full h-16 grid place-content-center hover:scale-105 transition">
            {disease}
          </Link>
        ))}
      </section>
    </main>
  );
}
