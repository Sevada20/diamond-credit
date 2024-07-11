import { useState } from "react";
import fileIcon from "@/assets/icons/contractsIcons/fileIcon.svg";
import arrowUpIcon from "@/assets/icons/contractsIcons/arrowUpIcon.svg";
import arrowDownIcon from "@/assets/icons/contractsIcons/arrowDownIcon.svg";
import userAvatar from "@/assets/icons/contractsIcons/userAvatar.png";
import styles from "./styles";
import ContractDetailsCardWrapper from "../ContractDetailsCardWrapper/ContractDetailsCardWrapper";
const HistoryCard = ({
  id,
  type,
  provided,
  onTimePayment,
  contractDate,
  contractCategory,
  percentMoney,
  discount,
  delayPayment,
  fine,
  paymentDate,
  totalAmount,
  executor,
}) => {
  const classes = styles();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={classes.historyCardContainer}>
      <div className={classes.cardHeader}>
        <div className={classes.contractHeaderInfo}>
          <span className={classes.contractDate}>{contractDate}</span>
          <span className={classes.contractType}>{contractCategory}</span>
        </div>
        <div className={classes.historyActions}>
          <img className={classes.fileIcon} src={fileIcon} alt="file icon" />
          <div
            className={classes.showDetailsIconsWrapper}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? (
              <img src={arrowUpIcon} alt="arrow icon" />
            ) : (
              <img src={arrowDownIcon} alt="arrow icon" />
            )}
          </div>
        </div>
      </div>
      {showDetails && (
        <>
          {type === "nextPayment" ? (
            <ContractDetailsCardWrapper
              name={executor}
              img={userAvatar}
              id={id}
            >
              <div className={classes.historyDetails}>
                <div className={classes.detailsColumn}>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Տոկոսագումար</span>
                    <span className={classes.value}>{percentMoney} Դ</span>
                  </div>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Զեղչ</span>
                    <span className={classes.value}>{discount} Դ</span>
                  </div>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Ուշացում</span>
                    <span className={classes.value}>{delayPayment} Օր</span>
                  </div>
                </div>
                <div className={classes.detailsColumn}>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Տուգանք</span>
                    <span className={classes.value}>{fine} Դ</span>
                  </div>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Վճ․ ամսաթիվ</span>
                    <span className={classes.value}>{contractDate}</span>
                  </div>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Ընդհանուր</span>
                    <span className={classes.totalAmount}>{totalAmount} Դ</span>
                  </div>
                </div>
              </div>
            </ContractDetailsCardWrapper>
          ) : type === "contractSigning" ? (
            <ContractDetailsCardWrapper
              name={executor}
              img={userAvatar}
              id={id}
            >
              <div className={classes.contractSigningDetails}>
                <div className={classes.signingDetailsRow}>
                  <span>Պայմանագիր</span>
                  <img
                    className={classes.fileIcon}
                    src={fileIcon}
                    alt="file icon"
                  />
                </div>
                <div className={classes.signingDetailsRow}>
                  <span>Գրավատոմս</span>
                  <img
                    className={classes.fileIcon}
                    src={fileIcon}
                    alt="file icon"
                  />
                </div>
              </div>
            </ContractDetailsCardWrapper>
          ) : type === "provisionPrincipalAmount" ? (
            <ContractDetailsCardWrapper
              name={executor}
              img={userAvatar}
              id={id}
            >
              <div className={classes.provisionPrincipalDetails}>
                <div className={classes.detailsItemBlock}>
                  <span className={classes.title}>Տրամադրված</span>
                  <span className={classes.value}>{provided}</span>
                </div>
                <div className={classes.detailsRow}>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Վճ․ ամսաթիվ</span>
                    <span className={classes.value}>{contractDate}</span>
                  </div>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Ընդհանուր</span>
                    <span className={classes.totalAmount}>{totalAmount} Դ</span>
                  </div>
                </div>
              </div>
            </ContractDetailsCardWrapper>
          ) : type === "onTimePayment" ? (
            <ContractDetailsCardWrapper
              name={executor}
              img={userAvatar}
              id={id}
            >
              <div className={classes.provisionPrincipalDetails}>
                <div className={classes.detailsItemBlock}>
                  <span className={classes.title}>Միանվագ վճար</span>
                  <span className={classes.value}>{onTimePayment}</span>
                </div>
                <div className={classes.detailsRow}>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Վճ․ ամսաթիվ</span>
                    <span className={classes.value}>{contractDate}</span>
                  </div>
                  <div className={classes.detailsItemBlock}>
                    <span className={classes.title}>Ընդհանուր</span>
                    <span className={classes.totalAmount}>{totalAmount} Դ</span>
                  </div>
                </div>
              </div>
            </ContractDetailsCardWrapper>
          ) : null}
        </>
      )}
    </div>
  );
};

export default HistoryCard;
