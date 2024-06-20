import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractContainer: {
      borderRadius: "30px",
    },
    contractsFilterAndList: {
      borderRadius: "0 0 30px 30px",
      paddingBottom: 24,
      backgroundColor: theme.backgroundBase,
    },
    contractsListWrapper: {
      paddingInline: 13,
    },
    contractsListInnerWrapper: {
      maxHeight: ({ showFilters }) => showFilters && "35vh",
      overflowY: ({ showFilters }) => showFilters && "auto",
      paddingInline: 17,
      "&::-webkit-scrollbar": {
        width: 4,
      },
      "&::-webkit-scrollbar-track": {
        background: "#d7d7e0",
        borderRadius: theme.large,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#b0a9ca",
        borderRadius: theme.large,
        backgroundClip: "content-box",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: theme.primaryColor,
      },
    },
    titleWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBlock: "1.3%",
    },
    addBtn: {
      backgroundColor: theme.primaryColor,
      color: theme.textAlternativeBase,
      border: "none",
      padding: "5px 10px",
      borderRadius: theme.medium,
      cursor: "pointer",
    },
    addBtnText: {
      fontSize: 14,
    },
    title: {
      fontSize: 24,
      color: theme.primaryColor,
    },
    filtersControlBarWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "13px 52px 19px 0",
    },
    contractFilterWrapper: {
      paddingInline: 24,
    },
    paginationWrapper: {
      display: "flex",
      justifyContent: "end",
      paddingRight: "2.4%",
    },
  }),
  {
    name: "contracts-page",
  }
);

export default useStyles;
