import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractsList: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 3,
      maxHeight: 635,
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
    name: "contracts-list",
  }
);

export default useStyles;
