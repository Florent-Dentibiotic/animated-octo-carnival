import { Link } from 'react-router-dom';

const treatments = [
  'Anti-agrégant plaquetaires',
  'Anticoagulants AVK',
  'Biphosphonates',
  'Anticoagulants non AVK',
  'Radiothérapie cervico-faciale',
  'Chimiothérapie',
  'Corticothérapie au long cours',
  'Immunosuppresseurs',
];

export default function Treatments() {
  return (
    <main>
      <h2 className="text-center text-4xl font-semibold text-dentibiotic-blue">
        Traitements
      </h2>
      <section className="grid grid-cols-2 mx-auto max-w-2xl gap-10 p-5 mt-10">
        {treatments.map((treatment) => (
          <Link
            to="treatment"
            className="text-center text-lg bg-dentibiotic-blue-200 w-full h-16 grid place-content-center hover:scale-105 transition">
            {treatment}
          </Link>
        ))}
      </section>
    </main>
  );
}
