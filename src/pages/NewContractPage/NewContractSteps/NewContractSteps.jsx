import { stepIndicatorsData } from "@/assets/data/contracts";
import { useTheme } from "react-jss";
import { countries } from "@/assets/data/contracts";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import editorIcon from "@/assets/icons/contractsIcons/editorIcon.svg";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import styles from "./styles";

const schema = yup.object().shape({
  clientsSearch: yup.string(),
  name: yup.string(),
  surName: yup.string(),
  patronymic: yup.string(),
  passportSeries: yup.string(),
  validity: yup.string(),
  given: yup.string(),
  birthdayDay: yup.number().min(1).max(31),
  birthdayMonth: yup.number().min(1).max(12),
  birthdayYear: yup.number().min(1900).max(new Date().getFullYear()),
  country: yup.string(),
  city: yup.string(),
  streetBuilding: yup.string(),
  email: yup.string().email("Invalid email"),
  phone: yup.string(),
  additionalPhone: yup.string(),

  ratedInput: yup.string().default(""),
  providedInput: yup.string().default(""),
  category: yup.string().default(""),
  subCategory: yup.string().default(""),
  model: yup.string().default(""),
  percentRate: yup.number().default(undefined),
  fine: yup.number().default(undefined),
  contractTerm: yup.string().default(""),
  oneTime: yup.string().default(""),
  description: yup.string().default(""),
});

const NewContractSteps = ({
  currentStep,
  setCurrentStep,
  goToPreviousStep,
}) => {
  const classes = styles({ currentStep });
  const theme = useTheme();
  const [cities, setCities] = useState(countries.Հայաստան);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      clientsSearch: undefined,
      name: undefined,
      surName: undefined,
      patronymic: undefined,
      passportSeries: undefined,
      validity: undefined,
      given: undefined,
      birthdayDay: undefined,
      birthdayMonth: undefined,
      birthdayYear: undefined,
      country: undefined,
      city: undefined,
      streetBuilding: undefined,
      email: undefined,
      phone: undefined,
      additionalPhone: undefined,

      rated: undefined,
      provided: undefined,
      category: undefined,
      subCategory: undefined,
      model: undefined,
      percentRate: undefined,
      fine: undefined,
      contractTerm: undefined,
      oneTime: undefined,
      description: undefined,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(watch());
  };

  const country = watch("country");

  useEffect(() => {
    if (country) {
      setCities(countries[country]);
    }
  }, [country]);

  const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const changeStepIndicatorIcon = (id) => {
    if (id === currentStep) {
      return <img src={editorIcon} alt="editor icon" />;
    } else {
      return id;
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            goToNextStep={goToNextStep}
            countries={countries}
            cities={cities}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step2
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
          />
        );
      case 3:
        return (
          <Step3
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        );
      case 4:
        return (
          <Step4
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
          />
        );
      default:
        return <div>Process Completed</div>;
    }
  };

  return (
    <div className={classes.newContractStepsContainer}>
      <div className={classes.stepIndicatorsList}>
        <div className={classes.stepIndicatorsInnerList}>
          {stepIndicatorsData.map((step) => (
            <div key={step.id} className={classes.stepIndicatorItem}>
              <div
                style={{
                  backgroundColor:
                    step.id === currentStep
                      ? theme.textBase
                      : theme.primaryColor,
                }}
                className={classes.stepIndicator}
              >
                {changeStepIndicatorIcon(step.id)}
              </div>
              <span> {step.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.stepsContainer}>
        <div className={classes.newContractStepsHeader}>
          <span className={classes.headerText}>Տվյալների հարցում</span>
          <span className={classes.headerText}>ԱՐՔԱ հարցում</span>
          <span className={classes.headerText}>ՆՈՐՔ հարցում</span>
        </div>
        <div className={classes.stepsWrapper}>{renderStep()}</div>
      </div>
    </div>
  );
};

export default NewContractSteps;
