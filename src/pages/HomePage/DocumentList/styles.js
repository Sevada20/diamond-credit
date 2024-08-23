import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    documentsContainer: {
      width: "100%",
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: 20,
      display: "flex",
      gap: 10,
      justifyContent: "space-between",
      flexDirection: "column",
    },
    addDocumentIconWrapper: {
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: 38,
      height: 38,
      ...theme.mixins.flexCenter,
      backgroundColor: theme.backgroundTertiary,
      borderRadius: theme.borderRadius.small,
    },
    addDocumentBlock: {
      display: "flex",
      alignItems: "center",
      gap: 16,
    },
    addDocumentText: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.primaryColor,
    },
  }),
  {
    name: "document-list",
  }
);

export default useStyles;
