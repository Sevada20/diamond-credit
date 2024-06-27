import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  (theme) => ({
    loansTypeCard: {
      background: "linear-gradient(180deg, #d4cee3, rgba(246, 245, 250, 0.2))",
      borderRadius: theme.large,
      position: "relative",
      border: `0.5px solid ${theme.primaryColor}`,
    },
    loansTypeTitle: {
      fontSize: 24,
    },
    line: {
      width: "100%",
      height: 1,
      marginBlock: 32,
      backgroundColor: theme.textStrong,
    },
    loansTypeInnerCard: {
      padding: "90px 50px 50px 50px",
    },
    link: {
      textDecoration: "none",
      color: theme.primaryColor,
      "&:hover": {
        textDecoration: "underline",
      },
    },
    loansTypeLogoContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 50,
      borderRadius: "50%",
      width: 50,
      height: 50,
      backgroundColor: theme.primaryColor,
      position: "absolute",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
    },
    loansTypeLinks: {
      paddingLeft: 6,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 10,
    },
    loansTypeLink: {
      fontSize: 20,
      color: theme.primaryColor,
    },
    timeBlock: {
      display: "flex",
      alignItems: "center",
      marginTop: 14,
      gap: 7,
      fontSize: 14,
      color: theme.primaryColor,
    },
  }),
  {
    name: "loans-type-card",
  }
);

export default useStyles;
