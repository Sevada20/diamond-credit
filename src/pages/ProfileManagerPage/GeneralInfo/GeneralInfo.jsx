import userIcon from "@/assets/icons/contractsIcons/userAvatar.png";
import editIcon from "@/assets/icons/editIcons/editIcon.svg";
import UserPersonalData from "./UserPersonalData/UserPersonalData";
import styles from "./styles";
import UserDocuments from "./UserDocuments/UserDocuments";
const GeneralInfo = () => {
  const classes = styles();
  return (
    <div className={classes.generalInfoContainer}>
      <div className={classes.userInfoContainer}>
        <div className={classes.userAvatarWrapper}>
          <img
            className={classes.userAvatar}
            width={100}
            height={100}
            src={userIcon}
            alt="user icon"
          />
          <div className={classes.editIconWrapper}>
            <img src={editIcon} alt="edit icon" />
          </div>
        </div>
        <div className={classes.userInfoBlock}>
          <span className={classes.userName}>Սյուզաննա Հայկի Մինասյան</span>
          <span className={classes.role}>Տնօրեն</span>
          <span className={classes.date}>12 ամիս</span>
        </div>
      </div>
      <div className={classes.userPersonalDataWrapper}>
        <UserPersonalData />
      </div>
      <div className={classes.userDocumentsWrapper}>
        <UserDocuments />
      </div>
    </div>
  );
};

export default GeneralInfo;
