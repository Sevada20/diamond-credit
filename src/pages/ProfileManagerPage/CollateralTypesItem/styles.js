import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    collateralTypesItemContainer: {
      padding: 10,
      borderTop: ({ name }) =>
        `2px solid ${
          name === "Տեխնիկա"
            ? theme.mediumBlue
            : name === "Ոսկի"
            ? theme.gold
            : name === "Մեքենա"
            ? theme.violet
            : ""
        }`,
      borderRadius: theme.borderRadius.secondaryMedium,
      width: "100%",
      backgroundColor: theme.modalBackground,
      cursor: "pointer",
    },
    nameContainer: {
      display: "flex",
      alignItems: "center",
      gap: 16,
    },
    name: {
      fontSize: 18,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    mainList: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    mainListItem: {
      backgroundColor: theme.modalBackground,
      padding: "5px 20px",
      borderRadius: theme.borderRadius.secondaryMedium,
      display: "flex",
      alignItems: "center",
      gap: 14,
      borderLeft: ({ name }) =>
        `2px solid ${
          name === "Տեխնիկա"
            ? theme.mediumBlue
            : name === "Ոսկի"
            ? theme.gold
            : name === "Մեքենա"
            ? theme.violet
            : ""
        }`,
    },
    mainListItemName: {
      fontSize: 16,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    subListContainer: {
      padding: "20px 30px",
      backgroundColor: theme.modalBackground,
      borderRadius: theme.borderRadius.large,
    },
    addButtonText: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.primaryColor,
      cursor: "pointer",
    },
    line: {
      height: 0.3,
      width: "100%",
      backgroundColor: theme.borderColor,
      marginBlock: 10,
    },
    subList: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    subListItem: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      backgroundColor: theme.backgroundBase,
      padding: "5px 20px",
      borderRadius: theme.borderRadius.small,
      borderLeft: ({ name }) =>
        `2px solid ${
          name === "Տեխնիկա"
            ? theme.mediumBlue
            : name === "Ոսկի"
            ? theme.gold
            : name === "Մեքենա"
            ? theme.violet
            : ""
        }`,
    },
    removeIcon: {
      cursor: "pointer",
    },
  }),
  {
    name: "collateral-types-item",
  }
);
export default useStyles;
