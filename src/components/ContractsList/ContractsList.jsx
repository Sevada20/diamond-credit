import ContractCard from "../ContractCard/ContractCard";
import styles from "./styles";

const ContractsList = ({ contracts }) => {
  const classes = styles();

  return (
    <div className={classes.contractsList}>
      {contracts.map((contract, index) => (
        <ContractCard key={index} {...contract} />
      ))}
    </div>
  );
};

export default ContractsList;
