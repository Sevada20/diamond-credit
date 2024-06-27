import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    newContractStepsContainer: {
      width: "100%",
      border: "2px solid red",
      padding: "2%",
      borderRadius: theme.large,
      display: "flex",
      gap: "46px",
      background:
        "linear-gradient(111.99deg,rgba(204, 196, 221, 0.8) 26.5%,rgba(255, 255, 255, 0.6))",
    },
    stepsContainer: {
      width: "100%",
      border: "2px solid black",
    },
    stepIndicatorsList: {
      width: "43%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingInline: "2.5%",
      paddingBlock: "10%",
      borderRadius: theme.secondaryMedium,
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0))",
    },
    stepIndicatorsInnerList: {
      display: "flex",
      flexDirection: "column",
      gap: "2.5vw",
    },
    stepIndicatorItem: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    stepIndicator: {
      fontSize: 20,
      color: theme.backgroundBase,
      width: 48,
      height: 48,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    newContractStepsHeader: {
      marginBottom: "5%",
      textAlign: "end",
    },
    headerText: {
      fontSize: 14,
      marginLeft: 30,
      width: "100%",
      color: theme.primaryColor,
      paddingBottom: 9,
      borderBottom: `1px solid ${theme.borderColor}`,
    },
    stepsWrapper: {
      border: "2px solid red",
      paddingInline: 30,
    },
  }),
  {
    name: "new-contract-steps",
  }
);

export default useStyles;
