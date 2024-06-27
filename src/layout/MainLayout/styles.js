import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    mainLayoutContainer: {
      display: "flex",
    },
    mainLayout: {
      padding: "20px 0px 00px 113px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.backgroundMain,
      width: "100%",
      height: ({ isNewContract }) => (isNewContract ? "100vh" : ""),
    },
  }),
  {
    name: "main-layout",
  }
);

export default useStyles;
