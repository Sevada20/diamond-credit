import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    step1Container: {
      backgroundColor: theme.backgroundBase,
      padding: 50,
      borderRadius: theme.borderRadius.large,
      marginTop: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    inputsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      columnGap: 30,
      rowGap: 10,
      maxWidth: "100%",
      marginTop: 20,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    dateInputsWrapper: {
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    dateInputs: {
      display: "flex",
      gap: 8,
    },
    dateInput: {
      width: 65,
    },
    input: {
      borderRadius: theme.borderRadius.small,
      padding: 10,
      border: "none",
      backgroundColor: theme.backgroundBase,
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    },
  }),
  {
    name: "step1",
  }
);

export default useStyles;
