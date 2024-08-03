import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    userDocumentsContainer: {
      backgroundColor: theme.backgroundBase,
      padding: "25px 24px",
      border: `0.3px solid ${theme.lightText}`,
      borderRadius: theme.borderRadius.large,
      display: "flex",
      flexDirection: "column",
      gap: 28,
    },
    userDocumentsHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "relative",
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    menuIcon: {
      cursor: "pointer",
    },
    documentItemBlock: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    documentItem: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    downloadIconContainer: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      gap: 10,
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    downloadIconText: {
      fontSize: 12,
      color: theme.primaryColor,
    },
    documentItemInfo: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    menuModalWrapper: {
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.modalBackground,
      position: "absolute",
      right: 0,
      top: 20,
      zIndex: 1000,
    },
    menu: {
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
    },
    menuItem: {
      fontSize: 18,
      padding: "10px 5px",
      borderRadius: theme.borderRadius.small,
      color: theme.primaryColor,
      cursor: "pointer",
      "&:hover": {
        background: theme.darkBlue,
      },
    },
  }),
  {
    name: "user-documents",
  }
);
export default useStyles;
