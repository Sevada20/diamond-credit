export const filtersFields = {
  filterInputs: [
    {
      id: 1,
      name: "name",
      label: "Անուն",
    },
    {
      id: 2,
      name: "surname",
      label: "Ազգանուն",
    },
    {
      id: 3,
      name: "patronymic",
      label: "Հայրանուն",
    },
    {
      id: 4,
      name: "passport",
      label: "Անձնագիր",
    },
    {
      id: 5,
      name: "phone",
      label: "Հեռախոս",
    },
    {
      id: 6,
      name: "collateralType",
      label: "Գրավի տեսակ",
    },
    {
      id: 7,
      name: "decision",
      label: "Որոշում",
    },
  ],

  filterInputsSizeMoney: [
    {
      id: 1,
      name: "providedFrom",
      label: "Տրամադրված",
      subLabel: "Սկսած",
      placeholder: "10000",
    },
    {
      id: 2,
      name: "providedTo",
      subLabel: "Մինչև",
      placeholder: "1000000",
    },
    {
      id: 3,
      name: "evaluatedFrom",
      label: "Գնահատված",
      subLabel: "Սկսած",
      placeholder: "10000",
    },
    {
      id: 4,
      name: "evaluatedTo",
      subLabel: "Մինչև",
      placeholder: "1000000",
    },
  ],

  statusSelectorOptions: [
    {
      id: 1,
      option: "Ընդհանուր",
    },
    {
      id: 2,
      option: "Ակտիվ",
    },
    {
      id: 3,
      option: "Փակված",
    },
    {
      id: 4,
      option: "Իրացված",
    },
    {
      id: 5,
      option: "Ժամկետանց",
    },
  ],

  userSelectorOptions: [],
};

export const mainFilters = [
  { id: 1, label: "Ընդհանուր" },
  { id: 2, label: "Ակտիվ" },
  { id: 3, label: "Փակված" },
  { id: 4, label: "Իրացված" },
  { id: 5, label: "Ժամկետանց" },
];
export const contractsHistoryFilters = [
  { id: 1, label: "Ընդհանուր" },
  { id: 2, label: "Հաստատված" },
  { id: 3, label: "Մերժված" },
];

export const contractsCategoryOptions = [
  {
    id: 1,
    option: "Տեխնիկա",
  },
  {
    id: 2,
    option: "Ոսկի",
  },
  {
    id: 3,
    option: "Մեքենա",
  },
];

export const inputFieldsData = [
  { name: "percentRate", label: "Տոկոսադրույք", placeholder: "0,4%" },
  { name: "fine", label: "Տուգանք", placeholder: "0,5%" },
  { name: "contractTerm", label: "Պայմանագրի ժամկետ", placeholder: "150 օր" },
  { name: "oneTime", label: "ՄԻանվագ", placeholder: "2,5%" },
];
