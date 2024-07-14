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
      backgroundColor: "#f5faff",
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
    paymentOptionButton: {
      ...baseButtonsStyles,
      borderRadius: theme.borderRadius.small,
      color: theme.primaryColor,
      border: `1px solid ${theme.textStrong}`,
      backgroundColor: theme.backgroundBase,
    },
    payButton: {
      ...baseButtonsStyles,
      borderRadius: theme.borderRadius.small,
      color: theme.backgroundBase,
      backgroundColor: theme.primaryColor,
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
      width: 700,
      borderRadius: theme.borderRadius.small,
      ...baseInputStyles,
      fontSize: 18,
    },
    infoInput: {
      ...baseInputStyles,
      borderRadius: theme.borderRadius.small,
      fontSize: 18,
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
  }),
  {
    name: "payments-list",
  }
);

export default useStyles;
