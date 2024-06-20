import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    inputContainer: {
      width: "100%",
    },
    label: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    input: {
      backgroundColor: theme.backgroundBase,
      width: "100%",
      borderRadius: theme.small,
      border: "none",
      padding: 10,
      marginTop: 6,
    },
  }),
  {
    name: "custom-input",
  }
);

export default useStyles;
