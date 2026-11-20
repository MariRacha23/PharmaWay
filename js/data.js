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
    searchNames: [
      "halopril",
      "გალოპრილი",
      "galoprili",
      "haloperidol",
      "ჰალოპერიდოლი",
    ],
    category: {
      ka: "ნევროლოგია / ფსიქიატრია",
      en: "Neurology / Psychiatry",
      ru: "Неврология / Психиатрия",
    },
    activeIngredient: "Haloperidol",
    form: {
      ka: "5მგ/მლ 1მლ ი.მ. საინექციო ხსნარი N10 ამპულა",
      en: "5mg/ml 1ml Injection Solution N10",
      ru: "5мг/мл 1мл Раствор для инъекций N10",
    },
    country: { ka: "უკრაინა", en: "Ukraine", ru: "Украина" },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Галоприл Pharmaceutical Packaging Box.png",
    annotationFile: "assets/anotacia/halopril.pdf",
    description: {
      ka: "შიზოფრენია: სიმპტომების მკურნალობა და რეციდივების პროფილაქტიკა. სხვა ფსიქოზები, განსაკუთრებით – პარანოიდული. მანია და ჰიპომანია. ფსიქიური და ქცევითი პრობლემები, როგორებიცაა აგრესია, ჰიპერაქტიურობა და თვითდაზიანებები.",
      en: "Schizophrenia: treatment of symptoms and prevention of relapses. Other psychoses, especially paranoid. Mania and hypomania. Mental and behavioral problems such as aggression, hyperactivity, and self-harm.",
      ru: "Шизофрения: лечение симптомов и профилактика рецидивов. Другие психозы, особенно параноидные. Мания и гипомания. Психические и поведенческие проблемы.",
    },
    pharmacies: [
      // { name: "ფარმადეპო", address: "თბილისი, ჭავჭავაძის გამზ. 34" },
      // { name: "ავერსი", address: "თბილისი, ვაჟა-ფშაველას გამზ. 25" },
      // { name: "ჯიპისი", address: "თბილისი, პეკინის გამზ. 12" }
    ],
  },
  {
    id: 2,
    name: "HALOPRIL FORTE",
    searchNames: [
      "halopril forte",
      "გალოპრილ ფორტე",
      "galopril forte",
      "haloperidol",
      "ჰალოპერიდოლი",
    ],
    category: {
      ka: "ნევროლოგია / ფსიქიატრია",
      en: "Neurology / Psychiatry",
      ru: "Неврология / Психиатрия",
    },
    activeIngredient: "Haloperidol",
    form: {
      ka: "5მგ ტაბლეტი N50",
      en: "5mg Tablet N50",
      ru: "5мг Таблетки N50",
    },
    country: { ka: "უკრაინა", en: "Ukraine", ru: "Украина" },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Галоприл Форте.png",
    annotationFile: "assets/anotacia/Halopril forte.pdf",
    description: {
      ka: "შიზოფრენია: სიმპტომების მკურნალობა და რეციდივების პროფილაქტიკა. სხვა ფსიქოზები, განსაკუთრებით – პარანოიდული. მანია და ჰიპომანია. ფსიქიური და ქცევითი პრობლემები, როგორებიცაა აგრესია, ჰიპერაქტიურობა, თვითდაზიანებები, თავშეუკავებელი სლოკინი.",
      en: "Schizophrenia: treatment of symptoms and prevention of relapses. Other psychoses, mania, and hypomania. Behavioral problems such as aggression, hyperactivity, self-harm, and intractable hiccups.",
      ru: "Шизофрения, психозы, мания и гипомания. Агрессия, гиперактивоность, самоповреждения, неукротимая икота.",
    },
    pharmacies: [
      // { name: "ავერსი", address: "თბილისი, რუსთაველის გამზ. 18" },
      // { name: "პსპ", address: "თბილისი, ცინცაძის ქ. 2" }
    ],
  },
  {
    id: 3,
    name: "METPAMID",
    searchNames: [
      "metpamid",
      "მეტპამიდი",
      "metpamidi",
      "metoclopramide",
      "მეტოკლოპრამიდი",
    ],
    category: {
      ka: "გასტროენტეროლოგია",
      en: "Gastroenterology",
      ru: "Гастроэнтерология",
    },
    activeIngredient: "Metoclopramide Hydrochloride",
    form: {
      ka: "10 მგ / 2 მლ საინექციო ხსნარი N50 ამპულა",
      en: "10 mg / 2 ml Injection Solution N50",
      ru: "10 мг / 2 мл Раствор для инъекций N50",
    },
    country: {
      ka: "თურქეთის რესპუბლიკა",
      en: "Republic of Turkey",
      ru: "Турецкая Республика",
    },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Metpamid Medicine Box Packshot.png",
    annotationFile: "assets/anotacia/metpamid.pdf",
    description: {
      ka: "გასტროინტესტინური ტრაქტის ფუნქციური დარღვევების სამკურნალო პრეპარატი, პროპულსივები.",
      en: "Drug for the treatment of functional disorders of the gastrointestinal tract, prokinetics.",
      ru: "Препарат для лечения функциональных нарушений желудочно-кишечного тракта, прокинетики.",
    },
    pharmacies: [
      // { name: "ჯიპისი", address: "თბილისი, გლდანი, მე-3 მ/რ" },
      // { name: "ფარმადეპო", address: "თბილისი, საბურთალოს ქ. 31" }
    ],
  },
  {
    id: 4,
    name: "NALOXONE-ZN",
    searchNames: [
      "naloxone",
      "naloxone-zn",
      "ნალოქსონი",
      "naloksoni",
      "ნალოქსონ-ზნ",
    ],
    category: {
      ka: "ანტიდოტები / გადაუდებელი",
      en: "Antidotes / Emergency",
      ru: "Антидоты / Неотложная помощь",
    },
    activeIngredient: "Naloxone",
    form: {
      ka: "0,4მგ/მლ საინექციო ხსნარი N10 ამპულა",
      en: "0.4mg/ml Injection Solution N10",
      ru: "0,4мг/мл Раствор для инъекций N10",
    },
    country: { ka: "უკრაინა", en: "Ukraine", ru: "Украина" },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Налоксон-ЗН_10ampula-1ml.png",
    annotationFile: "assets/anotacia/naloxone.pdf",
    description: {
      ka: "ოპიატების ჭარბი დოზა. გამოიყენება სასუნთქი ცენტრის ოპიატებით გამოწვეული დათრგუნვის თავიდან ასაცილებლად.",
      en: "Opioid overdose. Used to prevent opioid-induced respiratory depression.",
      ru: "Передозировка опиатов. Применяется для предотвращения угнетения дыхательного центра.",
    },
    pharmacies: [
      // { name: "პსპ", address: "თბილისი, აღმაშენებლის გამზ. 120" }
    ],
  },
  {
    id: 5,
    name: "QUET 100 mg",
    searchNames: [
      "quet",
      "quet 100",
      "კუეტი",
      "kueti",
      "quetiapine",
      "კუეტიაპინი",
    ],
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Quetiapine",
    form: {
      ka: "100 მგ აპკით შემოგარსული ტაბლეტი N30",
      en: "100 mg Film Coated Tablets N30",
      ru: "100 мг Таблетки, покрытые пленочной оболочкой N30",
    },
    country: {
      ka: "თურქეთის რესპუბლიკა",
      en: "Republic of Turkey",
      ru: "Турецкая Республика",
    },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Quet 100 mg Medicine Box.png",
    annotationFile: "assets/anotacia/quet100.pdf",
    description: {
      ka: "ბიპოლარული დეპრესია და დიდი დეპრესიული აშლილობის დიდი დეპრესიული ეპიზოდი, მანია, შიზოფრენია.",
      en: "Bipolar depression and major depressive episode of major depressive disorder, mania, schizophrenia.",
      ru: "Биполярная депрессия и большой депрессивный эпизод при большом депрессивном расстройстве, мания, шизофрения.",
    },
    pharmacies: [
      // { name: "ავერსი", address: "თბილისი, ყაზბეგის გამზ. 14" },
      // { name: "ფარმადეპო", address: "თბილისი, მარჯანიშვილის ქ. 5" }
    ],
  },
  {
    id: 6,
    name: "QUET 200 mg",
    searchNames: [
      "quet",
      "quet 200",
      "კუეტი",
      "kueti",
      "quetiapine",
      "კუეტიაპინი",
    ],
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Невროлогия" },
    activeIngredient: "Quetiapine",
    form: {
      ka: "200 მგ აპკით შემოგარსული ტაბლეტი N30",
      en: "200 mg Film Coated Tablets N30",
      ru: "200 мг Таблетки, покрытые пленочной оболочкой N30",
    },
    country: {
      ka: "თურქეთის რესპუბლიკა",
      en: "Republic of Turkey",
      ru: "Турецкая Республика",
    },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Quet 200 mg Medicine Box Product Photo.png",
    annotationFile: "assets/anotacia/quet200.pdf",
    description: {
      ka: "ბიპოლარული დეპრესია და დიდი დეპრესიული აშლილობის დიდი დეპრესიული ეპიზოდი, მანია, შიზოფრენია.",
      en: "Bipolar depression and major depressive episode of major depressive disorder, mania, schizophrenia.",
      ru: "Биполярная депрессия и большой депрессивный эпизод при большом депрессивном расстройстве, мания, шизофрения.",
    },
    pharmacies: [
      // { name: "ჯიპისი", address: "თბილისი, ვაჟა-ფშაველას კვ. 3" },
      // { name: "პსპ", address: "თბილისი, გლდანი, ხიზანიშვილის ქ. 1" }
    ],
  },
  {
    id: 7,
    name: "SALRES 100 mcg/dose",
    searchNames: ["salres", "სალრესი", "salresi", "salbutamol", "სალბუტამოლი"],
    category: { ka: "პულმონოლოგია", en: "Pulmonology", ru: "Пульмонология" },
    activeIngredient: "Salbutamol",
    form: {
      ka: "100მკგ/დოზა 200 დოზა საინჰალაციო აეროზოლი ხსნარი ფლაკონში",
      en: "100mcg/dose 200 doses Inhalation Aerosol",
      ru: "100мккг/доза 200 доз Аэрозоль для ингаляций",
    },
    country: {
      ka: "თურქეთის რესპუბლიკა",
      en: "Republic of Turkey",
      ru: "Турецкая Республика",
    },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Salres Inhalation Solution Medication Box.png",
    annotationFile: "assets/anotacia/salres.pdf",
    description: {
      ka: "მიეკუთვნება სწრაფად მოქმედ ბრონქოდილატატორებს (ბრონქების გამაფართოვებელ) და ხელს უწყობს ფილტვებში სასუნთქი გზების გახსნას.",
      en: "Belongs to fast-acting bronchodilators and helps open airways in the lungs.",
      ru: "Относится к быстродействующим бронходилататорам и помогает открыть дыхательные пути в легких.",
    },
    pharmacies: [
      // { name: "ფარმადეპო", address: "თბილისი, აკაკი წერეთლის გამზ. 116" },
      // { name: "ავერსი", address: "თბილისი, გურამიშვილის გამზ. 23" }
    ],
  },
  {
    id: 8,
    name: "STILIZAN 5 mg",
    searchNames: [
      "stilizan",
      "სტილიზანი",
      "stilizani",
      "trifluoperazine",
      "ტრიფლუოპერაზინი",
    ],
    category: { ka: "ნევროლოგია", en: "Neurology", ru: "Неврология" },
    activeIngredient: "Trifluoperazine",
    form: {
      ka: "5 მგ გარსით დაფარული ტაბლეტი N30",
      en: "5 mg Film Coated Tablets N30",
      ru: "5 мг Таблетки, покрытые оболочкой N30",
    },
    country: {
      ka: "თურქეთის რესპუბლიკა",
      en: "Republic of Turkey",
      ru: "Турецкая Республика",
    },
    prescriptionType: {
      ka: "II ჯგუფი რეცეპტული",
      en: "Prescription Only (Group II)",
      ru: "Рецептурный (Группа II)",
    },
    image: "assets/images/Stilizan 5 mg Pharmaceutical Box.png",
    annotationFile: "assets/anotacia/stilizan.pdf",
    description: {
      ka: "მიეკუთვნება ანტიფსიქოზურ მედიკამენტებს. ის გავლენას ახდენს ტვინის გარკვეული უჯრედების აქტივობაზე დოფამინის, ტვინში არსებული ბუნებრივი ქიმიური ნივთიერების, ეფექტის შემცირებით.",
      en: "Belongs to antipsychotic medications. It affects the activity of certain brain cells by reducing the effect of dopamine.",
      ru: "Относится к антипсихотическим препаратам. Влияет на активность определенных клеток мозга за счет снижения эффекта дофамина.",
    },
    pharmacies: [
      // { name: "ჯიპისი", address: "თბილისი, რუსთაველის გამზ. 32" },
      // { name: "პსპ", address: "თბილისი, პეკინის გამზ. 27" }
    ],
  },
];
