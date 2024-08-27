import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    loanContractsChartContainer: {
      width: "100%",
    },
    title: {
      fontSize: 16,
      color: theme.lineChartColor,
    },
    titlesContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: 700,
      color: theme.lineChartColor1,
    },
    chartContainer: {
      display: "flex",
      width: "80%",
      height: "100%",
      alignItems: "center",
    },
  }),
  {
    name: "contract-summary-bar-chart",
  }
);

export default useStyles;
