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
  }),
  {
    name: "add-user-steps",
  }
);

export default useStyles;
