import { createUseStyles } from "react-jss";
import newContractBackground from "@/assets/images/newContractBackground.png";

const useStyles = createUseStyles(
  (theme) => ({
    newContractPageWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100vh",
    },
    newContractPage: {
      paddingInline: 180,
      gap: 62,
      height: "100%",
      ...theme.mixins.flexCenter,
    },
    stepBackground: {
      backgroundImage: `url(${newContractBackground})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    backBtn: {
      marginTop: 20,
      marginLeft: 20,
      color: theme.primaryColor,
      display: "flex",
      gap: 7,
      alignItems: "center",
      fontSize: 14,
      cursor: "pointer",
      textDecoration: "none",
      width: "max-content",
      border: "none",
      background: "transparent",
    },
  }),
  {
    name: "new-contract-page",
  }
);

export default useStyles;
