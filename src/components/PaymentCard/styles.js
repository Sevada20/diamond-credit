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
      padding: "10px 10px 10px 60px",
      fontSize: 16,
      color: theme.primaryColor,
    },
    paymentCardLabel: {
      fontSize: 14,
      color: theme.labelSecondaryColor,
    },
    fileIcon: {
      borderRadius: `0 ${theme.borderRadius.mediumLarge}  ${theme.borderRadius.mediumLarge} 0`,
    },
  }),
  {
    name: "payment-card",
  }
);

export default useStyles;
