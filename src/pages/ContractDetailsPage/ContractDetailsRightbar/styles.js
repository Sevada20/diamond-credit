import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    rightBarContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 25,
    },
    historyContainer: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: "30px 0 25px 0",
    },
    titleContainer: {
      paddingInline: "5%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    contractHistoryListWrapper: {
      paddingInline: 15,
    },
    menuIcon: {
      cursor: "pointer",
    },
    menuModalWrapper: {
      boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: theme.borderRadius.small,
      backgroundColor: "#f5faff",
      position: "absolute",
      right: 0,
      top: 30,
      zIndex: 1000,
    },
    menu: {
      padding: "30px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
    menuItem: {
      fontSize: 18,
      color: theme.primaryColor,
      cursor: "pointer",
      whiteSpace: "nowrap",
    },
    notesContainer: {
      backgroundColor: theme.backgroundBase,
      padding: "30px 0 20px 0",
      paddingInline: "5%",
      borderRadius: theme.borderRadius.large,
    },
    notesTitleContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      marginBottom: 30,
    },
    notesList: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      maxHeight: 172,
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: 4,
      },
      "&::-webkit-scrollbar-track": {
        background: "#d7d7e0",
        borderRadius: theme.borderRadius.large,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#b0a9ca",
        borderRadius: theme.borderRadius.large,
        backgroundClip: "content-box",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.primaryColor,
      },
    },
    note: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
    },
    editIcon: {
      cursor: "pointer",
    },
    noteInfo: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    noteText: {
      fontSize: 13,
      fontWeight: 500,
      color: theme.textStrong,
    },
    noteDate: {
      fontSize: 12,
      color: theme.neutralColor,
    },
    saveBtn: {
      backgroundColor: theme.primaryColor,
      color: theme.backgroundBase,
      borderRadius: theme.borderRadius.small,
      padding: "5px 10px",
      cursor: "pointer",
      fontSize: 12,
      fontWeight: 500,
    },
    noteInput: {
      fontSize: 12,
      padding: "5px 10px",
      borderRadius: theme.borderRadius.small,
      border: `1px solid ${theme.borderColor}`,
    },
  }),
  {
    name: "contract-details-rightBar",
  }
);

export default useStyles;
