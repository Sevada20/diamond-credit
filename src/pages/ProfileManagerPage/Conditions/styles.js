import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    conditionsContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      paddingBlock: 25,
      height: "100%",
    },
    menuItem: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.primaryColor,
      cursor: "pointer",
      borderBottom: `1px solid ${theme.lightText}`,
      paddingInline: "2.4%",
      paddingBottom: 9,
    },
    active: {
      borderBottom: `3px solid ${theme.primaryColor}`,
    },
  }),
  {
    name: "conditions",
  }
);

export default useStyles;
