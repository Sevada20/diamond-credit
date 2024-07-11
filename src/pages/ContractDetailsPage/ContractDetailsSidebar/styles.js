import { createUseStyles } from "react-jss";

const userInfoBaseStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
  paddingBlock: 25,
};

const baseButtonsStyles = {
  fontSize: 16,
  paddingBlock: 10,
  with: "100%",
  cursor: "pointer",
};

const useStyles = createUseStyles(
  (theme) => ({
    contractDetailsSidebar: {
      padding: "30px 20px",
      backgroundColor: theme.backgroundBase,
      width: "100%",
      borderRadius: theme.borderRadius.large,
    },
    userInfoHeader: {
      borderBottom: `1px solid ${theme.lightText}`,
      paddingBottom: 9,
    },
    userAvatar: {
      width: 150,
      height: 150,
      borderRadius: "50%",
    },
    userId: {
      fontSize: 16,
      fontWeight: 600,
      color: "#8833ff",
    },
    editButtonText: {
      fontSize: 14,
      color: theme.borderColor,
    },
    userFullName: {
      fontSize: 20,
      fontWeight: 600,
      color: theme.primaryColor,
      whiteSpace: "nowrap",
    },
    userInfoRow: {
      display: "flex",
      alignItems: "center",
      gap: 15,
    },
    userInfoHeaderContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 7,
    },
    editButtonWrapper: {
      display: "flex",
      marginTop: 9,
      justifyContent: "flex-end",
    },
    editButton: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer",
    },
    userContactsContainer: {
      ...userInfoBaseStyles,
      borderBottom: `1px solid ${theme.lightText}`,
    },
    userContractDetailsContainer: {
      ...userInfoBaseStyles,
    },
    userContactRow: {
      display: "flex",
      alignItems: "center",
      gap: 15,
      fontSize: 16,
      color: theme.primaryColor,
    },
    label: {
      fontSize: 16,
      color: theme.labelColor,
    },
    value: {
      fontSize: 16,
      color: theme.primaryColor,
      fontWeight: 500,
    },
    actionButtons: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
    newContractBtn: {
      ...baseButtonsStyles,
      backgroundColor: theme.primaryColor,
      color: theme.backgroundBase,
      borderRadius: theme.borderRadius.small,
    },
    updateInfoBtn: {
      ...baseButtonsStyles,
      backgroundColor: theme.primaryColor,
      color: theme.backgroundBase,
      borderRadius: theme.borderRadius.small,
    },
  }),
  {
    name: "contract-details-sidebar",
  }
);

export default useStyles;
