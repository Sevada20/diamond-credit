import { createUseStyles } from "react-jss";

const baseButtonsStyles = {
  padding: "10px 24px",
  cursor: "pointer",
  fontSize: 16,
};

const baseInputStyles = {
  padding: 10,
  border: "none",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
};

const useStyles = createUseStyles(
  (theme) => ({
    paymentsListContainer: {
      padding: 30,
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
    },
    paymentsListTitleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 40,
      position: "relative",
    },
    paymentsListTitle: {
      fontSize: 28,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    menuIcon: {
      cursor: "pointer",
    },
    menuModalWrapper: {
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.modalBackground,
      position: "absolute",
      right: 0,
      top: 30,
      zIndex: 1000,
    },
    menu: {
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
    menuItem: {
      fontSize: 18,
      color: theme.primaryColor,
      cursor: "pointer",
    },
    paymentsTable: {
      width: "100%",
      borderSpacing: "0 10px",
      borderBottom: `1px solid ${theme.primaryColor}`,
    },
    footerContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
    footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      marginTop: 20,
    },
    textTotal: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    totalAmount: {
      color: theme.primaryColor,
      fontSize: 28,
      fontWeight: 700,
    },
    tableHeader: {
      padding: "10px 10px 10px 60px",
      fontSize: 16,
      color: theme.primaryColor,
    },
    tableHeaderItem: {
      paddingBottom: 10,
      textAlign: "left",
      paddingLeft: 70,
    },
    tableHeaderItemFirst: {
      paddingBottom: 10,
      paddingLeft: 10,
    },
    paymentOptionsContainer: {
      marginTop: 20,
      display: "flex",
      alignItems: "center",
      gap: 10,
      justifyContent: "space-between",
    },
    paymentOptionButtons: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    fullRepaymentOption: {
      ...baseButtonsStyles,
      borderRadius: theme.borderRadius.small,
      color: ({ activePaymentOption }) =>
        activePaymentOption === "Ամբողջական մարում"
          ? theme.backgroundBase
          : theme.primaryColor,
      border: `1px solid ${theme.textStrong}`,
      backgroundColor: ({ activePaymentOption }) =>
        activePaymentOption === "Ամբողջական մարում"
          ? theme.primaryColor
          : theme.backgroundBase,
    },
    paymentOptionButton: {
      ...baseButtonsStyles,
      borderRadius: theme.borderRadius.small,
      color: ({ activePaymentOption }) =>
        activePaymentOption === "Մասնակի մարում"
          ? theme.backgroundBase
          : theme.primaryColor,
      border: `1px solid ${theme.textStrong}`,
      backgroundColor: ({ activePaymentOption }) =>
        activePaymentOption === "Մասնակի մարում"
          ? theme.primaryColor
          : theme.backgroundBase,
    },
    payButton: {
      ...baseButtonsStyles,
      borderRadius: theme.borderRadius.small,
      color: theme.backgroundBase,
      backgroundColor: theme.primaryColor,
      border: "none",
    },
    payButton2: {
      backgroundColor: theme.buttonBackgroundSecondary,
    },
    executionInfoHeaderContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      borderBottom: `1px solid ${theme.lineLightColor}`,
      paddingBottom: 25,
    },
    label: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    executionInfoText: {
      fontSize: 14,
    },
    amountInput: {
      borderRadius: theme.borderRadius.small,
      fontSize: 18,
      color: theme.primaryColor,
      ...baseInputStyles,
    },
    infoInput: {
      ...baseInputStyles,
      borderRadius: theme.borderRadius.small,
      fontSize: 18,
      color: theme.primaryColor,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: 10,
    },
    inputsContainer: {
      display: "flex",
      gap: 30,
      width: "100%",
      marginTop: 30,
    },
    discountModalContainer: {
      display: "flex",
      gap: 41,
    },
    paymentsDetailsContainer: {
      display: "flex",
      alignItems: "center",
      gap: 15,
      marginTop: 30,
    },
    discount: {
      padding: "10px 10px",
      color: theme.primaryColor,
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.backgroundSecondary,
      cursor: "pointer",
    },
    paymentQuantityInput: {
      borderRadius: theme.borderRadius.small,
      border: "none",
      boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
      padding: 9,
      fontSize: 18,
      color: theme.primaryColor,
      width: "57%",
    },
    moneyInfoContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
    },
    quantityMoney: {
      fontSize: 18,
      color: theme.primaryColor,
      whiteSpace: "nowrap",
    },
  }),
  {
    name: "payments-list",
  }
);

export default useStyles;
