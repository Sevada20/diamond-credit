import CashFlowCard from "./CashFlowCard/CashFlowCard";
import styles from "./styles";
const CashFlowList = ({ cashFlowListData, showFilters }) => {
  const classes = styles({ showFilters });
  return (
    <div className={classes.cashFlowListContainer}>
      {cashFlowListData.map((item) => {
        return <CashFlowCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CashFlowList;
