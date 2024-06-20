import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    sideBarContainer: {
      backgroundColor: theme.backgroundBase,
      padding: "30px 0px 36px 0px",
      height: "100vh",
      position: "fixed",
    },
    logo: {
      paddingInline: 10,
      fontSize: "18",
      color: theme.primaryColor,
    },
    sidebarMenuContainer: {
      paddingTop: "20px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
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
      gap: "20px",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    settingsContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
    },
  }),
  {
    name: "sidebar",
  }
);

export default useStyles;
