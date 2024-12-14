import { useState } from "react";
import { contractSummaryChartFilters } from "@/assets/data/chartsData";
import styles from "./styles";
const ContractSummaryChartFilters = () => {
  const classes = styles();
  const [activeRadio, setActiveRadio] = useState("");

  const handleChange = (event) => {
    setActiveRadio(event.target.value);
  };

  return (
    <div className={classes.contractSummaryChartFiltersContainer}>
      <div className={classes.mainFilter}>
        <div className={classes.indicator}></div>
        <span className={classes.title}>Ֆիլտրել</span>
      </div>
      <div className={classes.filtersList}>
        {contractSummaryChartFilters.map((item) => (
          <div key={item.id} className={classes.filterItemContainer}>
            <input
              className={classes.radio}
              id={item.name}
              checked={activeRadio === item.name}
              value={item.name}
              onChange={handleChange}
              type="radio"
            />
            <label htmlFor={item.name}>{item.label}</label>
            <span className={classes.percent}>{item.percent} %</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractSummaryChartFilters;
