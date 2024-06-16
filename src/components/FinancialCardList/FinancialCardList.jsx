import { cardsData } from "@/assets/data/financialData";
import CashCard from "../CashCard/CashCard";
import styles from "./styles";

const FinancialCardList = () => {
  const classes = styles();

  return (
    <>
      {cardsData.map((card) => (
        <CashCard key={card.id} {...card} />
      ))}
    </>
  );
};

export default FinancialCardList;
