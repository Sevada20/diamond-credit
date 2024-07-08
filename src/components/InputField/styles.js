import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    formGroup: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      position: "relative",
    },
    inputIconWrapper: {
      position: "absolute",
      top: "56%",
      left: "12px",
    },
    label: { fontSize: 16, fontWeight: 400 },
    input: {
      borderRadius: theme.borderRadius.small,
      border: "none",
      padding: "10px 10px 10px 38px",
    },
    errorMessage: { color: "red", fontSize: "0.8rem" },
  }),
  {
    name: "input-field",
  }
);

export default useStyles;
