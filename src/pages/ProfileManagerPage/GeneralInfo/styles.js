import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    generalInfoContainer: {
      backgroundColor: theme.backgroundBase,
      padding: "25px 0",
      height: "100%",
      width: "100%",
      borderRadius: theme.borderRadius.large,
    },
    userInfoContainer: {
      display: "flex",
      alignItems: "center",
      gap: 28,
      borderBottom: `0.3px solid  ${theme.lightText}`,
      paddingLeft: 24,
      paddingBottom: 28,
    },
    userInfoBlock: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
    userAvatarWrapper: {
      position: "relative",
    },
    editIconWrapper: {
      position: "absolute",
      bottom: 4,
      right: 4,
      cursor: "pointer",
      width: 25,
      height: 25,
      borderRadius: "50%",
      backgroundColor: theme.primaryColor,
      ...theme.mixins.flexCenter,
    },
    userName: {
      fontSize: 24,
      fontWeight: 500,
      color: theme.primaryColor,
    },
    role: {
      fontSize: 18,
      color: theme.primaryColor,
    },
    date: {
      fontSize: 16,
      color: theme.primaryColor,
    },
    userPersonalDataWrapper: {
      padding: "28px 24px",
    },
    userDocumentsWrapper: {
      padding: "0 24px",
    },
  }),
  {
    name: "general-info",
  }
);

export default useStyles;
