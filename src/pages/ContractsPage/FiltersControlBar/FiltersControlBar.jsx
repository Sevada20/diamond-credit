import downloadIcon from "@/assets/icons/contractsIcons/downloadIcon.svg";
import filterIcon from "@/assets/icons/contractsIcons/filterIcon.svg";
import arrowUpIcon from "@/assets/icons/contractsIcons/arrowUpIcon.svg";
import arrowDownIcon from "@/assets/icons/contractsIcons/arrowDownIcon.svg";
import styles from "./styles";

const FiltersControlBar = ({ showFilters, setShowFilters }) => {
  const classes = styles();

  return (
    <div className={classes.filtersControlBar}>
      <div className={classes.buttonBlock}>
        <img src={downloadIcon} alt="download icon" />
        <span className={classes.buttonText}>ներբեռնել</span>
      </div>
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
  );
};

export default FiltersControlBar;
