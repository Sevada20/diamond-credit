import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    pagination: {
      display: "flex",
      alignItems: "center",
      marginTop: "20px",
      gap: 12,
      "& li": {
        listStyleType: "none",
      },
    },
    pageLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: "5px 10px",
      borderRadius: theme.borderRadius.tiny,
      border: `1px solid ${theme.border}`,
    },
    pageItem: {
      color: theme.primaryColor,
    },
    changePageBtn: {
      cursor: "pointer",
      padding: "5px 10px",
      borderRadius: theme.borderRadius.tiny,
      border: `1px solid ${theme.border}`,
    },
    paginationActive: {
      backgroundColor: theme.primaryColor,
      borderRadius: theme.borderRadius.tiny,
      color: theme.textBase,
    },
    paginationBreak: {
      border: "none",
      cursor: "pointer",
    },
  }),
  { name: "pagination" }
);

export default useStyles;
