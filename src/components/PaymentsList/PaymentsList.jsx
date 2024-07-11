import { useRef, useState } from "react";
import Modal from "@/UI/Modal/Modal";
import menuIcon from "@/assets/icons/contractsIcons/menu.svg";
import PaymentCard from "../PaymentCard/PaymentCard";
import useStyles from "./styles";

const PaymentsList = ({ payments }) => {
  const classes = useStyles();
  const [paymentsList, setPaymentsList] = useState(payments);
  const [showMenu, setShowMenu] = useState(false);
  const menuIconRef = useRef(null);

  const handleCheckboxChange = (id) => {
    const updatePayments = [...paymentsList];
    const payment = updatePayments.find((payment) => payment.id === id);
    payment.isChecked = !payment.isChecked;
    setPaymentsList(updatePayments);
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
                <span className={classes.menuItem}>Իրացնել գրավի առարկան</span>
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
    </div>
  );
};

export default PaymentsList;
