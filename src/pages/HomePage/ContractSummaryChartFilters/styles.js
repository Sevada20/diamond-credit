import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractSummaryChartFiltersContainer: {
      width: "100%",
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
  }),
  {
    name: "contract-summary-chart-filters",
  }
);

export default useStyles;
