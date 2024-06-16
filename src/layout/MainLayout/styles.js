import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    mainLayoutContainer: {
      display: "flex",
      height: "100vh",
    },
    mainLayout: {
      padding: "20px 30px 20px 30px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundMain,
      width: "100%",
      height: "100%",
    },
  }),
  {
    name: "main-layout",
  }
);

export default useStyles;
