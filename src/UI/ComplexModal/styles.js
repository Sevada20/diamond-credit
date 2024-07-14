import { createUseStyles } from "react-jss";

const baseBtnStyles = {
  padding: "10px 24px",
  fontSize: 16,
  cursor: "pointer",
};

const useStyles = createUseStyles(
  (theme) => ({
    modalContainer: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: 50,
      backgroundColor: theme.modalBackground,
      borderRadius: theme.borderRadius.large,
      ...theme.mixins.flexCenter,
    },
    modal: {
      width: "100%",
    },
    title: {
      fontSize: 30,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    content: {
      marginTop: 50,
    },
    buttonsContainer: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 15,
      marginTop: 50,
    },
    cancelBtn: {
      ...baseBtnStyles,
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.backgroundBase,
      color: theme.primaryColor,
      border: `1px solid ${theme.primaryColor}`,
    },
    confirmBtn: {
      ...baseBtnStyles,
      borderRadius: theme.borderRadius.small,
      backgroundColor: theme.primaryColor,
      color: theme.backgroundBase,
    },
  }),
  {
    name: "complex-modal",
  }
);

export default useStyles;
