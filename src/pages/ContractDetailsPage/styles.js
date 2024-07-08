import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    pageContainer: {
      display: "flex",
      padding: "30px 20px",
    },
    contractDetailsSidebarWrapper: {},
  }),
  {
    name: "contract-details-page",
  }
);

export default useStyles;
