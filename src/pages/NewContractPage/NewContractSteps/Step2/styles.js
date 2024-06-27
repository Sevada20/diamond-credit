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
    labelWrapper: {
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
  }),
  {
    name: "new-contract-step-2",
  }
);

export default useStyles;
