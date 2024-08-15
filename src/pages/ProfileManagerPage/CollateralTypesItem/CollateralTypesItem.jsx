import arrowUpIcon from "@/assets/icons/arrows/arrowUpIcon.svg";
import arrowDownIcon from "@/assets/icons/arrows/arrowDownIcon.svg";
import removeIcon from "@/assets/icons/removeIcon.svg";
import styles from "./styles";
import { useState } from "react";

const CollateralTypesItem = ({ name, list, id }) => {
  const classes = styles({ name });
  const [openBlocks, setOpenBlocks] = useState({});
  const [openSubList, setOpenSubList] = useState({});

  const toggleBlock = (blockId) => {
    setOpenBlocks((prev) => ({
      ...prev,
      [blockId]: !prev[blockId],
    }));
  };

  const toggleSubList = (subListId) => {
    setOpenSubList((prev) => ({
      ...prev,
      [subListId]: !prev[subListId],
    }));
  };

  return (
    <>
      <div
        onClick={() => toggleBlock(id)}
        className={classes.collateralTypesItemContainer}
      >
        <div className={classes.nameContainer}>
          <img width={7} src={arrowDownIcon} alt="arrow" />
          <span className={classes.name}>{name}</span>
        </div>
      </div>
      {openBlocks[id] && (
        <div className={classes.mainList}>
          {list.map((item) => (
            <>
              <div
                onClick={() => toggleSubList(item.id)}
                key={item.id}
                className={classes.mainListItem}
              >
                <img width={7} src={arrowDownIcon} alt="arrow" />
                <span className={classes.mainListItemName}>{item.name}</span>
              </div>
              {openSubList[item.id] && (
                <div className={classes.subListContainer}>
                  <span className={classes.addButtonText}>Ավելացնել</span>
                  <div className={classes.line}></div>
                  <div className={classes.subList}>
                    {item.subList.map((subItem) => (
                      <div key={subItem.id} className={classes.subListItem}>
                        <img
                          className={classes.removeIcon}
                          src={removeIcon}
                          alt="remove icon"
                        />
                        <span className={classes.subListItemName}>
                          {subItem.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </>
  );
};

export default CollateralTypesItem;
