import styles from "./styles";
import growthIcon from "@/assets/icons/contractsIcons/growthIcon.svg";
import declineIcon from "@/assets/icons/contractsIcons/declineIcon.svg";
const ContractInfoCard = ({
  Icon,
  title,
  amount,
  fluctuation,
  growthFluctuation,
}) => {
  const classes = styles({ growthFluctuation });
  const IconComponent = Icon;
  return (
    <div className={classes.contractInfoCard}>
      <div className={classes.icon}>
        <IconComponent statusColor2="#FFF3E8" />
      </div>
      <div className={classes.infoBlock}>
        <span className={classes.title}>{title}</span>
        <span className={classes.amount}>{amount}</span>
        <div className={classes.fluctuation}>
          <img src={growthFluctuation ? growthIcon : declineIcon} />{" "}
          <span className={classes.fluctuationQuantity}>{fluctuation}%</span>{" "}
          <span className={classes.fluctuationText}>այս ամիս</span>
        </div>
      </div>
    </div>
  );
};

export default ContractInfoCard;
