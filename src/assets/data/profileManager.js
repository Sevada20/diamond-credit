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

export const branches = [
  {
    id: 1,
    name: "Գյումրու",
    license: "ԳԱ 1235154",
    employees: 8,
    insurance: 65000000,
    involved: 26500000,
    director: 3113153,
    teamLeader: 3335534,
    customerServiceSpecialist: 3153153,
    creditSpecialist: 311315453,
    jeweler: 654684,
  },
  {
    id: 2,
    name: "Երևանի",
    license: "ԳԱ 1235154",
    employees: 8,
    insurance: 65000000,
    involved: 26500000,
    director: 3113153,
    teamLeader: 3335534,
    customerServiceSpecialist: 3153153,
    creditSpecialist: 311315453,
    jeweler: 654684,
  },
];

export const branchesListTitles = [
  {
    id: 1,
    title: "Լիցենզիա",
  },
  {
    id: 2,
    title: "Աշխատակիցներ",
  },
  {
    id: 3,
    title: "Ապպա",
  },
  {
    id: 4,
    title: "Ներգրավված",
  },
];

export const percentList = [
  {
    id: 1,
    title: "Տեխնիկա",
    labelFrom: "Սկսած",
    labelTo: "Մինչև",
    percent: 0.13,
    percents: [],
  },
  {
    id: 1,
    title: "Ոսկի",
    labelFrom: "Սկսած",
    labelTo: "Մինչև",
    percents: [
      {
        id: 1,
        labelFrom: "Սկսած",
        labelTo: "Մինչև",
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 2,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 3,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 4,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 5,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 6,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
    ],
  },
  {
    id: 2,
    title: "Մեքենա",
    labelFrom: "Սկսած",
    labelTo: "Մինչև",
    percents: [
      {
        id: 1,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 2,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 3,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 4,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 5,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 6,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
    ],
  },
  {
    id: 3,
    title: "Միանվագ վճար",
    labelFrom: "Սկսած",
    labelTo: "Մինչև",
    percents: [
      {
        id: 1,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 2,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 3,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 4,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 5,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
      {
        id: 6,
        from: 10000,
        to: 1000000,
        percent: 0.13,
      },
    ],
  },
];
