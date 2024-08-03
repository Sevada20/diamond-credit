import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractCard: {
      padding: "20px 20px 20px 30px",
      backgroundColor: theme.backgroundCard,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      borderRadius: theme.borderRadius.medium,
      borderLeft: ({ status }) => {
        if (status === "completed") {
          return `4px solid ${theme.successColor}`;
        } else if (status === "initial") {
          return `4px solid ${theme.accentColor}`;
        } else {
          return `4px solid ${theme.warningColor}`;
        }
      },
    },
    contractInnerCard: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    passportInfoContainer: {
      display: "flex",
    },
    cardNumber: {
      fontSize: 20,
      color: theme.cardTextColor,
    },
    dateInfo: {
      fontSize: 16,
      color: theme.cardTextColor,
    },
    phonesInfoContainer: {
      display: "flex",
    },
    cardInfo: {
      fontSize: 16,
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
