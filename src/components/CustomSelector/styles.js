import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    selector: {
      width: "100%",
    },
    label: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    select: {
      backgroundColor: theme.backgroundBase,
      width: "100%",
      borderRadius: theme.small,
      border: "none",
      padding: 10,
      marginTop: 6,
    },
  }),
  {
    name: "custom-selector",
  }
);

export default useStyles;
