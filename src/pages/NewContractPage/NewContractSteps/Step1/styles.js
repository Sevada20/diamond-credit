import { createUseStyles } from "react-jss";

const baseButtonStyles = {
  display: "flex",
  padding: "10px 24px",
  cursor: "pointer",
  fontSize: "1rem",
};

const useStyles = createUseStyles(
  (theme) => ({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
    },
    inputsContainer: {
      display: "flex",
      gap: 30,
      width: "100%",
    },
    dateInputs: {
      display: "flex",
      gap: 6,
    },
    dateInputsWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
    },
    dateInput: {
      border: "none",
      borderRadius: theme.small,
      width: "11%",
      paddingBlock: 10,
      paddingLeft: 15,
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      width: "100%",
    },
    label: {
      fontSize: "1rem",
      fontWeight: 600,
      color: theme.primaryColor,
    },
    input: {
      border: "none",
      borderRadius: theme.small,
      width: "100%",
      padding: "10px 13px",
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 15,
      marginTop: 20,
    },
    cancelBtn: {
      ...baseButtonStyles,
      backgroundColor: "#9992cb",
      borderRadius: theme.small,
      color: theme.textSecondary,
      border: "none",
    },
    submitBtn: {
      ...baseButtonStyles,
      borderRadius: theme.small,
      color: theme.primaryColor,
      background: "transparent",
    },
    continueBtn: {
      ...baseButtonStyles,
      borderRadius: theme.small,
      backgroundColor: theme.primaryColor,
      color: theme.textBase,
      border: "none",
    },
  }),
  {
    name: "new-contract-step-1",
  }
);

export default useStyles;
