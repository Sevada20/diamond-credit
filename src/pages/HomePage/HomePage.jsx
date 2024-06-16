import FinancialCardList from "@/components/FinancialCardList/FinancialCardList";
import greetingIcon from "@/assets/icons/homePageIcons/greetingIcon.svg";
import styles from "./styles";
const HomePage = () => {
  const classes = styles();
  return (
    <div className={classes.homePageContainer}>
      <div className={classes.greeting}>
        <b className={classes.titleGreeting}>Ողջույն, User Name</b>
        <img src={greetingIcon} alt="greetingIcon" />
      </div>
      <div className={classes.firstSectionRow}>
        <FinancialCardList />
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
      </div>
    </div>
  );
};

export default HomePage;
