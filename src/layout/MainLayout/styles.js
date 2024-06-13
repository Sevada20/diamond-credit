import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    mainLayout: {
      display: "flex",
      height: "100vh",
    },
  }),
  {
    name: "main-layout",
  }
);

export default useStyles;
