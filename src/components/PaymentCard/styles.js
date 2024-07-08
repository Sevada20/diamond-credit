import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    paymentCardContainer: {
      backgroundColor: ({ isChecked }) =>
        isChecked ? theme.backgroundChecked : "",
    },
    tableInputCell: {
      padding: "14px 0px 14px 10px",
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    input: {
      width: 24,
      height: 24,
    },
    fileIcon: {},
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
  }),
  {
    name: "payment-card",
  }
);

export default useStyles;
