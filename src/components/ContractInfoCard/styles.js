import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractInfoCard: {
      width: "100%",
      padding: "25px 0 25px 24px",
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      display: "flex",
      alignItems: "center",
      gap: 20,
    },
    icon: {
      width: 73,
      height: 73,
      borderRadius: "50%",
      background:
        "linear-gradient(180deg, rgba(94, 97, 162, 0.85),rgba(184, 151, 255, 0.72))",
      ...theme.mixins.flexCenter,
    },
    infoBlock: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    title: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    amount: {
      fontSize: 32,
      fontWeight: 600,
      color: theme.textAlternativeStrong,
    },
    fluctuationQuantity: {
      fontSize: 12,
      color: ({ growthFluctuation }) =>
        growthFluctuation ? "#00ad4f" : theme.errorColor,
    },
    fluctuationText: {
      fontSize: 12,
      color: theme.textAlternativeStrong,
    },
  }),
  {
    name: "contract-info-card",
  }
);

export default useStyles;
