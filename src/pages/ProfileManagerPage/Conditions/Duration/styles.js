import { createUseStyles } from "react-jss";

const baseStylesButtons = {
  border: "none",
  cursor: "pointer",
  padding: "10px 24px",
};

const useStyles = createUseStyles(
  (theme) => ({
    durationContainer: {
      padding: "28px 50px",
    },
    title: {
      fontSize: 20,
      color: theme.primaryColor,
      fontWeight: 700,
    },
    label: {
      fontSize: 20,
      color: theme.primaryColor,
    },
    input: {
      width: 143,
      padding: "10px 7px",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      border: "none",
      borderRadius: theme.borderRadius.small,
    },
    contentContainer: {
      paddingTop: 30,
      width: "30%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    categoryItemBlock: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    actionButtonsContainer: {
      display: "flex",
      gap: 10,
      marginTop: 30,
    },
    cancelButton: {
      ...baseStylesButtons,
      backgroundColor: theme.lightPurple,
      borderRadius: theme.borderRadius.small,
      color: theme.textSecondary,
    },
    saveButton: {
      ...baseStylesButtons,
      backgroundColor: theme.primaryColor,
      color: theme.textBase,
      borderRadius: theme.borderRadius.small,
    },
  }),
  {
    name: "duration",
  }
);
export default useStyles;
