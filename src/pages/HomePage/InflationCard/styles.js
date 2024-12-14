import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    inflationCard: {
      borderRadius: 30,
      padding: 15,
      backgroundColor: theme.backgroundBase,
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 10,
    },
    inflationMainInfoContainer: {
      display: "flex",
      alignItems: "start",
      justifyContent: "space-between",
    },
    info: {
      fontSize: 10,
      color: theme.primaryColor,
    },
    infoBlock: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-b/etween",
    },
    amount: {
      fontSize: 32,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    positive: {
      color: theme.successColor,
    },
    negative: {
      color: theme.warningColor,
    },
  }),
  {
    name: "inflation-card",
  }
);

export default useStyles;
