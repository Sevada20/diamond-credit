import { useState } from "react";
import editIcon from "@/assets/icons/contractsIcons/editIcon.svg";
import styles from "./styles";
const UserPersonalData = () => {
  const [editMode, setEditMode] = useState(false);
  const classes = styles({ editMode });
  const [userInfo, setUserInfo] = useState({
    fullName: "Սյուզաննա Հայկի Մինասյան",
    email: "Syuzanna.minasyan@gmai.com",
    phone: "(374) 77 84 94 54",
  });

  const handleEditMode = (isEditMode) => {
    setEditMode(isEditMode);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className={classes.userPersonalDataContainer}>
      <div className={classes.userPersonalDataHeader}>
        <span className={classes.title}>Անձնական տվյալներ</span>
        <div
          onClick={() => handleEditMode(true)}
          className={classes.editActionWrapper}
        >
          <img width={14} height={14} src={editIcon} alt="edit icon" />
          <span className={classes.editButtonText}>Խմբագրել</span>
        </div>
      </div>
      <div className={classes.userPersonalDataBody}>
        <div className={classes.userInfoItem}>
          <span className={classes.infoTitle}>Անուն Ազգանուն</span>
          {editMode ? (
            <input
              onChange={handleInputChange}
              type="text"
              name="fullName"
              className={classes.inputField}
              value={userInfo.fullName}
            />
          ) : (
            <span className={classes.value}>{userInfo.fullName}</span>
          )}
        </div>
        <div className={classes.userInfoItem}>
          <span className={classes.infoTitle}>Էլ․հասցե</span>
          {editMode ? (
            <input
              onChange={handleInputChange}
              type="email"
              name="email"
              className={classes.inputField}
              value={userInfo.email}
            />
          ) : (
            <span className={classes.value}>{userInfo.email}</span>
          )}
        </div>
        <div className={classes.userInfoItem}>
          <span className={classes.infoTitle}>Հեռ․</span>
          {editMode ? (
            <input
              onChange={handleInputChange}
              type="tel"
              name="phone"
              className={classes.inputField}
              value={userInfo.phone}
            />
          ) : (
            <span className={classes.value}>{userInfo.phone}</span>
          )}
        </div>
      </div>
      {editMode && (
        <div className={classes.actionButtonsContainer}>
          <button
            onClick={() => handleEditMode(false)}
            className={classes.cancelButton}
          >
            Չեղարկել
          </button>
          <button
            onClick={() => handleEditMode(false)}
            className={classes.saveButton}
          >
            Պահպանել
          </button>
        </div>
      )}
    </div>
  );
};

export default UserPersonalData;
