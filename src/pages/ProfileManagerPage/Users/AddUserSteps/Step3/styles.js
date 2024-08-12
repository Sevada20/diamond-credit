import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    step3Container: {
      display: "flex",
      flexDirection: "column",
      gap: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    summaryInnerContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 30,
      maxHeight: 545,
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
    summaryInfoItemBlock: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      paddingTop: 15,
    },
    fullName: {
      paddingInline: "5.7%",
      fontSize: 20,
      fontWeight: 700,
    },
    summaryInfoContainer: {
      display: "flex",
      flexDirection: "column",
      paddingInline: "5.7%",
    },
    summaryInfoTitleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: 15,
      borderBottom: `1px solid ${theme.primaryColor}`,
    },
    summaryInfoTitle: {
      fontSize: 18,
      color: theme.labelColor,
    },
    summaryInfoItem: {
      display: "flex",
      alignItems: "center",
      gap: 15,
    },
    summaryPersonalInfo: {
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    name: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.labelColor,
    },
    value: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.primaryColor,
    },
  }),
  {
    name: "step3",
  }
);

export default useStyles;
