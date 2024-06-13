import { useState } from "react";
import SignInMainStep from "../../components/SignInMainStep/SignInMainStep";
import SignInSelectionPlaceStep from "../../components/SignInSelectionPlaceStep/SignInSelectionPlaceStep";
import styles from "./styles";

const SignInPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const classes = styles({ currentStep });

  const generateInputGroup = (index) => {
    switch (index) {
      case 1:
        return <SignInMainStep nextStep={nextStep} />;
      case 2:
        return <SignInSelectionPlaceStep />;
      default:
        return null;
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={classes.signInContainer}>
      <div className={classes.signInInnerContainer}>
        {generateInputGroup(currentStep)}
      </div>
    </div>
  );
};

export default SignInPage;
