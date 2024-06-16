import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    sidebarContainer: {
      backgroundColor: theme.backgroundBase,
      height: "100%",
    },
    title: {
      marginBottom: "44px",
      fontSize: "18",
      color: theme.primaryColor,
    },
    sidebarMenuContainer: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
    },
    iconLink: {
      padding: "8px",
      width: "45px",
      height: "45px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    activeLink: {
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },
    iconsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
      height: "100%",
    },
    settingsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "25px",
    },
  }),
  {
    name: "sidebar",
  }
);

export default useStyles;
