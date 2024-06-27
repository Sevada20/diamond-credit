import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    headerContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "150px",
      paddingInline: "30px",
    },
    searchBar: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
    searchIcon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
    },
    userPanel: {
      display: "flex",
      gap: "20px",
      width: "100%",
      justifyContent: "flex-end",
    },
    iconText: {
      fontSize: "14px",
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      cursor: "pointer",
    },
    searchInput: {
      padding: "0px 0px 0px 40px",
      borderRadius: "40px",
      border: "none",
      height: "32px",
      width: "100%",
    },
  }),
  {
    name: "header",
  }
);

export default useStyles;
