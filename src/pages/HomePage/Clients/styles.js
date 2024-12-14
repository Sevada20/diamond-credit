import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    clientsContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    clientsList: {
      display: "flex",
      alignItems: "center",
    },
    clientImage: {
      borderRadius: "50%",
      border: " 2px solid white",
      marginLeft: "-15px",
      zIndex: 1,
      width: 40,
      height: 40,
    },
    createClientButton: {
      border: `1px solid ${theme.primaryColor}`,
      padding: 10,
      borderRadius: theme.borderRadius.large,
      cursor: "pointer",
      backgroundColor: theme.backgroundBase,
    },
    createClientButtonText: {
      fontSize: 18,
      fontWeight: 500,
      color: theme.textStrong,
    },
  }),
  {
    name: "clients",
  }
);

export default useStyles;
