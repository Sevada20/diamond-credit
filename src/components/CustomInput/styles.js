import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
    },
    label: {
      fontSize: ({ customStyles }) => customStyles?.fontSize || 14,
      color: theme.primaryColor,
    },
    input: {
      backgroundColor: theme.backgroundBase,
      width: "100%",
      borderRadius: theme.borderRadius.small,
      border: "none",
      padding: 10,
      paddingLeft: ({ customStyles }) => customStyles?.paddingLeft,
    },
  }),
  {
    name: "custom-input",
  }
);

export default useStyles;
