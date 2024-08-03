import { useTheme } from "react-jss";
import { adminPageStepIndicators } from "@/assets/data/contracts";
import editorIcon from "@/assets/icons/contractsIcons/editorIcon.svg";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import styles from "./styles";
const AddUserSteps = ({
  currentStep,
  register,
  handleSubmit,
  onSubmit,
  errors,
  setValue,
}) => {
  const classes = styles();
  const theme = useTheme();

  const changeStepIndicatorIcon = (key, id) => {
    if (key === currentStep) {
      return <img src={editorIcon} alt="editor icon" />;
    } else {
      return id;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "add-user-steps":
        return (
          <Step1
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            setValue={setValue}
            register={register}
            errors={errors}
            // goToNextStep={goToNextStep}
            // goToPreviousStep={goToPreviousStep}
          />
        );
      case "add-user-steps2":
        return (
          <Step2
          // goToNextStep={goToNextStep}
          // goToPreviousStep={goToPreviousStep}
          // register={register}
          // errors={errors}
          />
        );
      case "summary":
        return (
          <Step3
          // goToNextStep={goToNextStep}
          // goToPreviousStep={goToPreviousStep}
          // register={register}
          // errors={errors}
          />
        );
      default:
        return <div>Process Completed</div>;
    }
  };

  return (
    <div className={classes.addUserStepsContainer}>
      <span className={classes.title}>Ավելացնել նոր օգտատեր</span>
      <div className={classes.divider}></div>
      <div className={classes.stepIndicatorContainer}>
        {adminPageStepIndicators.map((step) => (
          <div key={step.id} className={classes.stepIndicatorItem}>
            <div
              style={{
                backgroundColor:
                  step.key === currentStep
                    ? theme.textBase
                    : theme.primaryColor,
              }}
              className={classes.stepIndicator}
            >
              {changeStepIndicatorIcon(step.key, step.id)}
            </div>
            <span>{step.name}</span>
          </div>
        ))}
      </div>
      {renderStep()}
    </div>
  );
};

export default AddUserSteps;
