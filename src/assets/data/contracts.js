export const contractsInfoData = [
  {
    id: 1,
    title: "Ընդհանուր պայմանագրեր",
    amount: 15699,
    fluctuation: 35,
    growthFluctuation: true,
  },
  {
    id: 2,
    title: "Ակտիվ պայմանագրեր",
    amount: 658,
    fluctuation: 21,
    growthFluctuation: false,
  },
  {
    id: 3,
    title: "Իրացված պայմանագրեր",
    amount: 25,
    fluctuation: 35,
    growthFluctuation: true,
  },
];

export const loansData = {
  securedLoansLinks: [
    {
      id: 1,
      title: "Մեքենա",
    },
    {
      id: 2,
      title: "Ոսկի",
    },
    {
      id: 3,
      title: "Տեխնիկա",
    },
  ],
  unsecuredLoansLinks: [
    {
      id: 1,
      title: "Սպառողական",
    },
    {
      id: 2,
      title: "Բիզնես",
    },
    {
      id: 3,
      title: "Ուսանողական",
    },
  ],
};

export const stepIndicatorsData = [
  {
    id: 1,
    name: "Անձնական տվյալներ",
  },
  {
    id: 2,
    name: "Վարկի տվյալներ",
  },
  {
    id: 3,
    name: "Բանկային տվյալներ",
  },
  {
    id: 4,
    name: "Ամփոփում",
  },
];

export const adminPageStepIndicators = [
  {
    id: 1,
    key: "add-user-steps",
    name: "Տվյալներ",
  },
  {
    id: 2,
    key: "add-user-steps2",
    name: "Արտոնություններ",
  },
  {
    id: 3,
    key: "add-user-steps3",
    name: "Ամփոփում",
  },
];

export const countries = {
  Հայաստան: ["Երևան", "Գյումրի", "Վանաձոր"],
  ԱՄՆ: ["Նյու Յորք", "Լոս Անջելես", "Չիկագո"],
  Ռուսաստան: ["Մոսկվա", "Սանկտ Պետերբուրգ", "Նովոսիբիրսկ"],
};

const creditCategoriesData = {
  Տեխնիկա: {
    subCategories: ["Հեռախոս", "Համակարգիչ"],
    model: ["Iphone 15 pro", "Iphone SE 2020"],
    percentRate: 0.5,
  },
  Մեքենա: {
    subCategories: ["", "", ""],
    model: ["BMW", "Mercedes"],
    percentRate: 0.8,
  },
  Ոսկի: {
    subCategories: ["Մատանի", "Թևնոց"],
    percentRate: 0.8,
  },
};

export const carFieldsData = [
  { name: "carYear", label: "Տարեթիվ", placeholder: "2018" },
  { name: "enginePower", label: "Շարժիչի հզոր․", placeholder: "154/210" },
  { name: "licensePlate", label: "Պետ. համարանիշ", placeholder: "01 HO 030" },
  { name: "color", label: "Գույնը", placeholder: "Սև մետալիկ" },
];
