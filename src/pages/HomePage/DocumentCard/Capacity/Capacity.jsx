import styles from "./styles";

const Capacity = ({ capacity }) => {
  const classes = styles();
  return (
    <div className={classes.capacityContainer}>
      <span className={classes.capacity}>{capacity}Gb</span>
      <div className={classes.indicatorContainer}>
        <div
          className={classes.capacityIndicator}
          style={{ width: `${capacity}%` }}
        ></div>
        <div
          className={classes.remainingCapacity}
          style={{ width: `${100 - capacity}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Capacity;
