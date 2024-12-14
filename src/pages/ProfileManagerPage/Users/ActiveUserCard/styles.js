import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    activeUserCard: {
      padding: 25,
      borderRadius: theme.borderRadius.large,
      backgroundColor: theme.backgroundMain,
      flexDirection: "column",
      display: "flex",
      gap: 17,
      maxWidth: "100%",
    },
    nameBlock: {
      fontSize: 24,
      fontWeight: 700,
      color: theme.primaryColor,
    },
    email: {
      fontSize: 18,
      color: theme.primaryColor,
      wordBreak: "break-word",
    },
    position: {
      fontSize: 18,
      color: theme.primaryColor,
    },
    role: {
      fontSize: 18,
      padding: "10px 25px",
      color: theme.primaryColor,
      width: "max-content",
      borderRadius: theme.borderRadius.large,
    },
    admin: {
      backgroundColor: theme.roleColor1,
    },
    user: {
      backgroundColor: theme.roleColor2,
    },
    date: {
      fontSize: 14,
      color: theme.primaryColor,
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      gap: 30,
    },
    useInfo: {
      display: "flex",
      flexDirection: "column",
      gap: 9,
    },
    footer: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
    },
  }),
  {
    name: "activeUserCard",
  }
);
export default useStyles;
