import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    mainLayoutContainer: {
      display: "flex",
    },
    mainLayout: {
      padding: "20px 30px 20px 132px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundMain,
      width: "100%",
    },
  }),
  {
    name: "main-layout",
  }
);

export default useStyles;
