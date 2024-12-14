import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    collateralTypesContainer: {
      padding: "28px 5px 28px 50px",
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    addButtonContainer: {
      paddingRight: 45,
    },
    addButtonText: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.primaryColor,
      cursor: "pointer",
    },
    line: {
      height: 0.3,
      width: "100%",
      backgroundColor: theme.borderColor,
      marginTop: 10,
    },
    categoriesContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingRight: 45,
      marginTop: 20,
      maxHeight: 800,
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
    name: "collateral-types",
  }
);
export default useStyles;
