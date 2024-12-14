import documentIcon from "@/assets/icons/documentIcons/documentIconSecond.svg";
import letterIcon from "@/assets/icons/documentIcons/letterIcon.svg";

export const documentsData = [
  {
    id: 1,
    name: "Փաստաթղթեր",
    quantity: 873,
    icon: documentIcon,
    capacity: 58,
  },
  { id: 2, name: "Նամակներ", quantity: 2500, icon: letterIcon, capacity: 38 },
];

export const tasks = [
  {
    id: 1,
    name: "Պայմանագրերեը ստուգել",
    completionProcess: "Done",
    status: "completed",
    time: "12:00",
  },
  {
    id: 2,
    name: "Հաշվետվություններ",
    completionProcess: "In progress",
    status: "inProgress",
    time: "13:00",
  },
  {
    id: 3,
    name: "Նոր գնահատում",
    completionProcess: "To-Do",
    status: "toDo",
    time: "15:00",
  },
];

export const moneyOutAndIn = [
  {
    id: 1,
    name: "Ելքագրել ծախս",
    status: "outMoney",
  },
  {
    id: 2,
    name: "Մուտքագրել ՆԴՄ",
    status: "inMoney",
  },
  {
    id: 3,
    name: "Անկանխիկ հաշվի համալրում",
    status: "accountReplenishment",
  },
];
