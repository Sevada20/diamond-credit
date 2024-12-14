import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    historyListContainer: {
      marginTop: 30,
      display: "flex",
      flexDirection: "column",
      gap: 30,
      maxHeight: 505,
      overflowY: "auto",
      paddingRight: 5,
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
    name: "history-list",
  }
);

export default useStyles;
