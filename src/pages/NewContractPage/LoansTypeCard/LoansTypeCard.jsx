import timeIcon from "@/assets/icons/contractsIcons/timeIcon.svg";
import styles from "./styles";
import { Link } from "react-router-dom";

const LoansTypeCard = ({ goToNextMainStep, logo, title, links }) => {
  const classes = styles();

  return (
    <div className={classes.loansTypeCard}>
      <div className={classes.loansTypeLogoContainer}>
        <img src={logo} alt="logo" className={classes.loansTypeLogo} />
      </div>
      <div className={classes.loansTypeInnerCard}>
        <span className={classes.loansTypeTitle}>{title}</span>
        <div className={classes.line}></div>
        <div className={classes.loansTypeLinks}>
          {links.map((link) => (
            <li key={link.id} className={classes.loansTypeLink}>
              <Link onClick={goToNextMainStep} to="" className={classes.link}>
                {link.title}
              </Link>
            </li>
          ))}
        </div>
        <div className={classes.timeBlock}>
          <img src={timeIcon} alt="time icon" />
          <span>Մինչև 5 ամիս ժամկետով</span>
        </div>
      </div>
    </div>
  );
};

export default LoansTypeCard;
