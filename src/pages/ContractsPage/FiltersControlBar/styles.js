import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    filtersControlBar: {
      display: "flex",
      alignItems: "center",
      gap: 15,
    },
    buttonBlock: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
    },
    buttonText: {
      fontSize: 12,
      color: theme.primaryColor,
    },
  }),
  {
    name: "filters-control-bar",
  }
);

export default useStyles;
