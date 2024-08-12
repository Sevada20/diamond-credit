import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    stepIndicatorContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "4%",
    },
    stepIndicatorItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
    },
    stepsContainer: {
      backgroundColor: theme.backgroundBase,
      padding: 50,
      borderRadius: theme.borderRadius.large,
      marginTop: 25,
    },
    stepIndicator: {
      fontSize: 20,
      color: theme.backgroundBase,
      width: 48,
      height: 48,
      borderRadius: "50%",
      ...theme.mixins.flexCenter,
    },
    title: {
      fontSize: 24,
      color: theme.primaryColor,
      fontWeight: 700,
    },
    divider: {
      height: 0.5,
      backgroundColor: theme.primaryColor,
      marginBlock: 22,
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 15,
      marginTop: 18,
    },
    button: {
      padding: "10px 24px",
      borderRadius: theme.borderRadius.small,
      fontSize: 16,
      cursor: "pointer",
      border: "none",
    },
    changePageBtn: {
      backgroundColor: theme.lightPurple,
      color: theme.backgroundInput,
    },
    submitBtn: {
      backgroundColor: theme.backgroundBase,
      color: theme.primaryColor,
      border: `1px solid ${theme.primaryColor}`,
    },
    continueBtn: {
      backgroundColor: theme.primaryColor,
      color: theme.textBase,
    },
  }),
  {
    name: "add-user-steps",
  }
);

export default useStyles;
