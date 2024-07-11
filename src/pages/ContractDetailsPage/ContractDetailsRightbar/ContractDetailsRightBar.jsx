import { useRef, useState } from "react";
import Modal from "@/UI/Modal/Modal";
import { contractsHistoryList } from "@/assets/data/applicationHistoryList";
import menuIcon from "@/assets/icons/contractsIcons/menu.svg";
import HistoryList from "@/components/HistoryList/HistoryList";
import styles from "./styles";
const ContractDetailsRightBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuIconRef = useRef();
  const classes = styles();

  return (
    <div className={classes.rightBarContainer}>
      <div className={classes.historyContainer}>
        <div className={classes.titleContainer}>
          <span className={classes.title}>Պատմություն</span>
          <img
            ref={menuIconRef}
            onClick={() => setShowMenu(!showMenu)}
            className={classes.menuIcon}
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
                  <span className={classes.menuItem}>Արտահանել Exel</span>
                  <span className={classes.menuItem}>Արտահանել Քաղվածք</span>
                </div>
              </Modal>
            </div>
          )}
        </div>
        <div className={classes.contractHistoryListWrapper}>
          <HistoryList historyList={contractsHistoryList} />
        </div>
      </div>
      <div className={classes.notesContainer}></div>
    </div>
  );
};

export default ContractDetailsRightBar;
