import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractContainer: {
      borderRadius: "30px",
    },
    contractsFilterAndList: {
      backgroundColor: theme.backgroundBase,
      padding: "15px 24px 15px 24px",
    },
  }),
  {
    name: "contracts-page",
  }
);

export default useStyles;
