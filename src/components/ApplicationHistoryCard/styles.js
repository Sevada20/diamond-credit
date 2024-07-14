import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    applicationHistoryCard: {
      display: "flex",
      gap: "8%",
    },
    date: {
      fontSize: 14,
      fontWeight: 600,
      color: theme.labelSecondaryColor,
    },
    discount: {
      fontSize: 14,
      color: theme.textStrong,
      whiteSpace: "nowrap",
    },
    approvedStatus: {
      fontSize: 14,
      color: ({ approved }) =>
        approved ? theme.approvedColor : theme.rejectedColor,
    },
    userContainer: {
      display: "flex",
      alignItems: "center",
      gap: 5,
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
    name: "application-history-card",
  }
);

export default useStyles;
