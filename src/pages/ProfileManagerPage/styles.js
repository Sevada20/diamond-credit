import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    pageContentContainer: {
      display: "flex",
      gap: 22,
      padding: "0 30px 20px 30px",
    },
    contentBlock: {
      width: "80%",
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      margin: 0,
      padding: "22px 0px 22px 40px",
      color: theme.primaryColor,
    },
    menuBlock: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: "50px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 30,
      width: "20%",
    },
    menuItem: {
      fontSize: 20,
      fontWeight: 500,
      color: theme.primaryColor,
      cursor: "pointer",
      border: "none",
      padding: 10,
      borderRadius: theme.borderRadius.small,
    },
    active: {
      backgroundColor: theme.backgroundMain,
    },
  }),
  {
    name: "profile-manager-page",
  }
);

export default useStyles;
