import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    title: {
      fontSize: "2rem",
    },
    authOption: {
      cursor: "pointer",
      borderBottom: `1px solid ${theme.textBase}`,
      padding: "20px 23px",
    },
    authOptionBlock: { marginBottom: "40px" },
    signInFormWrapper: {
      background: "rgba(255, 255, 255, 0.2)",
      marginBottom: "52px",
      borderRadius: "76px",
      marginTop: "52px",
      padding: "95px 25px 200px 25px",
      width: "40%",
      color: theme.textBase,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }),
  {
    name: "signIn-step-1",
  }
);

export default useStyles;
