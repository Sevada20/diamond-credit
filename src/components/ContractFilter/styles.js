import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    //
    flatpickrCalendar: {
      backgroundColor: "#f0f0f0",
      border: "1px solid #ccc",
    },

    flatpickrMonth: {
      backgroundColor: "#333",
      color: "#fff",
    },

    flatpickrDay: {
      "& today": {
        backgroundColor: "#4caf50",
        color: "white",
      },
    },

    //
    contractFilter: {
      backgroundColor: theme.backgroundSecondary,
      padding: "17px 24px",
      borderRadius: "30px 0 30px 30px",
    },
    inputsContainer: {
      width: "100%",
      display: "flex",
      gap: 25,
    },
    leftInputsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    rightInputsContainer: {
      width: "100%",
      display: "flex",
      gap: 12,
    },
    rightInputsColumn: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    leftInputGroup: {
      width: "100%",
    },
    rightInputGroup: {
      width: "100%",
    },
    label: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    inputsRow: {
      width: "100%",
      display: "flex",
      gap: 20,
    },
    inputWithIcon: {
      position: "relative",
    },
    subLabel: {
      fontSize: 8,
      color: theme.textStrong,
      position: "absolute",
      top: "12%",
      background: theme.backgroundSecondary,
      paddingInline: 6,
      left: "12px",
      transform: "translateY(-50%)",
    },
    coinIcon: {
      position: "absolute",
      top: "55%",
      left: "12px",
      transform: "translateY(-50%)",
    },
    leftInput: {
      backgroundColor: theme.backgroundBase,
      width: "100%",
      borderRadius: 6,
      border: "none",
      padding: 10,
      marginTop: 6,
    },
    rightInput: {
      backgroundColor: "transparent",
      width: "100%",
      borderRadius: 6,
      border: `1px solid ${theme.textStrong}`,
      padding: "10px 30px",
      marginTop: 6,
    },
    buttonsContainer: {
      marginTop: 20,
    },
    searchButton: {
      padding: "10px 24px",
      borderRadius: 6,
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