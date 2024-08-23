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
    card: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
    },
  }),
  {
    name: "home-page",
  }
);

export default useStyles;
