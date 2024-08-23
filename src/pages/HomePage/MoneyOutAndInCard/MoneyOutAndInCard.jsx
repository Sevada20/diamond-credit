import moreIcon from "@/assets/icons/homePageIcons/cashIcons/moreIcon.svg";
import styles from "./styles";
const MoneyOutAndInCard = ({ name, status }) => {
  const classes = styles();

  return (
    <div className={classes.moneyOutAndInCardContainer}>
      <div className={classes.cardHeader}>
        <span className={classes.title}>{name}</span>
        <img className={classes.moreIcon} src={moreIcon} alt="moreIcon" />
      </div>
      <button className={`${classes.createButton} ${classes[status]}`}>
        Ստեղծել
      </button>
    </div>
  );
};

export default MoneyOutAndInCard;
