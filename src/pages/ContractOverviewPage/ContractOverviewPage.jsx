import { useState } from "react";
import { applicationHistoryList } from "@/assets/data/applicationHistoryList.js";
import { paymentsList } from "@/assets/data/payments";
import { contractsHistoryFilters } from "@/assets/data/filterFields";
import PaymentsList from "@/components/PaymentsList/PaymentsList";
import ApplicationHistoryList from "@/components/ApplicationHistoryList/ApplicationHistoryList";
import ContractDetailsRightBar from "../ContractDetailsPage/ContractDetailsRightbar/ContractDetailsRightBar";
import styles from "./styles";

const ContractOverviewPage = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  const classes = styles({ activeFilter });

  return (
    <div className={classes.pageContainer}>
      <div className={classes.mainContentContainer}>
        <PaymentsList payments={paymentsList} />
        <div className={classes.contractDescriptionContainer}>
          <span className={classes.title}>Գրավի առարկա</span>
          <div className={classes.descriptionContainer}>
            <span className={classes.description}>Նկարագրություն:</span>
          </div>
        </div>
        <div className={classes.contractHistoryContainer}>
          <div className={classes.filterBar}>
            <span className={classes.historyTitle}>Հայտերի պատմություն</span>
            <div className={classes.filterMenu}>
              {contractsHistoryFilters.map((filter) => (
                <span
                  className={`${classes.filterMenuItem} ${
                    activeFilter === filter.id ? classes.active : ""
                  }`}
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </span>
              ))}
            </div>
          </div>
          <ApplicationHistoryList
            applicationHistoryList={applicationHistoryList}
          />
        </div>
      </div>
      <ContractDetailsRightBar />
    </div>
  );
};

export default ContractOverviewPage;
