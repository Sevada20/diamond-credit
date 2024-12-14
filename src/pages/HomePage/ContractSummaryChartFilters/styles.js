import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractSummaryChartFiltersContainer: {
      width: "100%",
    },
    mainFilter: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 20px",
      width: "100%",
      marginBottom: 30,
      border: `1px solid ${theme.primaryColor}`,
      borderRadius: theme.borderRadius.large,
      cursor: "pointer",
    },
    indicator: {
      borderRadius: "50%",
      backgroundColor: theme.barChartColor1,
      width: 15,
      height: 15,
    },
    filtersList: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    filterItemContainer: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: 14,
      color: theme.lineChartColor1,
    },
    radio: {
      width: 15,
      height: 15,
    },
    percent: {
      color: theme.lineChartColor,
      fontSize: 14,
      whiteSpace: "nowrap",
    },
  }),
  {
    name: "contract-summary-chart-filters",
  }
);

export default useStyles;
