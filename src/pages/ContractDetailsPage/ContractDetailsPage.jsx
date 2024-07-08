import { Outlet } from "react-router-dom";
import ContractDetailsSidebar from "./ContractDetailsSidebar/ContractDetailsSidebar";
import styles from "./styles";

const ContractDetailsPage = () => {
  const classes = styles();
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contractDetailsSidebarWrapper}>
        <ContractDetailsSidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default ContractDetailsPage;
