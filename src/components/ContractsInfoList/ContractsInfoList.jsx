import ContractInfoCard from "../ContractInfoCard/ContractInfoCard";
import styles from "./styles";
const ContractsInfoList = ({ infoCardList, GeneralIcon }) => {
  const classes = styles();

  return (
    <div className={classes.contractsInfoList}>
      {infoCardList.map((infoCard) => (
        <ContractInfoCard key={infoCard.id} {...infoCard} Icon={GeneralIcon} />
      ))}
    </div>
  );
};

export default ContractsInfoList;
