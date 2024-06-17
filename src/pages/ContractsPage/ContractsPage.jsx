import ContractsList from "@/components/ContractsList/ContractsList";
import ContractFilter from "@/components/ContractFilter/ContractFilter";
import styles from "./styles";

const ContractsPage = () => {
  const classes = styles();

  return (
    <div className={classes.contractsPage}>
      <div className={classes.contractContainer}>
        <div></div>
        <div className={classes.contractsFilterAndList}>
          <ContractFilter />
          <div className={classes.contractsListWrapper}>
            <ContractsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsPage;
