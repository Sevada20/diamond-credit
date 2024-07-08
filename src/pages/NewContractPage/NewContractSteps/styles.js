import { createUseStyles } from "react-jss";

const baseButtonStyles = {
  display: "flex",
  padding: "10px 24px",
  cursor: "pointer",
  fontSize: 16,
};

const useStyles = createUseStyles(
  (theme) => ({
    newContractStepsContainer: {
      width: "100%",
      padding: "2%",
      borderRadius: theme.borderRadius.large,
      display: "flex",
      gap: "46px",
      background:
        "linear-gradient(111.99deg,rgba(204, 196, 221, 0.8) 26.5%,rgba(255, 255, 255, 0.6))",
    },
    stepsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    stepIndicatorsList: {
      width: "43%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingInline: "2.5%",
      paddingBlock: "10%",
      borderRadius: theme.borderRadius.secondaryMediumum,
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
      ...theme.mixins.flexCenter,
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
      paddingInline: 22,
    },
    customInputsGroupWrapper: {
      paddingInline: 22,
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 15,
      marginTop: 20,
    },
    cancelBtn: {
      ...baseButtonStyles,
      backgroundColor: "#9992cb",
      borderRadius: theme.borderRadius.small,
      color: theme.textSecondary,
      border: "none",
    },
    submitBtn: {
      ...baseButtonStyles,
      borderRadius: theme.borderRadius.small,
      color: theme.primaryColor,
      background: "transparent",
    },
    continueBtn: {
      ...baseButtonStyles,
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.primaryColor,
      color: theme.textBase,
      border: "none",
    },
    descriptionContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
      paddingInline: 30,
    },
    description: {
      resize: "none",
      minHeight: "50px",
      borderRadius: theme.borderRadius.small,
      border: "none",
      padding: 10,
    },
    label: {
      fontSize: 16,
      color: theme.primaryColor,
    },
  }),
  {
    name: "new-contract-steps",
  }
);

export default useStyles;
