import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    cashCard: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      width: "100%",
      borderRadius: 20,
      padding: "25px 24px",
      background: ({ id }) => {
        if (id === 1) {
          return "linear-gradient(132.34deg, rgba(158, 209, 237, 0.9), rgba(198, 198, 198, 0.2) 62%)";
        } else if (id === 2) {
          return "linear-gradient(131.08deg, rgba(241, 191, 163, 0.9), rgba(198, 198, 198, 0.2) 60%)";
        } else {
          return "linear-gradient(131.68deg, rgba(224, 198, 240, 0.9),rgba(198, 198, 198, 0.2) 66%)";
        }
      },
    },
    icons: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "100px",
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    amount: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.primaryColor,
    },
  }),
  {
    name: "cash-card",
  }
);

export default useStyles;
