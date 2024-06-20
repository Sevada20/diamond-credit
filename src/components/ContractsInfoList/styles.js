import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    contractsInfoList: {
      width: "100%",
      display: "flex",
      gap: 25,
    },
  }),
  {
    name: "contracts-info",
  }
);

export default useStyles;
