import { createUseStyles } from "react-jss";
import signInBackgroundImage from "../../assets/images/signIn/sighInPage.png";

const useStyles = createUseStyles(
  (theme) => ({
    signInContainer: {
      backgroundColor: "#373962",
      height: "100vh",
      paddingLeft: ({ currentStep }) => (currentStep === 2 ? 0 : "269px"),
    },
    signInInnerContainer: {
      backgroundImage: ({ currentStep }) =>
        currentStep === 1 ? `url(${signInBackgroundImage})` : null,
      backgroundSize: "contain",
      backgroundImagePosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100%",
      display: "flex",
      justifyContent: "end",
      paddingRight: ({ currentStep }) => (currentStep === 2 ? 0 : "94px"),
    },
  }),
  {
    name: "signIn-page",
  }
);

export default useStyles;
