const hypertension = {
  title: 'Hypertension artérielle',
  general: {
    definition: [
      "L'Hypertension Artérielle (HTA) se définit par une Pression Artérielle Systolique (PAS) ≥ 140 mmHg et/ou une Pression Artérielle Diastolique (PAD) ≥ 90 mmHg.",
      "L'HTA est un des principaux facteurs de risque cardio-vasculaire.",
    ],
    classification: '',
  },
  support: {
    medical: [
      'Monothérapie ou association de plusieurs antihypertenseurs :',
      [
        "• Inhibiteurs de l'Enzyme de Conversion (IEC) : énalapril (Renitec®), captopril (Lopril®), ramipril (Triatec®), périndopril (Coversyl®)...",
        "• Antagonistes de l'angiotensine II : losartan (Cozaar®), valsartan (Tareg®), candésartan cilexetil (Atacand®), irbésartan (Aprovel®)...",
        '• Inhibiteurs calciques : diltiazem (Tildiem®), nifédipine (Adalate®), amlodipine (Amlor®), vérapamil (Isoptine®), nicardipine (Loxen®)...',
        '• Bêtabloquants : acébutolol (Sectral®), aténolol (Ténormine®), propranolol (Avlocardyl®) ...',
        '• Diurétiques : indapamide (Fludex®), spironolactone (Aldactone®), hydrochlorothiazide (Esidrex®)...',
      ],
    ],
    non_medical: [
      '• Correction des facteurs de risque cardiovasculaire associés',
      "• Modération de la consommation d'alcool",
      '• Restriction sodée',
      '• Réduction pondérale • Exercice physique',
    ],
  },
  buccal_effects: {
    disease: [
      "L'hypertension artérielle n'a pas de répercussion directe sur la cavité buccale",
    ],
    treatments: [
      "• Hyposialie - Xérostomie (toutes les classes d'antihypertenseurs)",
      '• Réactions lichénoïdes (IEC, diurétiques notamment le furosémide)',
      '• Hyperplasie gingivale (inhibiteurs calciques notamment la nifédipine)',
      '• Altération du goût (certains IEC)',
      "• Toxidermies ulcéreuses : ulcérations ou érosions de la muqueuse buccale (certains antagonistes de l'angiotensine II)",
    ],
  },
};

export default hypertension;
