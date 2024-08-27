import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    homePageContainer: {
      padding: "20px 30px",
    },
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
      gridTemplateColumns: "1fr 1fr",
      width: "100%",
      columnGap: 15,
    },
    documentsAndTasksContainer: {
      display: "flex",
      justifyContent: "space-between",
      columnGap: 10,
      width: "100%",
    },
    financialCardListWrapper: {
      display: "flex",
      justifyContent: "space-between",
      columnGap: 15,
      width: "100%",
    },
    tasksContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: 20,
    },
    secondSectionRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "15px",
      marginTop: 15,
    },
    moneyOutAndInListContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 15,
      justifyContent: "space-between",
    },
    card: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
    },
    pieChartsContainer: {
      display: "flex",
      gap: 10,
      width: "100%",
      height: "100%",
    },
    calendarWrapper: {
      borderRadius: 30,
      width: "100%",
      height: "100%",
    },
    clientsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    chartsContainer: {
      width: "100%",
      display: "flex",
      gap: 15,
    },
    loanContractsChartWrapper: {
      width: "50%",
      marginTop: 15,
      backgroundColor: "white",
      padding: 25,
      borderRadius: 30,
    },
    contractSummaryBarChartWrapper: {
      width: "50%",
      border: "2px solid red",
      marginTop: 15,
      backgroundColor: "white",
      padding: 25,
      borderRadius: 30,
      display: "flex",
    },
  }),
  {
    name: "home-page",
  }
);

export default useStyles;
