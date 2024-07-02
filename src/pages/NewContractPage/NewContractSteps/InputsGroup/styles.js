import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    inputsGroup: {
      display: "grid",
      gridTemplateColumns: ({ quantityRows }) => `repeat(${quantityRows}, 1fr)`,
      columnGap: 15,
      rowGap: 12,
      marginBlock: 12,
      width: "100%",
    },
  }),
  {
    name: "inputs-group",
  }
);

export default useStyles;
