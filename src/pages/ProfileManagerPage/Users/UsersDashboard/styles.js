import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    usersContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: "50px 25px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    addButton: {
      color: theme.textAlternativeBase,
      backgroundColor: theme.primaryColor,
      borderRadius: theme.borderRadius.medium,
      padding: "5px 10px",
      fontSize: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
  }),
  {
    name: "users-dashboard",
  }
);

export default useStyles;
