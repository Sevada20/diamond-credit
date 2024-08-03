import { Link } from "react-router-dom";
import toContractIcon from "@/assets/icons/arrows/arrowRight.svg";
import styles from "./styles";

const ContractCard = ({
  status,
  ADB_ID,
  date,
  deadline,
  name,
  surname,
  middle_name,
  dob,
  passport,
  passport_given_date = "09.09.2017",
  passport_given,
  address,
  phone1,
  phone2,
  email,
  category,
  rate,
}) => {
  const classes = styles({ status });

  return (
    <div className={classes.contractCard}>
      <div className={classes.contractInnerCard}>
        <span className={classes.cardNumber}>{ADB_ID}</span>
        <div className={classes.cardInfoContainer}>
          <span className={classes.dateInfo}>{date}</span>
          <span className={classes.dateInfo}>{deadline}</span>
        </div>
        <div className={classes.cardInfoContainer}>
          <span className={classes.cardInfo}>
            {name} {surname} {middle_name}
          </span>
          <span className={classes.cardInfo}>ծնվ․{dob}թ․</span>
        </div>
        <div className={classes.cardInfoContainer}>
          <span className={classes.cardInfo}>{address}</span>
          <div className={classes.passportInfoContainer}>
            <span className={classes.cardInfo}>{passport}</span>
            <span className={classes.cardInfo}>, {passport_given_date}</span>
            <span className={classes.cardInfo}>, տրվ․ {passport_given}</span>
          </div>
        </div>
        <div className={classes.cardInfoContainer}>
          <div className={classes.phonesInfoContainer}>
            <span className={classes.cardInfo}>{phone1},</span>
            <span className={classes.cardInfo}>{phone2}</span>
          </div>
          <span className={classes.cardInfo}>{email || "no email"}</span>
        </div>
        <span className={classes.cardInfo}>
          {category?.title || "no category"}
        </span>
        <span className={classes.cardInfo}>{rate}</span>
        <Link to={`/contracts/${ADB_ID}`}>
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
