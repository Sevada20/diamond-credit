import editIcon from "@/assets/icons/contractsIcons/editIcon.svg";
import userAvatar from "@/assets/icons/contractsIcons/userAvatar.png";
import locationIcon from "@/assets/icons/contractsIcons/locationIcon.svg";
import phoneIcon from "@/assets/icons/contactIcons/phoneIcon.svg";
import emailIcon from "@/assets/icons/contractsIcons/emailIcon.svg";
import styles from "./styles";
const ContractDetailsSidebar = () => {
  const classes = styles();

  return (
    <div className={classes.contractDetailsSidebar}>
      <div className={classes.userInfoHeader}>
        <div className={classes.userInfoHeaderContent}>
          <img
            className={classes.userAvatar}
            src={userAvatar}
            alt="user avatar"
          />
          <span className={classes.userId}>#156541656</span>
          <span className={classes.userFullName}>Name Surname Patronymic</span>
        </div>
        <div className={classes.editButtonWrapper}>
          <div className={classes.editButton}>
            <img src={editIcon} alt="edit icon" />
            <span className={classes.editButtonText}>Խմբագրել</span>
          </div>
        </div>
      </div>
      <div className={classes.userContactsContainer}>
        <div className={classes.userContactRow}>
          <img src={locationIcon} alt="location icon" />
          <span className={classes.value}>ք․ Երևան, Գայի 51/5</span>
        </div>
        <div className={classes.userContactRow}>
          <img src={phoneIcon} alt="phone icon" />
          <span className={classes.value}>(374 96) 999 180</span>
        </div>
        <div className={classes.userContactRow}>
          <img src={phoneIcon} alt="phone icon" />
          <span className={classes.value}>(374 96) 999 180</span>
        </div>
        <div className={classes.userContactRow}>
          <img src={emailIcon} alt="email icon" />
          <span className={classes.value}>diamondcredit1@mail.ru</span>
        </div>
      </div>
      <div className={classes.userContactsContainer}>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Ծննդյան տարեթիվ:</span>
          <span className={classes.value}>19/09/2000</span>
        </div>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Անձնագիր։</span>
          <span className={classes.value}>AP 06868851</span>
        </div>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Վավերականություն։</span>
          <span className={classes.value}>19/05/2024</span>
        </div>
      </div>
      <div className={classes.userContractDetailsContainer}>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Տրամադրված:</span>
          <span className={classes.value}>142.000 Դ</span>
        </div>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Գնահարված։</span>
          <span className={classes.value}>165.000 Դ</span>
        </div>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Տոկոս։</span>
          <span className={classes.value}>0,4 %</span>
        </div>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Տուգանք։</span>
          <span className={classes.value}>0,13 %</span>
        </div>
        <div className={classes.userInfoRow}>
          <span className={classes.label}>Միանվագ։</span>
          <span className={classes.value}>2,5 %</span>
        </div>
      </div>
      <div className={classes.actionButtons}>
        <button className={classes.newContractBtn}>Կնքել նոր պայմանագիր</button>
        <button className={classes.updateInfoBtn}>Թարմացնել տվյալները</button>
      </div>
    </div>
  );
};

export default ContractDetailsSidebar;
