import { createUseStyles } from "react-jss";

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
      borderRadius: theme.borderRadius.small,
      width: "9.5%",
      padding: 10,
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      width: "100%",
    },
    label: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    input: {
      border: "none",
      borderRadius: theme.borderRadius.small,
      width: "100%",
      padding: "10px 13px",
    },
  }),
  {
    name: "new-contract-step-1",
  }
);

export default useStyles;
