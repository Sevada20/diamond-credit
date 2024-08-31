import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    loanContractsChartContainer: {
      width: "98%",
    },
    title: {
      fontSize: 16,
      color: theme.lineChartColor,
    },
    subtitleContainer: {
      display: "flex",
      gap: 5,
      alignItems: "center",
      justifyContent: "space-between",
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
    divider: {
      padding: 0.5,
      marginInline: 10,
      height: "65%",
      backgroundColor: theme.barChartColor,
    },
    buttonsContainer: {
      paddingBlock: 9,
      backgroundColor: theme.backgroundQuinary,
      borderRadius: theme.borderRadius.secondaryMedium,
    },
    button: {
      color: theme.lineChartColor,
      borderRadius: theme.borderRadius.secondaryMedium,
      padding: 8,
      cursor: "pointer",
    },
    active: {
      backgroundColor: theme.lineChartColor1,
      color: theme.textBase,
    },
  }),
  {
    name: "contract-summary-bar-chart",
  }
);

export default useStyles;
