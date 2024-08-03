import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    greeting: {
      display: "flex",
      alignItems: "center",
    },
    titleGreeting: {
      fontSize: 16,
      color: theme.textStrong,
    },
    firstSectionRow: {
      marginTop: 20,
      display: "grid",
      gridTemplateColumns: "2fr 2fr 2fr 3fr 3fr",
      columnGap: "25px",
    },
  }),
  {
    name: "home-page",
  }
);

export default useStyles;
