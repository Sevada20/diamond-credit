import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    cashFlowCardContainer: {
      width: "100%",
    },
    cashFlowCards: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
    },
    cashFlowCard: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background:
        "linear-gradient(180deg,rgba(200, 220, 251, 0.3) 15%,rgba(204, 190, 207, 0.1) 97.5%)",
      padding: 10,
      cursor: "pointer",
      borderRadius: theme.borderRadius.medium,
    },
    active: {
      borderRadius: `${theme.borderRadius.medium} ${theme.borderRadius.medium} 0 0`,
      background: theme.activeCard,
    },
    cardIdActive: {
      color: theme.textBase,
    },
    date: {
      fontSize: 10,
      fontWeight: 700,
      color: theme.textMuted,
      marginBottom: 8,
    },
    buttonShowDetailsAndIdContainer: {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    cardId: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    value1: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.statusColor1,
    },
    value2: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.statusColor2,
    },
    value3: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.statusColor3,
    },
    value4: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    fileIcon: {
      cursor: "pointer",
    },
    infoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 30,
    },
    detailsWrapper: {
      backgroundColor: theme.backgroundCardSecondary,
      borderRadius: `0 0 ${theme.borderRadius.medium} ${theme.borderRadius.medium}`,
      padding: "12px 22px 12px 22px",
    },
    detailsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      marginTop: 12,
    },
    detailsInfoColumn: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    detailsId: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.idColor,
    },
    label: {
      fontSize: 12,
      color: theme.lightText,
    },
    totalValue: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.successColor,
    },
    detailsInfoTotal: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginTop: 12,
    },
    value: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    discountValue: {
      color: theme.accentColor,
    },
    detailsInfoItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 2,
    },
    userInfoItemContainer: {
      display: "flex",
      alignItems: "center",
      gap: 4,
    },
    detailsInfoFooter: {
      borderTop: `0.3px solid ${theme.lightGray}`,
      display: "flex",
      gap: 30,
      paddingTop: 10,
      marginTop: 10,
    },
  }),
  {
    name: "cash-flow-card",
  }
);

export default useStyles;
