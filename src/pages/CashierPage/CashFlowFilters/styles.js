import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    cashFlowFiltersContainer: {
      backgroundColor: theme.backgroundSecondary,
      padding: "25px 24px 25px 24px",
      borderRadius: `${theme.borderRadius.large} 0 ${theme.borderRadius.large} ${theme.borderRadius.large}`,
    },
    contractFilter: {
      backgroundColor: theme.backgroundSecondary,
      padding: "17px 24px",
      borderRadius: `${theme.borderRadius.large} ${theme.borderRadius.large} 0 ${theme.borderRadius.large}`,
      marginBottom: 15,
    },
    inputsContainer: {
      width: "100%",
      display: "flex",
      gap: 15,
    },
    leftInputsContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 12,
    },
    selectorsContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridGap: 12,
      marginTop: 12,
    },
    leftInputGroup: {
      width: "100%",
    },
    label: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    rightInputsContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    rightInputs: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 12,
    },
    dateInputsContainer: {
      display: "flex",
      gap: 12,
      alignItems: "end",
      marginTop: 9,
    },
    rightInputGroupItem: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "100%",
    },
    inputWithIcon: {
      position: "relative",
      width: "100%",
    },
    subLabel: {
      fontSize: 8,
      color: theme.textStrong,
      position: "absolute",
      top: "12%",
      background: theme.backgroundSecondary,
      paddingInline: 6,
      left: 12,
      transform: "translateY(-50%)",
    },
    coinIcon: {
      position: "absolute",
      top: "55%",
      left: 12,
      transform: "translateY(-50%)",
    },
    leftInput: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.small,
      border: "none",
      padding: 10,
      marginTop: 6,
      width: "100%",
    },
    rightInput: {
      backgroundColor: "transparent",
      borderRadius: theme.borderRadius.small,
      border: `1px solid ${theme.textStrong}`,
      padding: 10,
      paddingLeft: 26,
      marginTop: 6,
      width: "100%",
    },
    buttonsContainer: {
      marginTop: 20,
      display: "flex",
      justifyContent: "flex-end",
      gap: "6%",
    },
    searchButton: {
      padding: "10px 24px",
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.primaryColor,
      color: theme.backgroundBase,
      border: "none",
      cursor: "pointer",
    },
    cancelButton: {
      cursor: "pointer",
      color: theme.primaryColor,
      backgroundColor: "transparent",
      border: "none",
    },
  }),
  {
    name: "cash-flow-filters",
  }
);

export default useStyles;
