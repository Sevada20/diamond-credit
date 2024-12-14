import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    signInForm: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 15,
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
      gap: 5,
    },
    checkbox: {
      width: 16,
      height: 16,
      cursor: "pointer",
    },
    checkboxLabel: {
      cursor: "pointer",
    },
    forgotPassword: {
      fontSize: 14,
      color: "#FFC48E",
      cursor: "pointer",
    },
    signInBtn: {
      width: "50%",
      paddingBlock: 10,
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.primaryColor,
      color: theme.backgroundBase,
      border: "none",
      cursor: "pointer",
    },
  }),
  {
    name: "signIn-form",
  }
);

export default useStyles;
