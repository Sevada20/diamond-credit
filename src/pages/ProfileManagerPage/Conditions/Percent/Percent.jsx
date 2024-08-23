import { useState } from "react";
import { percentList } from "@/assets/data/profileManager";
import editIcon from "@/assets/icons/contractsIcons/editIcon.svg";
import coinIcon from "@/assets/icons/contractsIcons/coinIcon.svg";
import PlusIcon from "@/assets/icons/PlusIcon";
import styles from "./styles";
const Percent = () => {
  const classes = styles();
  const [isEditing, setIsEditing] = useState(false);
  const [percentData, setPercentData] = useState({});

  return (
    <div className={classes.percentContainer}>
      <div className={classes.titleContainer}>
        <span className={classes.title}>Տոկոսադրույքներ</span>
        <div className={classes.editButton} onClick={() => setIsEditing(true)}>
          <img width={19} src={editIcon} alt="edit icon" />
          <span className={classes.editButtonText}>Խմբագրել</span>
        </div>
      </div>
      <div className={classes.percentListMainContainer}>
        {percentList.map((item) => (
          <div key={item.id} className={classes.percentItemContainer}>
            <div className={classes.percentTitleContainer}>
              <span className={classes.percentTitle}>{item.title}</span>
              {item.percent &&
                (isEditing ? (
                  <input
                    placeholder={item.percent}
                    className={classes.mainPercentInput}
                  />
                ) : (
                  <span className={classes.techniquePercent}>
                    {item.percent} %
                  </span>
                ))}
            </div>
            <div className={classes.percentListContainer}>
              {item.percents.map((percent) => (
                <div key={percent.id} className={classes.percentItem}>
                  <div className={classes.intervalContainer}>
                    {isEditing ? (
                      <div className={classes.inputWithIcon}>
                        <img
                          className={classes.coinIconAbsolute}
                          src={coinIcon}
                          alt="Coin icon"
                        />
                        <div className={classes.inputWithIcon}>
                          <span className={classes.subLabel}>
                            {item.labelFrom}
                          </span>
                          <input
                            className={classes.rightInput}
                            placeholder={percent.from}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className={classes.intervalNumberBlock}>
                        <img
                          className={classes.coinIcon}
                          src={coinIcon}
                          alt="Coin icon"
                        />
                        <span className={classes.intervalNumber}>
                          {percent.from}
                        </span>
                      </div>
                    )}
                    {!isEditing && <div className={classes.line}></div>}
                    {isEditing ? (
                      <div className={classes.inputWithIcon}>
                        <img
                          className={classes.coinIconAbsolute}
                          src={coinIcon}
                          alt="Coin icon"
                        />
                        <div className={classes.inputWithIcon}>
                          <span className={classes.subLabel}>
                            {item.labelFrom}
                          </span>
                          <input
                            className={classes.rightInput}
                            placeholder={percent.to}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className={classes.intervalNumberBlock}>
                        <img
                          className={classes.coinIcon}
                          src={coinIcon}
                          alt="Coin icon"
                        />
                        <span className={classes.intervalNumber}>
                          {percent.to}
                        </span>
                      </div>
                    )}
                  </div>
                  {isEditing ? (
                    <input
                      className={classes.percentInput}
                      placeholder={percent.percent}
                    />
                  ) : (
                    <div className={classes.percentBlock}>
                      {percent.percent} %
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={classes.addButton}>
              <div className={classes.addIconWrapper}>
                <PlusIcon color="black" />
              </div>
              <span>Ավելացնել</span>
            </div>
            {percentList.indexOf(item) !== percentList.length - 1 && (
              <div className={classes.divider}></div>
            )}
          </div>
        ))}
        {isEditing && (
          <div className={classes.actionButtonsContainer}>
            <button
              onClick={() => setIsEditing(false)}
              className={classes.cancelButton}
            >
              Չեղարկել
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className={classes.saveButton}
            >
              Հաստատել
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Percent;
