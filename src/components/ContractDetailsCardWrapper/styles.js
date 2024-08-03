import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    cardWrapper: {
      width: "100%",
      backgroundColor: theme.backgroundSecondary,
      borderRadius: theme.borderRadius.large,
      padding: "20px 22px",
      marginTop: 10,
    },
    historyId: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.idColor,
    },
    userContainer: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      borderTop: `0.3px solid ${theme.lightGray}`,
      marginTop: 10,
      paddingTop: 10,
    },
    userInfo: {
      display: "flex",
      flexDirection: "column",
    },
    userRole: {
      fontSize: 9,
      color: theme.lightText,
    },
    userName: {
      fontSize: 12,
      color: theme.primaryColor,
      fontWeight: 700,
    },
  }),
  {
    name: "Contract-details-card-wrapper",
  }
);

export default useStyles;
