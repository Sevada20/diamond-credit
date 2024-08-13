import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    renderInputsContainer: {
      display: "flex",
      gap: 28,
    },
    inputContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    label: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    input: {
      padding: 10,
      borderRadius: theme.borderRadius.small,
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      border: "none",
      backgroundColor: theme.backgroundBase,
    },
  }),
  { name: "render-inputs" }
);

export default useStyles;
