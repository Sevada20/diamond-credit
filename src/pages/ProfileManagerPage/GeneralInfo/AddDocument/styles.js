import { createUseStyles } from "react-jss";

const baseStylesButtons = {
  border: "none",
  cursor: "pointer",
  padding: "10px 24px",
};

const useStyles = createUseStyles(
  (theme) => ({
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    addDocumentContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 28,
    },
    documentTypeWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
    },
    documentTypeContainer: {
      display: "flex",
      alignItems: "center",
      gap: 28,
    },
    selectLabel: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    uploadFileLabel: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    select: {
      fontSize: 16,
      color: theme.lightText,
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      border: "none",
      borderRadius: theme.borderRadius.small,
      padding: 10,
    },
    selectOption: {
      color: theme.primaryColor,
    },
    uploadFileSpan: {
      color: theme.backgroundBase,
      backgroundColor: theme.lightText,
      fontSize: 16,
      borderRadius: "6px 0 0 6px",
      cursor: "pointer",
      padding: 9.5,
      minWidth: "max-content",
    },
    statusUploaded: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      color: theme.labelColor,
      backgroundColor: theme.backgroundBase,
      fontSize: 16,
      borderRadius: "0 6px 6px 0",
      padding: 7,
    },
    fileUploadContainer: {
      display: "flex",
      maxWidth: 346,
      justifyContent: "space-between",
      flexDirection: "column",
      gap: 9,
      width: "100%",
    },
    uploadFileBlock: {
      borderRadius: theme.borderRadius.small,
      display: "flex",
      alignItems: "center",
      overflowX: "auto",
      "&::-webkit-scrollbar": {
        height: 4,
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
    removeIcon: {
      cursor: "pointer",
    },
    uploadFileBlockWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
    },
    uploadFile: {
      display: "flex",
      paddingRight: 10,
      borderRadius: theme.borderRadius.small,
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    statusUploadedText: {
      whiteSpace: "nowrap",
      minWidth: "200px",
    },
    actionButtonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
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
    name: "addDocument",
  }
);

export default useStyles;
