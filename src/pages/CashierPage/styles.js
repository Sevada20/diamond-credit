import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    cashierPageContainer: {
      backgroundColor: theme.backgroundMain,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: 25,
      padding: "40px 30px 40px 30px",
    },
    applicationsAwaitingApprovalList: {
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: "30px 24px 30px 24px",
    },
    cashFlowContainer: {
      marginTop: 25,
      backgroundColor: theme.backgroundBase,
      borderRadius: theme.borderRadius.large,
      padding: "25px 24px 25px 24px",
    },
    cashFlowFiltersWrapper: {
      marginTop: 10,
      marginBottom: 25,
    },
    FinancialCardListWrapper: {
      display: "flex",
      gap: 20,
    },
    cashFlowSection: {
      display: "flex",
      flexDirection: "column",
    },
  }),
  {
    name: "cashier-page",
  }
);

export default useStyles;
