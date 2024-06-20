import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractFilter: {
      backgroundColor: theme.backgroundSecondary,
      padding: "17px 24px",
      borderRadius: `${theme.large} ${theme.large} 0 ${theme.large}`,
      marginBottom: 15,
    },
    inputsContainer: {
      width: "100%",
      display: "flex",
      gap: 25,
    },
    leftInputsContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridGap: 12,
    },
    customSelectorWrapper: { gridColumn: "span 4" },
    rightInputsContainer: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: 12,
    },
    rightInputsColumn: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    leftInputGroup: { width: "100%" },
    rightInputGroup: { width: "100%", alignSelf: "flex-end" },
    label: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    inputsRow: {
      width: "100%",
      display: "flex",
      gap: 20,
    },
    inputWithIcon: { position: "relative" },
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
      width: "100%",
      borderRadius: theme.small,
      border: "none",
      padding: 10,
      marginTop: 6,
    },
    rightInput: {
      backgroundColor: "transparent",
      width: "100%",
      borderRadius: theme.small,
      border: `1px solid ${theme.textStrong}`,
      padding: "10px 30px",
      marginTop: 6,
    },
    buttonsContainer: { marginTop: 20 },
    searchButton: {
      padding: "10px 24px",
      borderRadius: theme.small,
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
    name: "contract-filter",
  }
);

export default useStyles;
