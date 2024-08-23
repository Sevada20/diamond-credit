import { createUseStyles } from "react-jss";

const baseStylesButtons = {
  border: "none",
  cursor: "pointer",
  padding: "10px 24px",
};

const useStyles = createUseStyles(
  (theme) => ({
    percentContainer: {
      paddingBlock: 28,
      paddingRight: 10,
    },
    percentTitleContainer: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    mainPercent: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    percentListMainContainer: {
      marginTop: 20,
    },
    titleContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 40px 0 50px",
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    editButton: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      cursor: "pointer",
    },
    editButtonText: {
      fontSize: 14,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    techniquePercent: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    divider: {
      marginBlock: 20,
      width: "100%",
      height: 0.3,
      backgroundColor: theme.primaryColor,
    },
    percentItemContainer: {
      padding: "0 40px 0 60px",
    },
    mainPercentInput: {
      fontSize: 16,
      width: 140,
      color: theme.primaryColor,
      padding: "7px 10px",
      borderRadius: theme.borderRadius.small,
      border: "none",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    },
    addButton: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 20,
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 500,
      width: "fit-content",
    },
    percentInput: {
      fontSize: 16,
      height: 40,
      marginTop: 6,
      color: theme.primaryColor,
      width: "100%",
      padding: "0 10px",
      borderRadius: theme.borderRadius.small,
      border: "none",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    },
    intervalContainer: {
      display: "flex",
      alignItems: "center",
      gap: 20,
    },
    intervalNumberBlock: {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    percentTitle: {
      fontSize: 20,
      color: theme.primaryColor,
    },
    percentListContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 20,
    },
    percentItem: {
      display: "flex",
      gap: 30,
    },
    line: {
      height: 0.5,
      width: 10,
      backgroundColor: theme.primaryColor,
    },
    intervalNumber: {
      fontSize: 12,
      color: theme.primaryColor,
    },
    percent: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    inputWithIcon: {
      position: "relative",
    },
    coinIconAbsolute: {
      position: "absolute",
      top: "55%",
      left: 12,
      transform: "translateY(-50%)",
    },
    subLabel: {
      fontSize: 8,
      color: theme.textStrong,
      position: "absolute",
      top: "12%",
      background: theme.backgroundBase,
      paddingInline: 6,
      left: 12,
      transform: "translateY(-50%)",
    },
    rightInput: {
      backgroundColor: "transparent",
      width: "100%",
      borderRadius: theme.borderRadius.small,
      border: `1px solid ${theme.primaryColor}`,
      padding: "10px 30px",
      marginTop: 6,
    },
    addIconWrapper: {
      borderRadius: 50,
      width: 16,
      height: 16,
      border: "1px solid #000000",
      ...theme.mixins.flexCenter,
    },
    actionButtonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 15,
      marginTop: 20,
      paddingRight: 40,
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
    name: "percent",
  }
);
export default useStyles;
