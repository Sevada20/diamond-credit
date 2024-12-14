import styles from "./styles";
const InflationCard = ({
  icon,
  Chart,
  percentage,
  growth,
  percentageColor1,
  percentageColor2,
  amount,
}) => {
  const classes = styles();
  return (
    <div className={classes.inflationCard}>
      <div className={classes.inflationMainInfoContainer}>
        <img width={16} src={icon} alt="Inflation icon" />
        <Chart
          percentage={percentage}
          growth={growth}
          percentageColor1={percentageColor1}
          percentageColor2={percentageColor2}
        />
      </div>
      <div className={classes.infoBlock}>
        <span className={classes.info}>Այս պահին</span>
        <span className={classes.amount}>{amount}</span>
        <span className={classes.info}>
          <span className={growth ? classes.positive : classes.negative}>
            {growth ? "+" : "-"}
            {percentage}%
          </span>{" "}
          Նախորդ օրվա համեմատ
        </span>
      </div>
    </div>
  );
};

export default InflationCard;
