import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    filtersHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    mainFiltersMenu: {
      display: "flex",
      gap: "4.5%",
    },
    mainFilterItem: {
      fontSize: 14,
      color: theme.primaryColor,
      cursor: "pointer",
      paddingBottom: 9,
      whiteSpace: "nowrap",
    },
    active: {
      borderBottom: `3px solid ${theme.idColor}`,
      color: theme.idColor,
    },
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
    downloadIcon: {
      cursor: "pointer",
    },
  }),
  {
    name: "cash-flow-header",
  }
);

export default useStyles;
