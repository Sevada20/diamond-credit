import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    applicationHistoryListContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 25,
      maxHeight: 125,
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: 4,
      },
      "&::-webkit-scrollbar-track": {
        background: "#d7d7e0",
        borderRadius: theme.borderRadius.large,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#b0a9ca",
        borderRadius: theme.borderRadius.large,
        backgroundClip: "content-box",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.primaryColor,
      },
    },
  }),
  {
    name: "application-history-list",
  }
);

export default useStyles;
