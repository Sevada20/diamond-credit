import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    moneyOutAndInCardContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: "15px 30px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    moreIcon: {
      cursor: "pointer",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    outMoney: {
      backgroundColor: theme.backgroundQuaternary,
      color: theme.buttonBackgroundSecondary,
    },
    inMoney: {
      backgroundColor: theme.backgroundPink,
      color: theme.textPink,
    },
    accountReplenishment: {
      backgroundColor: theme.backgroundLightBlue,
      color: theme.textLightBlue,
    },
    createButton: {
      borderRadius: theme.borderRadius.large,
      border: "none",
      paddingBlock: 5,
      width: "100%",
      cursor: "pointer",
    },
  }),
  {
    name: "money-out-and-in-card",
  }
);

export default useStyles;
