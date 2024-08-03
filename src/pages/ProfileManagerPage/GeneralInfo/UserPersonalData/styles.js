import { createUseStyles } from "react-jss";

const baseStylesButtons = {
  border: "none",
  cursor: "pointer",
  padding: "10px 24px",
};

const useStyles = createUseStyles(
  (theme) => ({
    userPersonalDataContainer: {
      backgroundColor: theme.backgroundBase,
      paddingBlock: 25,
      border: `0.3px solid ${theme.lightText}`,
      borderRadius: theme.borderRadius.large,
    },
    userPersonalDataHeader: {
      paddingInline: 24,
      paddingBottom: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    editActionWrapper: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer",
    },
    editButtonText: {
      fontSize: 14,
      fontWeight: 500,
      color: theme.textTertiary,
    },
    userPersonalDataBody: {
      display: "flex",
      gap: 28,
      paddingInline: 24,
    },
    userInfoItem: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: ({ editMode }) => (editMode ? "100%" : ""),
    },
    infoTitle: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    value: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    inputField: {
      width: "100%",
      padding: 10,
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.small,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      border: "none",
      fontSize: 16,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    actionButtonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      marginTop: 40,
      paddingRight: 24,
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
    name: "user-personal-data",
  }
);
export default useStyles;
