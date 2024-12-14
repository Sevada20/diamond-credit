import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    cashFlowListContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 25,
      maxHeight: ({ showFilters }) => (showFilters ? "300px" : "690px"),
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
    name: "cash-flow-list",
  }
);

export default useStyles;
