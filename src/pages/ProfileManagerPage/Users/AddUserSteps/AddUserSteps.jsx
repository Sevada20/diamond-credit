import { useTheme } from "react-jss";
import { adminPageStepIndicators } from "@/assets/data/contracts";
import editorIcon from "@/assets/icons/contractsIcons/editorIcon.svg";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import styles from "./styles";
const AddUserSteps = ({
  secondParam,
  locationSearch,
  handlePageChange,
  handleCancel,
  register,
  handleSubmit,
  onSubmit,
  errors,
  setValue,
  watch,
}) => {
  const classes = styles();
  const theme = useTheme();

  const changeStepIndicatorIcon = (key, id) => {
    if (key === secondParam) {
      return <img src={editorIcon} alt="editor icon" />;
    } else {
      return id;
    }
  };

  const handleManualSubmit = () => {
    const data = watch();
    onSubmit(data);
  };

  const renderStep = () => {
    switch (secondParam) {
      case "step=1":
        return (
          <Step1
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            setValue={setValue}
            register={register}
            errors={errors}
          />
        );
      case "step=2":
        return <Step2 register={register} />;
      case "step=3":
        return <Step3 watch={watch} />;
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
                  step.key === secondParam
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
      <div className={classes.stepsContainer}>
        {renderStep()}
        <div className={classes.buttonsContainer}>
          <button
            onClick={handleCancel}
            type="button"
            className={`${classes.button} ${classes.changePageBtn}`}
          >
            Չեղարկել
          </button>
          <button
            onClick={handleManualSubmit}
            type="submit"
            className={`${classes.button} ${classes.submitBtn}`}
          >
            Պահպանել
          </button>
          <button
            onClick={handlePageChange}
            type="button"
            className={`${classes.button} ${classes.continueBtn}`}
          >
            Շարունակել
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserSteps;
