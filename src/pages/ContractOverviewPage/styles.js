import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    pageContainer: {
      marginInline: 25,
    },
    contractDescriptionContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 25,
      padding: "15px 30px",
      marginTop: 25,
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
    },
    filterBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    description: {
      fontSize: 16,
      color: theme.textLight,
    },
    contractHistoryContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      marginTop: 25,
      padding: "15px 30px 5px 30px",
    },
    historyTitle: {
      fontSize: 18,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    filterMenu: {
      display: "flex",
    },
    filterMenuItem: {
      padding: "0 10px 10px 10px",
      fontSize: 14,
      color: theme.textLight,
      borderBottom: "1px solid #888a8d",
      cursor: "pointer",
    },
    active: {
      borderBottom: `3px solid ${theme.primaryColor}`,
    },
  }),
  {
    name: "contract-overview-page",
  }
);

export default useStyles;
