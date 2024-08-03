import editIcon from "@/assets/icons/contractsIcons/editIcon.svg";
import filterIcon from "@/assets/icons/contractsIcons/filterIcon.svg";
import arrowUpIcon from "@/assets/icons/arrows/arrowUpIcon.svg";
import arrowDownIcon from "@/assets/icons/arrows/arrowDownIcon.svg";
import styles from "./styles";

const UsersFiltersControlBar = ({ showFilters, setShowFilters }) => {
  const classes = styles();

  return (
    <div className={classes.filtersControlBar}>
      <span className={classes.title}>Ակտիվ օգտատերեր</span>
      <div className={classes.actionsContainer}>
        <div className={classes.buttonBlock}>
          <img width={14} src={editIcon} alt="download icon" />
          <span className={classes.buttonText}>Խմբագրել</span>
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
    </div>
  );
};

export default UsersFiltersControlBar;
