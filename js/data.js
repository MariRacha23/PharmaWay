const companyData = {
  name: "PharmaWay",
  tagline: {
    ka: "შენი ხიდი ფარმაციაში",
    en: "Your bridge in pharmaceuticals",
    ru: "Ваш мост в фармацевтике",
  },
};

const medicinesList = [
  {
    id: 1,
    name: "HALOPRIL",
    category: {
      ka: "ნევროლოგია / ფსიქიატრია",
      en: "Neurology / Psychiatry",
      ru: "Неврология / Психиатрия",
    },
    activeIngredient: "Haloperidol",
    form: {
      ka: "საინექციო ხსნარი / ტაბლეტები",
      en: "Injection / Tablets",
      ru: "Раствор / Таблетки",
    },
    image: "assets/images/Галоприл Pharmaceutical Packaging Box.png",
    annotationFile: "assets/anotacia/halopril.pdf",
    description: {
      ka: "ანტიფსიქოზური საშუალება ნევროლოგიური და ფსიქიატრიული მიმართულებით.",
      en: "Antipsychotic agent in neurology and psychiatry.",
      ru: "Антипсихотическое средство.",
    },
  },
  {
    id: 2,
    name: "METPAMID",
    category: {
      ka: "გასტროენტეროლოგია",
      en: "Gastroenterology",
      ru: "Гастроэнтерология",
    },
    activeIngredient: "Metoclopramide HCl (10 mg/2 ml)",
    form: {
      ka: "საინექციო ხსნარი (ამპულები)",
      en: "Injection Solution (Ampoules)",
      ru: "Раствор для инъекций",
    },
    image: "assets/images/Metpamid Medicine Box Packshot.png",
    annotationFile: "assets/anotacia/metpamid.pdf",
    description: {
      ka: "საინექციო ხსნარი კუჭ-ნაწლავის ტრაქტის ფუნქციური დარღვევებისათვის.",
      en: "Injection solution for gastrointestinal functional disorders.",
      ru: "Раствор для инъекций при функциональных расстройствах ЖКТ.",
    },
  },
  {
    id: 3,
    name: "NALOXONE-ZN",
    category: {
      ka: "ანტიდოტები / გადაუდებელი",
      en: "Antidotes / Emergency",
      ru: "Антидоты / Неотложная помощь",
    },
    activeIngredient: "Naloxone (0.4 mg/ml)",
    form: {
      ka: "საინექციო ხსნარი (10 ამპულა 1მლ)",
      en: "Injection Solution (10 ampoules)",
      ru: "Раствор для инъекций (10 ампул)",
    },
    image: "assets/images/Налоксон-ЗН_10ampula-1ml.png",
    annotationFile: "assets/anotacia/naloxone.pdf",
    description: {
      ka: "ოპიოიდური რეცეპტორების ანტაგონისტი, გადაუდებელი დახმარების პრეპარატი.",
      en: "Opioid receptor antagonist, emergency medication.",
      ru: "Препарат скорой помощи, антагонист опиоидных рецепторов.",
    },
  },
  {
    id: 4,
    name: "Quet 100 mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Quetiapine (100 mg)",
    form: {
      ka: "აპკით დაფარული ტაბლეტები",
      en: "Film Coated Tablets",
      ru: "Таблетки, покрытые пленочной оболочкой",
    },
    image: "assets/images/Quet 100 mg Medicine Box.png",
    annotationFile: "assets/anotacia/quet100.pdf",
    description: {
      ka: "კვატიაპინის შემცველი პრეპარატი წამყვანი აფთიაქებისთვის.",
      en: "Quetiapine-based preparation for leading pharmacies.",
      ru: "Препарат на основе кветиапина.",
    },
  },
  {
    id: 5,
    name: "Quet 200 mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Quetiapine (200 mg)",
    form: {
      ka: "აპკით დაფარული ტაბლეტები",
      en: "Film Coated Tablets",
      ru: "Таблетки, покрытые пленочной оболочкой",
    },
    image: "assets/images/Quet 200 mg Medicine Box Product Photo.png",
    annotationFile: "assets/anotacia/quet200.pdf",
    description: {
      ka: "მაღალი დოზირების კვატიაპინის პრეპარატი დისტრიბუციისთვის.",
      en: "High-dosage quetiapine preparation for distribution.",
      ru: "Препарат кветиапина высокой дозировки.",
    },
  },
  {
    id: 6,
    name: "Salres 100 mcg/doz",
    category: { ka: "პულმონოლოგია", en: "Pulmonology", ru: "Пульмонология" },
    activeIngredient: "Salbutamol (100 mcg)",
    form: {
      ka: "საინჰალაციო აეროზოლი (200 დოზა)",
      en: "Inhalation Aerosol (200 Doses)",
      ru: "Аэрозоль для ингаляций",
    },
    image: "assets/images/Salres Inhalation Solution Medication Box.png",
    annotationFile: "assets/anotacia/salres.pdf",
    description: {
      ka: "სასუნთქი გზების სამკურნალო და პროფილაქტიკური საინჰალაციო საშუალება.",
      en: "Inhalation remedy for respiratory tract treatment and prevention.",
      ru: "Ингаляционное средство для дыхательных путей.",
    },
  },
  {
    id: 7,
    name: "Stilizan 5 mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Нევროлогия" },
    activeIngredient: "Trifluoperazin (5 mg)",
    form: {
      ka: "აპკით დაფარული ტაბლეტები",
      en: "Film Coated Tablets",
      ru: "Таблетки, покрытые пленочной оболочкой",
    },
    image: "assets/images/Stilizan 5 mg Pharmaceutical Box.png",
    annotationFile: "assets/anotacia/stilizan.pdf",
    description: {
      ka: "ნეიროპლეგიური და ანტიფსიქოზური საშუალება.",
      en: "Neuroplegic and antipsychotic agent.",
      ru: "Нейролептическое и антипсихотическое средство.",
    },
  },
];
