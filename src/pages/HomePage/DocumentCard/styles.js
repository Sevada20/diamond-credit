import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    documentItemContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    documentInfoBlock: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    documentInfo: {
      display: "flex",
      gap: 16,
      alignItems: "center",
    },
    documentIconWrapper: {
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      ...theme.mixins.flexCenter,
      width: 38,
      height: 38,
      backgroundColor: theme.backgroundTertiary,
      borderRadius: theme.borderRadius.small,
    },
    name: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    quantity: {
      fontSize: 14,
      color: theme.textMutedSecondary,
    },
  }),
  {
    name: "document-card",
  }
);

export default useStyles;
