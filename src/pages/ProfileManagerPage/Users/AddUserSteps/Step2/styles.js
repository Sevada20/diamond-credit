import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    step2Container: {},
    title: {
      fontSize: 24,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    description: {
      marginTop: 5,
      marginBottom: 30,
      fontSize: 16,
      color: theme.primaryColor,
    },
    advantagesBlock: {
      padding: "20px 50px",
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    },
    advantagesContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    showAdvantagesButton: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      cursor: "pointer",
      maxWidth: "max-content",
    },
    showAdvantageIconWrapper: {
      width: 24,
      height: 24,
      backgroundColor: theme.primaryColor,
      borderRadius: theme.borderRadius.tiny,
      ...theme.mixins.flexCenter,
    },
    advantagesList: {
      paddingInline: 50,
      paddingTop: 32,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    advantage: {
      paddingBottom: 10,
      display: "flex",
      alignItems: "center",
      gap: 4,
      borderBottom: `0.3px solid ${theme.darkGray}`,
    },
    checkbox: {
      width: 24,
      height: 24,
      cursor: "pointer",
      accentColor: theme.primaryColor,
    },
    label: {
      fontSize: 14,
      color: theme.primaryColor,
    },
  }),
  {
    name: "step2",
  }
);

export default useStyles;
