import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    titleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "28px 24px 0 50px",
    },
    addButton: {
      color: theme.textAlternativeBase,
      backgroundColor: theme.primaryColor,
      borderRadius: theme.borderRadius.medium,
      padding: "5px 10px",
      fontSize: 14,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    branchesListContainer: {
      marginTop: 28,
      display: "flex",
      flexDirection: "column",
      paddingInline: 24,
    },
    branchesListTitles: {
      paddingLeft: 235,
      display: "flex",
      gap: 85,
      justifyContent: "flex-start",
    },
    branchesListTitle: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.primaryColor,
    },
  }),
  {
    name: "branches",
  }
);
export default useStyles;
