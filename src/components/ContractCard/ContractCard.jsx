import { Link } from "react-router-dom";
import toContractIcon from "@/assets/icons/arrows/arrowRight.svg";
import styles from "./styles";

const ContractCard = ({
  status,
  id,
  date1,
  date2,
  fullName,
  birthday,
  address,
  passport,
  phone1,
  phone2,
  email,
  type,
  percent,
}) => {
  const classes = styles({ status });

  return (
    <div className={classes.contractCard}>
      <div className={classes.contractInnerCard}>
        <span className={classes.cardNumber}>{id}</span>
        <div className={classes.cardInfoContainer}>
          <span className={classes.dateInfo}>{date1}</span>
          <span className={classes.dateInfo}>{date2}</span>
        </div>
        <div className={classes.cardInfoContainer}>
          <span className={classes.cardInfo}>{fullName}</span>
          <span className={classes.cardInfo}>{birthday}</span>
        </div>
        <div className={classes.cardInfoContainer}>
          <span className={classes.cardInfo}>{address}</span>
          <span className={classes.cardInfo}>{passport}</span>
        </div>
        <div className={classes.cardInfoContainer}>
          <div className={classes.phonesInfoContainer}>
            <span className={classes.cardInfo}>{phone1}</span>
            <span className={classes.cardInfo}>{phone2}</span>
          </div>
          <span className={classes.cardInfo}>{email}</span>
        </div>
        <span className={classes.cardInfo}>{type}</span>
        <span className={classes.cardInfo}>{percent}</span>
        <Link to={`/contracts/${id}`}>
          <img
            className={classes.viewIcon}
            src={toContractIcon}
            alt="View Contract"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContractCard;
