import { useState } from "react";
import { cashFlowData } from "@/assets/data/cashFlowData";
import FinancialCardList from "@/components/FinancialCardList/FinancialCardList";
import CashFlowHeader from "./CashFlowHeader/CashFlowHeader";
import CashFlowFilters from "./CashFlowFilters/CashFlowFilters";
import CashFlowList from "./CashFlowList/CashFlowList";
import styles from "./styles";

const CashierPage = () => {
  const classes = styles();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className={classes.cashierPageContainer}>
      <div className={classes.applicationsAwaitingApprovalList}></div>
      <div className={classes.cashFlowSection}>
        <div className={classes.FinancialCardListWrapper}>
          <FinancialCardList />
        </div>
        <div className={classes.cashFlowContainer}>
          <CashFlowHeader
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          {showFilters && (
            <div className={classes.cashFlowFiltersWrapper}>
              <CashFlowFilters />
            </div>
          )}
          <CashFlowList
            showFilters={showFilters}
            cashFlowListData={cashFlowData}
          />
        </div>
      </div>
    </div>
  );
};

export default CashierPage;
