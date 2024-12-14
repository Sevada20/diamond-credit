import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    step1Container: {},
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
      fontSize: 16,
      color: theme.primaryColor,
      borderRadius: theme.borderRadius.small,
      padding: 10,
      border: "none",
      backgroundColor: theme.backgroundBase,
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    },
    divider: {
      marginBlock: 20,
      height: 0.3,
      width: "100%",
      backgroundColor: theme.border,
      margin: "10px 0",
    },
    mainDataContainer: {
      width: "27%",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
  }),
  {
    name: "step1",
  }
);

export default useStyles;
