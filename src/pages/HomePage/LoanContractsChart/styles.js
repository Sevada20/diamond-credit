import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
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
  }),
  {
    name: "loan-contracts-chart",
  }
);

export default useStyles;
