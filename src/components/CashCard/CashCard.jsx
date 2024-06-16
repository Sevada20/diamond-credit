import moreIcon from "@/assets/icons/homePageIcons/cashIcons/moreIcon.svg";
import styles from "./styles";

const CashCard = ({ id, icon, title, amount }) => {
  const classes = styles({ id });

  return (
    <div className={classes.cashCard}>
      <div className={classes.icons}>
        <img width={47} height={25} alt="Financial icon" src={icon} />
        <img alt="" src={moreIcon} />
      </div>
      <span className={classes.title}>{title}</span>
      <b className={classes.amount}>{amount}</b>
    </div>
  );
};

export default CashCard;
