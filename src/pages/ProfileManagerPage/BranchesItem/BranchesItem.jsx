import recycleBinIcon from "@/assets/icons/recycleBinIcon.svg";
import editIcon from "@/assets/icons/contractsIcons/editIcon.svg";
import arrowUpIcon from "@/assets/icons/arrows/arrowUpIcon.svg";
import arrowDownIcon from "@/assets/icons/arrows/arrowDownIcon.svg";
import styles from "./styles";
import { useState } from "react";
const BranchesItem = ({
  id,
  name,
  license,
  employees,
  insurance,
  involved,
  director,
  teamLeader,
  customerServiceSpecialist,
  creditSpecialist,
  jeweler,
}) => {
  const classes = styles();
  const [openBlocks, setOpenBlocks] = useState({});

  const toggleBlock = (blockId) => {
    setOpenBlocks((prev) => ({
      ...prev,
      [blockId]: !prev[blockId],
    }));
  };

  return (
    <>
      <div
        onClick={() => toggleBlock(id)}
        className={`${classes.branchesItemContainer} ${
          openBlocks[id] && classes.open
        }`}
      >
        <div className={classes.nameContainer}>
          {openBlocks[id] ? (
            <img src={arrowUpIcon} alt="arrow" />
          ) : (
            <img src={arrowDownIcon} alt="arrow" />
          )}
          <span className={classes.branchName}>{name} մ/ճ</span>
        </div>
        <span className={classes.infoItem}>{license}</span>
        <span className={classes.infoItem}>{employees} Աշխատակից</span>
        <span className={classes.infoItem}>{insurance} Դ</span>
        <span className={classes.infoItem}>{involved} Դ</span>
        <div className={classes.actionsIconsContainer}>
          <img
            className={classes.actionIcon}
            width={14}
            src={editIcon}
            alt="edit icon"
          />
          <img
            className={classes.actionIcon}
            src={recycleBinIcon}
            alt="delete icon"
          />
        </div>
      </div>
      {openBlocks[id] && (
        <div className={classes.branchItemDetailsContainer}>
          <div className={classes.detailsInfoItem}>
            <span className={classes.detailsInfoItemName}>Տնօրեն</span>
            <span className={classes.detailsInfoItemValue}>#{director}</span>
          </div>
          <div className={classes.detailsInfoItem}>
            <span className={classes.detailsInfoItemName}>Թիմի ղեկավար</span>
            <span className={classes.detailsInfoItemValue}>#{teamLeader}</span>
          </div>
          <div className={classes.detailsInfoItem}>
            <span className={classes.detailsInfoItemName}>
              Հաճ․ սպ․ մասնագետ
            </span>
            <span className={classes.detailsInfoItemValue}>
              #{customerServiceSpecialist}
            </span>
          </div>
          <div className={classes.detailsInfoItem}>
            <span className={classes.detailsInfoItemName}>Վարկ․ մասնագետ</span>
            <span className={classes.detailsInfoItemValue}>
              #{creditSpecialist}
            </span>
          </div>
          <div className={classes.detailsInfoItem}>
            <span className={classes.detailsInfoItemName}>Ոսկերիչ</span>
            <span className={classes.detailsInfoItemValue}>#{jeweler}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default BranchesItem;
