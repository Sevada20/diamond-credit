import { useState } from "react";
import arrowDownIcon from "@/assets/icons/arrows/arrowDownIcon.svg";
import ArrowUpIcon from "@/assets/icons/arrows/ArrowUpIcon";
import fileIcon from "@/assets/icons/contractsIcons/fileIcon.svg";
import userIcon from "@/assets/icons/contractsIcons/userAvatar.png";
import styles from "./styles";

const CashFlowCard = ({ date, cashFlowHistoryDataItems }) => {
  const [showDetailsIds, setShowDetailsIds] = useState([]);
  const classes = styles();

  const handleShowDetails = (id) => {
    setShowDetailsIds(
      showDetailsIds.includes(id)
        ? showDetailsIds.filter((item) => item !== id)
        : [...showDetailsIds, id]
    );
  };

  return (
    <div className={classes.cashFlowCardContainer}>
      <p className={classes.date}>{date}</p>
      <div className={classes.cashFlowCards}>
        {cashFlowHistoryDataItems.map((item) => (
          <div key={item.number}>
            <div
              onClick={() => handleShowDetails(item.number)}
              className={` ${classes.cashFlowCard} ${
                showDetailsIds.includes(item.number) ? classes.active : ""
              }`}
            >
              <div className={classes.buttonShowDetailsAndIdContainer}>
                {showDetailsIds.includes(item.number) ? (
                  <ArrowUpIcon color="#ffffff" />
                ) : (
                  <img src={arrowDownIcon} alt="arrow icon" />
                )}
                <span
                  className={`${classes.cardId} ${
                    showDetailsIds.includes(item.number)
                      ? classes.cardIdActive
                      : ""
                  }`}
                >
                  {item.number}
                </span>
              </div>
              <div className={classes.infoContainer}>
                <span className={classes.value1}>{item.value1}</span>
                <span className={classes.value2}>{item.value2}</span>
                <span className={classes.value3}>{item.value3}</span>
                <span className={classes.value4}>{item.value4}</span>
                <img
                  className={classes.fileIcon}
                  src={fileIcon}
                  alt="file icon"
                />
              </div>
            </div>
            {showDetailsIds.includes(item.number) && (
              <div className={classes.detailsWrapper}>
                <span className={classes.detailsId}>#{item.id}</span>
                <div className={classes.detailsContainer}>
                  <div className={classes.detailsInfoColumn}>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Վճարող</span>
                      <span className={classes.value}>{item.payerName}</span>
                    </div>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Տոկոսագումար</span>
                      <span className={classes.value}>{item.percentMoney}</span>
                    </div>
                  </div>
                  <div className={classes.detailsInfoColumn}>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Վճ․ եղանակը</span>
                      <span className={classes.value}>
                        {item.paymentMethod}
                      </span>
                    </div>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Նպատակ</span>
                      <span className={classes.value}>{item.target}</span>
                    </div>
                  </div>
                  <div className={classes.detailsInfoColumn}>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Պայմ․ համար</span>
                      <span className={classes.value}>
                        {item.contractNumber}
                      </span>
                    </div>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Տուգանք</span>
                      <span className={classes.value}>{item.fine}</span>
                    </div>
                  </div>
                  <div className={classes.detailsInfoColumn}>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Օրդեր</span>
                      <span className={classes.value}>{item.order}</span>
                    </div>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Զեղչ</span>
                      <span
                        className={`${classes.value} ${classes.discountValue}`}
                      >
                        {item.discount}
                      </span>
                    </div>
                  </div>
                  <div className={classes.detailsInfoColumn}>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Ուշացում</span>
                      <span className={classes.value}>{item.delay}</span>
                    </div>
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Մայր գումար</span>
                      <span className={classes.value}>
                        {item.principalAmount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={classes.detailsInfoTotal}>
                  <span className={classes.label}>Ընդհանուր</span>
                  <span className={classes.totalValue}>{item.total}</span>
                </div>
                <div className={classes.detailsInfoFooter}>
                  <div className={classes.userInfoItemContainer}>
                    <img
                      width={28}
                      height={28}
                      src={userIcon}
                      alt="user icon"
                    />
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Կատարող</span>
                      <span className={classes.userName}>{item.executor}</span>
                    </div>
                  </div>
                  <div className={classes.userInfoItemContainer}>
                    <img
                      width={28}
                      height={28}
                      src={userIcon}
                      alt="user icon"
                    />
                    <div className={classes.detailsInfoItem}>
                      <span className={classes.label}>Հաստատող</span>
                      <span className={classes.userName}>
                        {item.confirmatory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CashFlowCard;
