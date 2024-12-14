import userAvatar from "@/assets/icons/contractsIcons/userAvatar.png";
import userImg from "@/assets/icons/contractsIcons/userImg.png";
import styles from "./styles";
const ApplicationHistoryCard = ({
  date,
  discount,
  executor,
  approver,
  approved,
}) => {
  const classes = styles({ approved });
  return (
    <div className={classes.applicationHistoryCard}>
      <span className={classes.date}>{date}</span>
      <span className={classes.discount}>{discount} Դ Զեղչ</span>
      <div className={classes.userContainer}>
        <img
          width={28}
          height={28}
          src={userAvatar}
          className={classes.userImg}
          alt="user"
        />
        <div className={classes.userInfo}>
          <span className={classes.userRole}>Կատարող</span>
          <span className={classes.userName}>{executor}</span>
        </div>
      </div>
      <div className={classes.userContainer}>
        <img src={userImg} className={classes.userImg} alt="user" />
        <div className={classes.userInfo}>
          <span className={classes.userRole}>Հաստատող</span>
          <span className={classes.userName}>{approver}</span>
        </div>
      </div>
      <span className={classes.approvedStatus}>
        {approved ? "Հաստատված" : "Մերժված"}
      </span>
    </div>
  );
};

export default ApplicationHistoryCard;
