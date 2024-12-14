import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    branchesItemContainer: {
      marginTop: 12,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 24px",
      borderRadius: theme.borderRadius.medium,
      background:
        "linear-gradient(180deg,rgba(200, 220, 251, 0.3) 15%,rgba(204, 190, 207, 0.1) 97.5%)",
    },
    nameContainer: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },
    branchName: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.idColor,
    },
    actionsIconsContainer: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    actionIcon: {
      cursor: "pointer",
    },
    branchItemDetailsContainer: {
      marginTop: 2,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 50px",
      borderRadius: `0 0 ${theme.borderRadius.medium} ${theme.borderRadius.medium}`,
      background:
        "linear-gradient(180deg,rgba(200, 220, 251, 0.3) 15%,rgba(204, 190, 207, 0.1) 97.5%)",
    },
    detailsInfoItem: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    detailsInfoItemName: {
      fontSize: 12,
      color: theme.lightText,
    },
    detailsInfoItemValue: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.idColor,
    },
    open: {
      borderRadius: `${theme.borderRadius.medium} ${theme.borderRadius.medium} 0 0`,
    },
  }),
  {
    name: "branchesItem",
  }
);
export default useStyles;
