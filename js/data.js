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
    name: "FLUPHENAZINE",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Fluphenazine Decanoate (25 mg/ml)",
    form: {
      ka: "საინექციო ხსნარი (IM)",
      en: "Injection for IM use",
      ru: "Раствор для инъекций",
    },
    image: "assets/images/FLUPHENAZINE.jpg",
    description: {
      ka: "ხანგრძლივი მოქმედების საინექციო პრეპარატი ინტრამუსკულარული გამოყენებისთვის.",
      en: "Long-acting injection preparation for intramuscular use.",
      ru: "Препарат пролонгированного действия.",
    },
    indications: {
      ka: "ინფორმაცია მწარმოებლისგან. გამოიყენება მკაცრი სამედიცინო ჩვენებით.",
      en: "Information from manufacturer. Use under strict medical indications.",
      ru: "Информация от производителя.",
    },
  },
  {
    id: 2,
    name: "Keglad XR 200mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Quetiapine (200 mg)",
    form: {
      ka: "პროლონგირებული ტაბლეტები",
      en: "Prolonged release tablets",
      ru: "Таблетки пролонгированного действия",
    },
    image: "assets/images/Keglad XR 200mg.png",
    description: {
      ka: "გახანგრძლივებული გამოთავისუფლების ტაბლეტები სტაბილური თერაპიული ეფექტისთვის.",
      en: "Prolonged-release tablets for steady therapeutic effect.",
      ru: "Таблетки пролонгированного действия.",
    },
    indications: {
      ka: "დოზირება და მიღების წესი განისაზღვრება ექიმის მიერ.",
      en: "Dosage and administration are determined by a physician.",
      ru: "Дозировка определяется врачом.",
    },
  },
  {
    id: 3,
    name: "Metpamid 10 mg/2 ml",
    category: {
      ka: "გასტროენტეროლოგია",
      en: "Gastroenterology",
      ru: "Гастроэнтерология",
    },
    activeIngredient: "Metoclopramide HCl",
    form: {
      ka: "საინექციო ხსნარი (ამპულები)",
      en: "Injection Solution (Ampoules)",
      ru: "Раствор для инъекций",
    },
    image: "assets/images/Metpamid Medicine Box Packshot.png",
    description: {
      ka: "საინექციო ხსნარი კუჭ-ნაწლავის ტრაქტის ფუნქციური დარღვევებისათვის.",
      en: "Injection solution for gastrointestinal functional disorders.",
      ru: "Раствор для инъекций при функциональных расстройствах ЖКТ.",
    },
    indications: {
      ka: "იხილეთ ანოტაცია შეფუთვაზე. გამოიყენება ექიმის დანიშნულებით.",
      en: "See package leaflet. Use as prescribed by a physician.",
      ru: "См. инструкцию на упаковке.",
    },
  },
  {
    id: 4,
    name: "OLZAP 10mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Olanzapine (10 mg)",
    form: { ka: "ტაბლეტები N30", en: "Tablets 30 pcs", ru: "Таблетки N30" },
    image: "assets/images/OLZAP-10mg.png",
    description: {
      ka: "მაღალი ხარისხის ფარმაცევტული პროდუქტი დისტრიბუციისთვის.",
      en: "High quality pharmaceutical product for distribution.",
      ru: "Высококачественный фармацевтический продукт.",
    },
    indications: {
      ka: "მიიღება ექიმის მკაცრი მეთვალყურეობის ქვეშ.",
      en: "To be taken under strict medical supervision.",
      ru: "Принимать под строгим медицинским наблюдением.",
    },
  },
  {
    id: 5,
    name: "Quet 100 mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Quetiapine (100 mg)",
    form: {
      ka: "აპკით დაფარული ტაბლეტები",
      en: "Film Coated Tablets",
      ru: "Таблетки, покрытые пленочной оболочкой",
    },
    image: "assets/images/Quet 100 mg Medicine Box.png",
    description: {
      ka: "კვატიაპინის შემცველი პრეპარატი წამყვანი აფთიაქებისთვის.",
      en: "Quetiapine-based preparation for leading pharmacies.",
      ru: "Препарат на основе кветиапина.",
    },
    indications: {
      ka: "დეტალური ინსტრუქცია იხილეთ მწარმოებლის დოკუმენტაციაში.",
      en: "See manufacturer documentation for detailed instructions.",
      ru: "Подробные инструкции смотрите в документации.",
    },
  },
  {
    id: 6,
    name: "Quet 200 mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Невროлогия" },
    activeIngredient: "Quetiapine (200 mg)",
    form: {
      ka: "აპკით დაფარული ტაბლეტები",
      en: "Film Coated Tablets",
      ru: "Таблетки, покрытые пленочной оболочкой",
    },
    image: "assets/images/Quet 200 mg Medicine Box Product Photo.png",
    description: {
      ka: "მაღალი დოზირების კვატიაპინის პრეპარატი დისტრიბუციისთვის.",
      en: "High-dosage quetiapine preparation for distribution.",
      ru: "Препарат кветиапина высокой дозировки.",
    },
    indications: {
      ka: "მიიღება ექიმის დანიშნულებით.",
      en: "To be taken as prescribed by a physician.",
      ru: "Принимать по назначению врача.",
    },
  },
  {
    id: 7,
    name: "Salres 100 mcg/doz",
    category: { ka: "პულმონოლოგია", en: "Pulmonology", ru: "Пульмонология" },
    activeIngredient: "Salbutamol (100 mcg)",
    form: {
      ka: "საინჰალაციო აეროზოლი (200 დოზა)",
      en: "Inhalation Aerosol (200 Doses)",
      ru: "Аэрозоль для ингаляций",
    },
    image: "assets/images/Salres Inhalation Solution Medication Box.png",
    description: {
      ka: "სასუნთქი გზების სამკურნალო და პროფილაქტიკური საინჰალაციო საშუალება.",
      en: "Inhalation remedy for respiratory tract treatment and prevention.",
      ru: "Ингаляционное средство для дыхательных путей.",
    },
    indications: {
      ka: "ინსტრუქცია და გამოყენების წესი იხილეთ შეფუთვაზე.",
      en: "See package for instructions and usage rules.",
      ru: "Инструкцию по применению см. на упаковке.",
    },
  },
  {
    id: 8,
    name: "SEDAREX 2mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Невროлогия" },
    activeIngredient: "Sedative Active (2 mg)",
    form: { ka: "ტაბლეტები N30", en: "Tablets 30 pcs", ru: "Таблетки N30" },
    image: "assets/images/SEDAREX-2mg.jpg",
    description: {
      ka: "სედაციური და დამამშვიდებელი ფარმაცევტული პროდუქტი.",
      en: "Sedative and calming pharmaceutical product.",
      ru: "Седативный фармацевтический продукт.",
    },
    indications: {
      ka: "გამოიყენება ექიმის რეკომენდაციით.",
      en: "Used upon physician recommendation.",
      ru: "Применяется по рекомендации врача.",
    },
  },
  {
    id: 9,
    name: "Stilizan 5 mg",
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Невროлогия" },
    activeIngredient: "Trifluoperazin (5 mg)",
    form: {
      ka: "აპკით დაფარული ტაბლეტები",
      en: "Film Coated Tablets",
      ru: "Таблетки, покрытые пленочной оболочкой",
    },
    image: "assets/images/Stilizan 5 mg Pharmaceutical Box.png",
    description: {
      ka: "ნეიროპლეგიური და ანტიფსიქოზური საშუალება.",
      en: "Neuroplegic and antipsychotic agent.",
      ru: "Нейролептическое и антипсихотическое средство.",
    },
    indications: {
      ka: "მკაცრი რეცეპტული და სამედიცინო კონტროლის ქვეშ.",
      en: "Under strict prescription and medical control.",
      ru: "Под строгим медицинским контролем.",
    },
  },
  {
    id: 10,
    name: "Галоприл",
    category: {
      ka: "ნევროლოგია / ფსიქიატრია",
      en: "Neurology / Psychiatry",
      ru: "Неврология / Психиатрия",
    },
    activeIngredient: "Haloperidol (5 mg/ml)",
    form: {
      ka: "საინექციო ხსნარი (10 ამპულა 1მლ)",
      en: "Injection Solution (10 ampoules)",
      ru: "Раствор для инъекций (10 ампул)",
    },
    image: "assets/images/Галоприл Pharmaceutical Packaging Box.png",
    description: {
      ka: "ანტიფსიქოზური პრეპარატი საინექციო ფორმით.",
      en: "Antipsychotic preparation in injection form.",
      ru: "Антипсихотический препарат в форме инъекций.",
    },
    indications: {
      ka: "დეტალური ინსტრუქცია იხილეთ თანდართულ ფურცელ-ჩანართში.",
      en: "See attached package leaflet for detailed instructions.",
      ru: "Подробную инструкцию смотрите в листовке-вкладыше.",
    },
  },
  {
    id: 11,
    name: "Галоприл Форте",
    category: {
      ka: "ნევროლოგია / ფსიქიატრია",
      en: "Neurology / Psychiatry",
      ru: "Неврология / Психиатрия",
    },
    activeIngredient: "Haloperidol (5 mg)",
    form: { ka: "ტაბლეტები N50", en: "Tablets 50 pcs", ru: "Таблетки N50" },
    image: "assets/images/Галоприл Форте_ чистая упаковка лекарства.png",
    description: {
      ka: "ჰალოპერიდოლის ფორტე ტაბლეტები დისტრიბუციისთვის.",
      en: "Haloperidol Forte tablets for distribution.",
      ru: "Таблетки галоперидол форте для дистрибуции.",
    },
    indications: {
      ka: "მიიღება მხოლოდ ექიმის დანიშნულებით.",
      en: "To be taken strictly as prescribed by a physician.",
      ru: "Принимать строго по назначению врача.",
    },
  },
  {
    id: 12,
    name: "Налоксон-ЗН",
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
    description: {
      ka: "ოპიოიდური რეცეპტორების ანტაგონისტი, გადაუდებელი დახმარების პრეპარატი.",
      en: "Opioid receptor antagonist, emergency medication.",
      ru: "Препарат скорой помощи, антагонист опиоидных рецепторов.",
    },
    indications: {
      ka: "გამოიყენება კლინიკურ პირობებში და სპეციალური პროტოკოლით.",
      en: "Used in clinical settings under special protocol.",
      ru: "Применяется в клинических условиях по специальному протоколу.",
    },
  },
];
