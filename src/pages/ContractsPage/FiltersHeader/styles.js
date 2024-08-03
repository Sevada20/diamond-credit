import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    filtersHeader: {
      borderRadius: `${theme.borderRadius.large} ${theme.borderRadius.large} 0 0`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: 24,
      background:
        "linear-gradient(166.01deg, rgba(66, 0, 255, 0.08) 18%, rgba(184, 155, 232, 0.09) 100%)",
    },
    mainFiltersMenu: {
      display: "flex",
    },
    dates: {
      display: "flex",
      gap: 8,
    },
    mainFilterItem: {
      fontSize: 16,
      color: theme.primaryColor,
      cursor: "pointer",
      borderBottom: "1px solid #8788a1",
      paddingInline: "2.4%",
      paddingBottom: 9,
      whiteSpace: "nowrap",
    },
    active: {
      borderBottom: `3px solid ${theme.primaryColor}`,
    },
  }),
  {
    name: "filters-header",
  }
);

export default useStyles;
