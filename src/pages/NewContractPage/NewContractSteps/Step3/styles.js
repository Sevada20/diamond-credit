import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    step3container: {
      padding: 50,
      width: "100%",
    },
    inputsGroup: {
      width: "100%",
      marginTop: "10%",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      paddingInline: "20%",
    },
    searchInputWrapper: {
      position: "relative",
    },
    searchIconWrapper: {
      position: "absolute",
      left: "12px",
      top: "74%",
      transform: "translateY(-50%)",
    },
  }),
  {
    name: "new-contract-step-3",
  }
);

export default useStyles;
