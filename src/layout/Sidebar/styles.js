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
      fontSize: 18,
      color: theme.primaryColor,
    },
    sidebarMenuContainer: {
      paddingTop: 20,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    iconLink: {
      width: 60,
      height: 60,
      ...theme.mixins.flexCenter,
    },
    settingsContainer: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 30,
    },
    activeLink: {
      backgroundColor: theme.primaryColor,
      borderRadius: "50%",
    },
    iconsContainer: {
      display: "flex",
      gap: 20,
      flexDirection: "column",
      justifyContent: "space-between",
    },
  }),
  {
    name: "sidebar",
  }
);

export default useStyles;
