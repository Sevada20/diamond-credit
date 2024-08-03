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
      padding: "10px 10px 10px 75px",
      fontSize: 16,
      color: theme.primaryColor,
      whiteSpace: "nowrap",
    },
    paymentCardLabel: {
      fontSize: 14,
      color: theme.labelSecondaryColor,
    },
    discountWrapper: {
      borderRadius: `0 ${theme.borderRadius.mediumLarge}  ${theme.borderRadius.mediumLarge} 0`,
    },
    discount: {
      padding: "5px 10px",
      color: theme.primaryColor,
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.backgroundSecondary,
      cursor: "pointer",
    },
  }),
  {
    name: "payment-card",
  }
);

export default useStyles;
