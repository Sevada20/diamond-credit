export const addNewDocumentSelectOptions = [
  {
    id: 1,
    value: "passport",
    label: "Անձնագիր",
  },
  {
    id: 2,
    value: "socialCard",
    label: "Սոց․ քարտ",
  },
  {
    id: 3,
    value: "idCard",
    label: "Նույնականացման քարտ",
  },
  {
    id: 4,
    value: "employmentContract",
    label: "Աշխ․ պայմանագիր",
  },
  {
    id: 5,
    value: "applicationAdmission",
    label: "Ընդունման դիմում",
  },
  {
    id: 6,
    value: "exemptionApplication",
    label: "Ազատման դիմում",
  },
  {
    id: 7,
    value: "other",
    label: "Այլ",
  },
];

export const addDocumentInputs = {
  passport: [
    { id: 1, name: "number", label: "Համար" },
    { id: 2, name: "validityPeriod", label: "Վավերականություն" },
    { id: 3, name: "given", label: "Տրված" },
  ],
  socialCard: [{ id: 1, name: "number", label: "Համար" }],
  idCard: [
    { id: 1, name: "number", label: "Համար" },
    { id: 2, name: "validityPeriod", label: "Վավերականություն" },
    { id: 3, name: "given", label: "Տրված" },
  ],
  employmentContract: [
    { id: 1, name: "number", label: "Համար" },
    { id: 2, name: "date", label: "Կնքման ամսաթիվ" },
    { id: 3, name: "type", label: "Տեսակ" },
  ],
  applicationAdmission: [
    { id: 1, name: "number", label: "Համար" },
    { id: 2, name: "date", label: "Ամսաթիվ" },
  ],
  exemptionApplication: [
    { id: 1, name: "number", label: "Համար" },
    { id: 2, name: "date", label: "Ամսաթիվ" },
  ],
  other: [
    { id: 1, name: "name", label: "Անվանում" },
    { id: 2, name: "description", label: "Նկարագրություն" },
  ],
};
