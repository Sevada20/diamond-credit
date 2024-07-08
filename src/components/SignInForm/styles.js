import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    signInForm: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    signInBtnWrapper: {
      marginTop: 32,
      display: "flex",
      justifyContent: "center",
    },
    formPasswordActions: {
      display: "flex",
      justifyContent: "space-between",
    },
    checkboxGroup: {
      display: "flex",
      gap: "5px",
    },
    checkbox: { width: "16px", height: "16px", cursor: "pointer" },
    checkboxLabel: { cursor: "pointer" },
    forgotPassword: { fontSize: "14px", color: "#FFC48E", cursor: "pointer" },
    signInBtn: {
      width: "50%",
      paddingBlock: "10px",
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.primaryColor,
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
  }),
  {
    name: "signIn-form",
  }
);

export default useStyles;
