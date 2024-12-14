import { useState } from "react";
import { cashFlowMainFilters } from "@/assets/data/filterFields";
import CalendarIcon from "@/assets/icons/sidebarIcons/CalendarIcon";
import downloadIcon from "@/assets/icons/cashierPageIcons/downloadIcon.svg";
import filterIcon from "@/assets/icons/contractsIcons/filterIcon.svg";
import arrowUpIcon from "@/assets/icons/arrows/arrowUpIcon.svg";
import arrowDownIcon from "@/assets/icons/arrows/arrowDownIcon.svg";
import styles from "./styles";

const CashFlowHeader = ({ showFilters, setShowFilters }) => {
  const [activeCashFlowFilter, setActiveCashFlowFilter] = useState(1);
  const classes = styles();

  return (
    <div className={classes.filtersHeader}>
      <div className={classes.mainFiltersMenu}>
        {cashFlowMainFilters.map((item) => (
          <span
            onClick={() => setActiveCashFlowFilter(item.id)}
            key={item.id}
            className={`${classes.mainFilterItem} ${
              activeCashFlowFilter === item.id ? classes.active : ""
            }`}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className={classes.filtersControlBar}>
        <img
          className={classes.downloadIcon}
          src={downloadIcon}
          alt="download icon"
        />
        <CalendarIcon width={16} height={16} statusColor1="#373962" />
        <div
          onClick={() => setShowFilters(!showFilters)}
          className={classes.buttonBlock}
        >
          <img src={filterIcon} alt="Filter icon" />
          <span className={classes.buttonText}>ֆիլտրել</span>
          {showFilters ? (
            <img src={arrowUpIcon} alt="arrow icon" />
          ) : (
            <img src={arrowDownIcon} alt="arrow icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default CashFlowHeader;
