import phoneIcon from "@/assets/icons/contactIcons/phoneIcon.svg";
import emailIcon from "@/assets/icons/contractsIcons/emailIcon.svg";
import PasswordIcon from "@/assets/icons/signInIcons/PasswordIcon";
import editIcon from "@/assets/icons/contractsIcons/editIcon.svg";

import styles from "./styles";
const Step3 = ({ watch, setCurrentStep }) => {
  console.log(watch(), "watch");
  const classes = styles();
  return (
    <div className={classes.step3Container}>
      <span className={classes.title}>Ամփոփում</span>
      <div className={classes.summaryInnerContainer}>
        <span className={classes.fullName}>
          {watch("name")} {watch("surname")} {watch("patronymicName")}
        </span>
        <div className={classes.summaryInfoContainer}>
          <div className={classes.summaryInfoTitleContainer}>
            <span className={classes.summaryInfoTitle}>Անձնական տվյալներ</span>
            <img
              onClick={() => setCurrentStep("add-user-step-1")}
              src={editIcon}
              alt="editor icon"
            />
          </div>
          <div className={classes.summaryInfoItemBlock}>
            <div className={classes.summaryInfoItem}>
              <span className={classes.name}>Սկիզբ:</span>
              <span className={classes.value}>
                {watch("dayDate")}.{watch("monthDate")}.{watch("yearDate")}
              </span>
            </div>
            <div className={classes.summaryInfoItem}>
              <span className={classes.name}>Հաստիք։</span>
              <span className={classes.value}>{watch("position")}</span>
            </div>
            <div className={classes.summaryInfoItem}>
              <span className={classes.name}>Տեսակ։</span>
              <span className={classes.value}>{watch("role")}</span>
            </div>
          </div>
        </div>
        <div className={classes.summaryInfoContainer}>
          <div className={classes.summaryInfoTitleContainer}>
            <span className={classes.summaryInfoTitle}>
              Կոնտակտային տվյալներ
            </span>
            <img
              onClick={() => setCurrentStep("add-user-step-1")}
              src={editIcon}
              alt="editor icon"
            />
          </div>
          <div className={classes.summaryInfoItemBlock}>
            <div className={classes.summaryInfoItem}>
              <img src={phoneIcon} alt="phone icon" />
              <span className={classes.value}>{watch("phone")}</span>
            </div>
            <div className={classes.summaryInfoItem}>
              <img src={emailIcon} alt="email icon" />
              <span className={classes.value}>{watch("email")}</span>
            </div>
          </div>
        </div>
        <div className={classes.summaryInfoContainer}>
          <div className={classes.summaryInfoTitleContainer}>
            <span className={classes.summaryInfoTitle}>Մուտքի տվյալներ</span>
            <img
              onClick={() => setCurrentStep("add-user-step-1")}
              src={editIcon}
              alt="editor icon"
            />
          </div>
          <div className={classes.summaryInfoItemBlock}>
            <div className={classes.summaryPersonalInfo}>
              <PasswordIcon />
              <span className={classes.name}>Գաղտնաբար:</span>
              <span className={classes.value}>{watch("password")}</span>
            </div>
            <div className={classes.summaryPersonalInfo}>
              <img src={emailIcon} alt="email icon" />
              <span className={classes.name}>Մուտքանուն։</span>
              <span className={classes.value}>{watch("email")}</span>
            </div>
          </div>
        </div>
        <div className={classes.summaryInfoContainer}>
          <div className={classes.summaryInfoTitleContainer}>
            <span className={classes.summaryInfoTitle}>Արտոնություններ</span>
            <img
              onClick={() => setCurrentStep("add-user-step-2")}
              src={editIcon}
              alt="editor icon"
            />
          </div>
          <div className={classes.summaryInfoItemBlock}>
            <div className={classes.summaryPersonalInfo}>
              <PasswordIcon />
              <span className={classes.name}>Գաղտնաբար:</span>
              <span className={classes.value}>{watch("password")}</span>
            </div>
            <div className={classes.summaryPersonalInfo}>
              <img src={emailIcon} alt="email icon" />
              <span className={classes.name}>Մուտքանուն։</span>
              <span className={classes.value}>{watch("email")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
