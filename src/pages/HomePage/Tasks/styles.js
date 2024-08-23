import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    tasksContainer: {
      width: "100%",
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      display: "flex",
      flexDirection: "column",
      gap: 15,
      padding: 20,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 18,
      color: theme.primaryColor,
    },
    taskItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      padding: "2% 3%",
      borderRadius: theme.borderRadius.secondaryMedium,
    },
    moreButton: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      cursor: "pointer",
    },
    taskName: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.textMutedTertiary,
    },
    taskInfo: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    taskTime: {
      fontSize: 12,
      color: theme.lightTextSecondary,
    },
    completionProcess: {
      whiteSpace: "nowrap",
      fontSize: 12,
      color: theme.textBase,
      padding: "3px 8px",
      borderRadius: theme.borderRadius.secondaryMedium,
    },
    completed: {
      backgroundColor: theme.successColorSecondary,
    },
    inProgress: {
      backgroundColor: theme.inProgressColor,
    },
    toDo: {
      backgroundColor: theme.textTertiary,
    },
  }),
  {
    name: "tasks",
  }
);

export default useStyles;
