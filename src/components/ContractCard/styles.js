import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractCard: {
      padding: "20px 20px 20px 30px",
      backgroundColor: theme.backgroundCard,
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: theme.medium,
      borderLeft: ({ status }) => {
        if (status === true) {
          return `4px solid ${theme.successColor}`;
        } else if (!status) {
          return `4px solid ${theme.warningColor}`;
        } else {
          return `4px solid ${theme.accentColor}`;
        }
      },
    },
    contractInnerCard: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    cardNumber: {
      fontSize: 20,
      color: theme.cardTextColor,
    },
    dateInfo: {
      fontSize: "1rem",
      color: theme.cardTextColor,
    },
    phonesInfoContainer: {
      display: "flex",
    },
    cardInfo: {
      fontSize: "1rem",
      display: "flex",
      flexDirection: "column",
      color: theme.primaryColor,
    },
    cardInfoContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
    },
    viewIcon: {
      cursor: "pointer",
    },
  }),
  {
    name: "contract-card",
  }
);

export default useStyles;
