export const profileManagerMenuConditions = [
  { id: 1, label: "Տոկոսադրույք", status: "percent" },
  { id: 2, label: "Տևողություն", status: "duration" },
  { id: 3, label: "Գրավի տեսակներ", status: "collateralTypes" },
  { id: 4, label: "Մասնաճյուղեր", status: "branches" },
];

export const profileManagerCategoriesPercent = {
  technique: [
    { id: 1, from: 10000, to: 1000000, percent: 0.13 },
    { id: 2, from: 10000, to: 1000000, percent: 0.14 },
    { id: 3, from: 10000, to: 1000000, percent: 0.15 },
    { id: 4, from: 10000, to: 1000000, percent: 0.16 },
    { id: 5, from: 10000, to: 1000000, percent: 0.17 },
    { id: 6, from: 10000, to: 1000000, percent: 0.18 },
  ],
  gold: [
    { id: 1, from: 10000, to: 1000000, percent: 0.13 },
    { id: 2, from: 10000, to: 1000000, percent: 0.14 },
    { id: 3, from: 10000, to: 1000000, percent: 0.15 },
    { id: 4, from: 10000, to: 1000000, percent: 0.16 },
  ],
  oneTime: [
    { id: 1, from: 10000, to: 1000000, percent: 0.13 },
    { id: 2, from: 10000, to: 1000000, percent: 0.14 },
    { id: 3, from: 10000, to: 1000000, percent: 0.15 },
    { id: 4, from: 10000, to: 1000000, percent: 0.16 },
    { id: 5, from: 10000, to: 1000000, percent: 0.16 },
    { id: 6, from: 10000, to: 1000000, percent: 0.16 },
  ],
};

export const collateralTypes = [
  {
    id: 1,
    name: "Տեխնիկա",
    list: [
      {
        id: 1,
        name: "Հեռախոս",
        subList: [
          { id: 1, name: "Iphone 15 Pro Max" },
          { id: 2, name: "Iphone 15 Pro" },
          { id: 3, name: "Iphone 15 Plus" },
          { id: 4, name: "Iphone 15" },
          { id: 5, name: "Iphone 14 Pro Max" },
          { id: 6, name: "Iphone 14 Pro" },
          { id: 7, name: "Iphone 15 Plus" },
          { id: 8, name: "Iphone 14" },
          { id: 9, name: "Iphone 13 Pro Max" },
        ],
      },
      {
        id: 2,
        name: "Պլանշետ",
        subList: [
          { id: 1, name: "Iphone 15 Pro Max" },
          { id: 2, name: "Iphone 15 Pro" },
          { id: 3, name: "Iphone 15 Plus" },
          { id: 4, name: "Iphone 15" },
          { id: 5, name: "Iphone 14 Pro Max" },
          { id: 6, name: "Iphone 14 Pro" },
          { id: 7, name: "Iphone 15 Plus" },
          { id: 8, name: "Iphone 14" },
          { id: 9, name: "Iphone 13 Pro Max" },
        ],
      },
      {
        id: 3,
        name: "Հեռուստացույց",
        subList: [
          { id: 1, name: "Iphone 15 Pro Max" },
          { id: 2, name: "Iphone 15 Pro" },
          { id: 3, name: "Iphone 15 Plus" },
          { id: 4, name: "Iphone 15" },
          { id: 5, name: "Iphone 14 Pro Max" },
          { id: 6, name: "Iphone 14 Pro" },
          { id: 7, name: "Iphone 15 Plus" },
          { id: 8, name: "Iphone 14" },
          { id: 9, name: "Iphone 13 Pro Max" },
        ],
      },
      {
        id: 4,
        name: "Ժամացույց",
        subList: [{ id: 1, name: "Iphone 15 Pro Max" }],
      },
      {
        id: 5,
        name: "Նոութբուք",
        subList: [{ id: 1, name: "Iphone 15 Pro Max" }],
      },
      {
        id: 6,
        name: "Տեսախցիկ",
        subList: [{ id: 1, name: "Iphone 15 Pro Max" }],
      },
    ],
  },
  {
    id: 2,
    name: "Ոսկի",
    list: [
      {
        id: 1,
        name: "Նոութբուք",
        subList: [{ id: 1, name: "Iphone 15 Pro Max" }],
      },
    ],
  },
  {
    id: 3,
    name: "Մեքենա",
    list: [
      {
        id: 1,
        name: "Նոութբուք",
        subList: [{ id: 1, name: "Iphone 15 Pro Max" }],
      },
    ],
  },
];
