const pathologies = [
  {
    title: 'Maladies cardio-vasculaires',
    list: [
      { name: 'Hypertension artérielle', id: 100 },
      {
        name: 'Maladie coronarienne, angor et infarctus du myocarde',
        id: 101,
      },
      {
        name: 'Arythmies cardiaques, pacemaker et défibrillateur implantable',
        id: 102,
      },
      { name: 'Insuffisance cardiaque', id: 103 },
      { name: "Patient à risque d'endocardite infectieuse", id: 104 },
    ],
  },
  {
    title: 'Maladie respiratoire',
    list: [{ name: 'Asthme', id: 200 }],
  },
  {
    title: 'Maladies hépatiques et gastro-intestinales',
    list: [
      { name: 'Hépatites virales', id: 300 },
      { name: 'Insuffisance hépatique et cirrhose', id: 301 },
      { name: 'Maladies inflammatoires chroniques intestinales', id: 302 },
    ],
  },
  {
    title: 'Maladie rénale',
    list: [{ name: 'Insuffisance rénale chronique et dialyse', id: 400 }],
  },
  {
    title: "Troubles de l'hémostase",
    list: [
      { name: 'Trombopénie', id: 500 },
      {
        name: 'Hémophilie, maladie de Willebrand et autres déficits en facteur de coagulation',
        id: 501,
      },
    ],
  },
  {
    title: "Troubles de l'immunité",
    list: [{ name: 'VIH et SIDA', id: 600 }],
  },
  {
    title: 'Autres',
    list: [
      { name: 'Dépression', id: 700 },
      { name: 'Toxicomanie', id: 701 },
    ],
  },
];

export default pathologies;
