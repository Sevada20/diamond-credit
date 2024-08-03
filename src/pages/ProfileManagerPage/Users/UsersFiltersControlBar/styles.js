import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    filtersControlBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      color: theme.primaryColor,
    },
    actionsContainer: {
      display: "flex",
      alignItems: "center",
      gap: 20,
    },
    buttonBlock: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer",
    },
    buttonText: {
      fontSize: 14,
      fontWeight: 500,
      color: theme.primaryColor,
    },
  }),
  {
    name: "usersFiltersControlBar",
  }
);

export default useStyles;
