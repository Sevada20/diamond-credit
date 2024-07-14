import { useRef, useState } from "react";
import Modal from "@/UI/Modal/Modal";
import menuIcon from "@/assets/icons/contractsIcons/menu.svg";
import PaymentCard from "../PaymentCard/PaymentCard";
import ComplexModal from "@/UI/ComplexModal/ComplexModal";
import useStyles from "./styles";

const PaymentsList = ({ payments }) => {
  const classes = useStyles();
  const [paymentsList, setPaymentsList] = useState(payments);
  const [showMenu, setShowMenu] = useState(false);
  const [executionModal, setExecutionModal] = useState(false);
  const menuIconRef = useRef(null);

  const handleCheckboxChange = (id) => {
    const updatePayments = [...paymentsList];
    const payment = updatePayments.find((payment) => payment.id === id);
    payment.isChecked = !payment.isChecked;
    setPaymentsList(updatePayments);
  };

  const handleMenuItemClick = (item) => {
    if (item === "Իրացնել գրավի առարկան") {
      setExecutionModal(true);
    }
    setShowMenu(false);
  };

  return (
    <div className={classes.paymentsListContainer}>
      <div className={classes.paymentsListTitleContainer}>
        <span className={classes.paymentsListTitle}>No 15480</span>
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
                <span className={classes.menuItem}>Տպել բոլոր փաստաթղթերը</span>
                <span
                  onClick={() => handleMenuItemClick("Իրացնել գրավի առարկան")}
                  className={classes.menuItem}
                >
                  Իրացնել գրավի առարկան
                </span>
              </div>
            </Modal>
          </div>
        )}
      </div>
      <table className={classes.paymentsTable}>
        <thead>
          <tr className={classes.tableHeader}>
            <th className={classes.tableHeaderItemFirst}>Ամսաթիվ</th>
            <th className={classes.tableHeaderItem}>Տոկոս</th>
            <th className={classes.tableHeaderItem}>Տուգանք</th>
            <th className={classes.tableHeaderItem}>ՄԳ</th>
          </tr>
        </thead>
        <tbody>
          {paymentsList.map((payment) => (
            <PaymentCard
              {...payment}
              onCheckboxChange={handleCheckboxChange}
              key={payment.id}
            />
          ))}
        </tbody>
      </table>
      <div className={classes.footerContainer}>
        <div className={classes.footer}>
          <span className={classes.textTotal}>
            Վճարման ենթակա գումարը կազմում է՝
          </span>
          <span className={classes.totalAmount}>0 Դ</span>
        </div>
      </div>
      <div className={classes.paymentOptionsContainer}>
        <div className={classes.paymentOptionButtons}>
          <span className={classes.paymentOptionButton}>
            Վճարողական գումարը
          </span>
          <span className={classes.paymentOptionButton}>
            Վճարողական գումարը
          </span>
        </div>
        <span className={classes.payButton}>Վճարել</span>
      </div>
      {executionModal && (
        <ComplexModal
          isOpen={executionModal}
          onClose={() => setExecutionModal(false)}
          title="Իրացում"
          confirmBtnText="Իրացնել"
          confirmCallback={() => console.log("hello")}
        >
          <div className={classes.executionContainer}>
            <div className={classes.executionInfoHeaderContainer}>
              <label className={classes.label}>Նշել գումարը</label>
              <input
                className={classes.amountInput}
                type="text"
                placeholder="108.530Դ"
              />
              <span className={classes.executionInfoText}>
                մայր գումար՝ 95․000Դ և իրացումից տոկոսագումար՝ 13․530Դ
              </span>
            </div>
            <div className={classes.inputsContainer}>
              <div className={classes.inputContainer}>
                <label className={classes.label}>Հավելվածի համար</label>
                <input className={classes.infoInput} placeholder="65" />
              </div>
              <div className={classes.inputContainer}>
                <label className={classes.label}>Գնորդի տվյալներ</label>
                <input className={classes.infoInput} placeholder="Վահանակ 11" />
              </div>
            </div>
          </div>
        </ComplexModal>
      )}
    </div>
  );
};

export default PaymentsList;
