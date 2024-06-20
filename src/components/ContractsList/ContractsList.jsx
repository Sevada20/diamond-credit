import { contractsListData } from "@/assets/data/contracts";
import ContractCard from "../ContractCard/ContractCard";
import styles from "./styles";

const ContractsList = () => {
  const classes = styles();

  return (
    <div className={classes.contractsList}>
      {contractsListData.map((contract, index) => (
        <ContractCard key={index} {...contract} />
      ))}
    </div>
  );
};

export default ContractsList;
