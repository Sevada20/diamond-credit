import { loansData } from "@/assets/data/contracts";
import LoansTypeCard from "../LoansTypeCard/LoansTypeCard";
import diamondIcon from "@/assets/icons/contractsIcons/diamondIcon.svg";
import documentIcon from "@/assets/icons/contractsIcons/documentIcon.svg";
import styles from "./styles";

const ChoiceLoansType = ({ goToNextMainStep }) => {
  const classes = styles();

  return (
    <>
      <LoansTypeCard
        goToNextMainStep={goToNextMainStep}
        logo={diamondIcon}
        title="Գրավով Վարկեր"
        links={loansData.securedLoansLinks}
      />
      <LoansTypeCard
        logo={documentIcon}
        title="Անգրավ Վարկեր"
        links={loansData.unsecuredLoansLinks}
      />
    </>
  );
};

export default ChoiceLoansType;
