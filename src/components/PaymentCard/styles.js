import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    paymentCardContainer: {
      backgroundColor: ({ isChecked }) =>
        isChecked ? theme.checkedBackground : "",
    },
    tableDateCell: {
      borderRadius: `${theme.borderRadius.mediumLarge} 0 0 ${theme.borderRadius.mediumLarge}`,
      paddingLeft: 15,
    },
    tableCell: {
      textAlign: "left",
      padding: "10px 10px 10px 56px",
      fontSize: 16,
      color: theme.primaryColor,
      whiteSpace: "nowrap",
    },
    paymentCardLabel: {
      fontSize: 14,
      color: theme.labelSecondaryColor,
    },
    fileIconWrapper: {
      borderRadius: `0 ${theme.borderRadius.mediumLarge}  ${theme.borderRadius.mediumLarge} 0`,
    },
    fileIcon: {
      padding: 5,
      borderRadius: "50%",
      backgroundColor: theme.backgroundSecondary,
    },
  }),
  {
    name: "payment-card",
  }
);

export default useStyles;
