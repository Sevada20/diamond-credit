import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractsList: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
  }),
  {
    name: "contracts-list",
  }
);

export default useStyles;
