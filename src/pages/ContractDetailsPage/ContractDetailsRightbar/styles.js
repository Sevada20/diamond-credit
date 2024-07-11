import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    rightBarContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 25,
    },
    historyContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: "30px 0 25px 0",
    },
    titleContainer: {
      paddingInline: "5%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    contractHistoryListWrapper: {
      paddingInline: 15,
    },
    notesContainer: {
      backgroundColor: theme.backgroundBase,
      padding: "30px 30px 30px 20px",
      borderRadius: theme.borderRadius.large,
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
  }),
  {
    name: "contract-details-rightBar",
  }
);

export default useStyles;
