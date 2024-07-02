import { createUseStyles } from "react-jss";

const baseButtonStyles = {
  border: "none",
  fontSize: 14,
  cursor: "pointer",
  background: "none",
};

const useStyles = createUseStyles(
  (theme) => ({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      width: "100%",
    },
    inputsContainer: {
      display: "flex",
      gap: 15,
      width: "100%",
    },
    categoryInputsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: 15,
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%",
      flex: "1 1 calc(33.333% - 10px)",
    },
    label: {
      fontSize: "1rem",
      color: theme.primaryColor,
    },
    input: {
      border: "none",
      borderRadius: theme.small,
      width: "100%",
      padding: 10,
    },
    labelWrapper: {
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: theme.backgroundBase,
      marginTop: 10,
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 15,
      marginBottom: 5,
    },
    addSubCategoryButton: {
      color: theme.primaryColor,
      ...baseButtonStyles,
    },
    removeSubCategoryButton: {
      color: theme.primaryColor,
      ...baseButtonStyles,
    },
  }),
  {
    name: "new-contract-step-2",
  }
);

export default useStyles;
