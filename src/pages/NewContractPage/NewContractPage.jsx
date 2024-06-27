import { useState } from "react";
import { Link } from "react-router-dom";
import ChoiceLoansType from "./ChoiceLoansType/ChoiceLoansType";
import backIcon from "@/assets/icons/contractsIcons/backIcon.svg";
import NewContractSteps from "./NewContractSteps/NewContractSteps";
import styles from "./styles";
const NewContractPage = () => {
  const classes = styles();
  const [mainCurrentStep, setMainCurrentStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextMainStep = () => setMainCurrentStep((prevStep) => prevStep + 1);
  const goToPreviousManiStep = () =>
    setMainCurrentStep((prevStep) => prevStep - 1);

  const goToPreviousStep = () => {
    if (currentStep === 1) {
      goToPreviousManiStep();
    } else {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const renderStep = () => {
    switch (mainCurrentStep) {
      case 1:
        return <ChoiceLoansType goToNextMainStep={goToNextMainStep} />;
      case 2:
        return (
          <NewContractSteps
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            goToPreviousStep={goToPreviousStep}
          />
        );
      default:
        return <div>Process Completed</div>;
    }
  };

  return (
    <div
      className={`${classes.newContractPageWrapper} ${
        mainCurrentStep !== 0 ? classes.stepBackground : ""
      }`}
    >
      {mainCurrentStep === 1 ? (
        <Link to="/contracts" className={classes.backBtn}>
          <img src={backIcon} alt="back icon" />
          <span>Վերադարձ</span>
        </Link>
      ) : (
        <button className={classes.backBtn} onClick={goToPreviousStep}>
          <img src={backIcon} alt="back icon" />
          Վերադարձ
        </button>
      )}
      <div className={classes.newContractPage}>{renderStep()}</div>
    </div>
  );
};

export default NewContractPage;
