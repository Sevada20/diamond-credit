import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
    },
    contractHeaderInfo: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
    },
    contractDate: {
      fontSize: 14,
      fontWeight: 600,
      color: theme.labelSecondaryColor,
      fontFamily: "Poppins",
    },
    contractType: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    historyActions: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    fileIcon: {
      padding: 5,
      borderRadius: "50%",
      backgroundColor: theme.backgroundSecondary,
      cursor: "pointer",
    },
    showDetailsIconsWrapper: {
      cursor: "pointer",
      ...theme.mixins.flexCenter,
    },
    historyDetails: {
      display: "flex",
      gap: "15%",
      marginTop: 10,
    },
    detailsColumn: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    provisionPrincipalDetails: {
      marginTop: 10,
    },
    contractSigningDetails: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    signingDetailsRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    detailsRow: {
      display: "flex",
      gap: "15%",
      marginTop: 10,
    },
    detailsItemBlock: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    title: {
      fontSize: 12,
      color: theme.lightText,
    },
    value: {
      fontSize: 14,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    totalAmount: {
      fontSize: 14,
      fontWeight: 500,
      color: theme.successColor,
    },
  }),
  {
    name: "history-card",
  }
);

export default useStyles;
