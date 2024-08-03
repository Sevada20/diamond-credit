import { useRef, useState } from "react";
import Modal from "@/UI/Modal/Modal";
import menuIcon from "@/assets/icons/contractsIcons/menu.svg";
import documentIcon from "@/assets/icons/documentIcons/documentIcon.svg";
import downloadIcon from "@/assets/icons/contractsIcons/downloadIcon.svg";
import styles from "./styles";
const UserDocuments = () => {
  const classes = styles();
  const [showMenu, setShowMenu] = useState(false);
  const menuIconRef = useRef(null);

  return (
    <div className={classes.userDocumentsContainer}>
      <div className={classes.userDocumentsHeader}>
        <span className={classes.title}>Անձնական տվյալներ</span>
        <img
          ref={menuIconRef}
          onClick={() => setShowMenu(!showMenu)}
          className={classes.menuIcon}
          width={17}
          src={menuIcon}
          alt="more icon"
        />
        {showMenu && (
          <div className={classes.menuModalWrapper}>
            <Modal
              isOpen={showMenu}
              onClose={() => setShowMenu(false)}
              externalRef={menuIconRef}
            >
              <div className={classes.menu}>
                <span className={classes.menuItem}>Խմբագրել</span>
                <span className={classes.menuItem}>Ավելացնել փաստաթուղթ</span>
              </div>
            </Modal>
          </div>
        )}
      </div>
      <div className={classes.documentItemBlock}>
        <div className={classes.documentItem}>
          <div className={classes.titleContainer}>
            <img src={documentIcon} alt="document icon" />
            <span className={classes.documentItemTitle}>Անձնագիր</span>
          </div>
          <div className={classes.documentItemInfo}>
            AP0686851, 02.12.2017, 005
          </div>
        </div>
        <div className={classes.downloadIconContainer}>
          <img src={downloadIcon} alt="download icon" />
          <span className={classes.downloadIconText}>Ներբեռնել</span>
        </div>
      </div>
      <div className={classes.documentItemBlock}>
        <div className={classes.documentItem}>
          <div className={classes.titleContainer}>
            <img src={documentIcon} alt="document icon" />
            <span className={classes.documentItemTitle}>
              Աշխատանքային պայմանագիր
            </span>
          </div>
          <div className={classes.documentItemInfo}>
            N145135031, 05.07.2024, անժամկետ
          </div>
        </div>
        <div className={classes.downloadIconContainer}>
          <img src={downloadIcon} alt="download icon" />
          <span className={classes.downloadIconText}>Ներբեռնել</span>
        </div>
      </div>
    </div>
  );
};

export default UserDocuments;
