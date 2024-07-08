import { stepIndicatorsData } from "@/assets/data/contracts";
import { useTheme } from "react-jss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { inputFieldsData } from "@/assets/data/filterFields";
import * as yup from "yup";
import editorIcon from "@/assets/icons/contractsIcons/editorIcon.svg";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import CustomInputsGroup from "./InputsGroup/InputsGroup";
import styles from "./styles";

const STEP_1 = 1;
const STEP_2 = 2;
const STEP_3 = 3;
const STEP_4 = 4;
const MAX_STEP = STEP_4;
const VALUE_THRESHOLD = 20000;

const schema = yup.object().shape({
  clientsSearch: yup.string(),
  name: yup.string(),
  surName: yup.string(),
  patronymic: yup.string(),
  passportSeries: yup.string(),
  validity: yup.string(),
  given: yup.string(),
  birthdayDay: yup.string(),
  birthdayMonth: yup.string(),
  birthdayYear: yup.string(),
  country: yup.string(),
  city: yup.string(),
  streetBuilding: yup.string(),
  email: yup.string().email("Invalid email"),
  phone: yup.string(),
  additionalPhone: yup.string(),

  ratedInput: yup.string().default(""),
  providedInput: yup.string().default(""),
  category: yup.string().default(""),
  techniqueSubCategories: yup.array().of(
    yup.object().shape({
      subCategory: yup.string().default(""),
      model: yup.string().default(""),
    })
  ),
  goldSubCategories: yup.array().of(
    yup.object().shape({
      subCategory: yup.string().default(""),
      goldPurity: yup.string().default(""),
      goldWeight: yup.string().default(""),
      pureGoldWeight: yup.string().default(""),
    })
  ),

  percentRate: yup.string().default(""),
  fine: yup.string().default(""),
  contractTerm: yup.string().default(""),
  oneTime: yup.string().default(""),
  description: yup.string().default(""),

  carMake: yup.string().default(""),
  carYear: yup.string().default(""),
  enginePower: yup.string().default(""),
  licensePlate: yup.string().default(""),
  color: yup.string().default(""),
  registrationCertificate: yup.string().default(""),
  identificationNumber: yup.string().default(""),
  certificateOwnership: yup.string().default(""),
  from: yup.string().default(""),
  dateIssue: yup.string().default(""),

  searchUserBankData: yup.string().default(""),
  bank: yup.string().default(""),
  bankCardNumber: yup.string().default(""),
  bankAccountNumber: yup.string().default(""),
  passportFile: yup.mixed(),
  contractFile: yup.mixed(),
});

const NewContractSteps = ({
  currentStep,
  setCurrentStep,
  goToPreviousStep,
  checkValueProvided,
}) => {
  const classes = styles({ currentStep });
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
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
      techniqueSubCategories: [
        {
          subCategory: undefined,
          model: undefined,
        },
      ],
      goldSubCategories: [
        {
          subCategory: undefined,
          goldPurity: undefined,
          goldWeight: undefined,
          pureGoldWeight: undefined,
        },
      ],
      percentRate: undefined,
      fine: undefined,
      contractTerm: undefined,
      oneTime: undefined,
      description: undefined,

      carModel: undefined,
      carMake: undefined,
      carYear: undefined,
      enginePower: undefined,
      licensePlate: undefined,
      color: undefined,
      registrationCertificate: undefined,
      identificationNumber: undefined,
      certificateOwnership: undefined,
      from: undefined,
      dateIssue: undefined,

      searchUserBankData: undefined,
      bank: undefined,
      bankCardNumber: undefined,
      bankAccountNumber: undefined,

      passportFile: undefined,
      contractFile: undefined,
    },
  });

  const addTechniqueSubCategory = () => {
    const currentTechniqueSubCategories = watch("techniqueSubCategories");
    const newTechniqueSubCategories = [
      ...currentTechniqueSubCategories,
      { subCategory: "", model: "" },
    ];
    setValue("techniqueSubCategories", newTechniqueSubCategories);
  };

  const removeTechniqueSubCategory = () => {
    if (watch("techniqueSubCategories").length <= 1) return;
    const currentTechniqueSubCategories = watch("techniqueSubCategories");
    const newTechniqueSubCategories = [...currentTechniqueSubCategories];
    newTechniqueSubCategories.pop();
    setValue("techniqueSubCategories", newTechniqueSubCategories);
  };

  const addGoldSubCategory = () => {
    const currentGoldSubCategories = watch("goldSubCategories");
    const newGoldSubCategories = [
      ...currentGoldSubCategories,
      { subCategory: "", goldPurity: "", goldWeight: "", pureGoldWeight: "" },
    ];
    setValue("goldSubCategories", newGoldSubCategories);
  };

  const removeGoldSubCategory = () => {
    if (watch("goldSubCategories").length <= 1) return;
    const currentGoldSubCategories = watch("goldSubCategories");
    const newGoldSubCategories = [...currentGoldSubCategories];
    newGoldSubCategories.pop();
    setValue("goldSubCategories", newGoldSubCategories);
  };

  const goToNextStep = () => {
    const provided = watch("provided");
    checkValueProvided(provided);
    if (currentStep < MAX_STEP) {
      if (
        (provided < VALUE_THRESHOLD || !currentStep) &&
        currentStep !== STEP_3 &&
        currentStep !== STEP_1
      ) {
        setCurrentStep((prevStep) => prevStep + 2);
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
  };

  const changeStepIndicatorIcon = (id) => {
    if (id === currentStep) {
      return <img src={editorIcon} alt="editor icon" />;
    } else {
      return id;
    }
  };

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  const renderStep = () => {
    switch (currentStep) {
      case STEP_1:
        return (
          <Step1
            goToNextStep={goToNextStep}
            register={register}
            errors={errors}
          />
        );
      case STEP_2:
        return (
          <Step2
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
            register={register}
            errors={errors}
            watch={watch}
            addTechniqueSubCategory={addTechniqueSubCategory}
            addGoldSubCategory={addGoldSubCategory}
            removeTechniqueSubCategory={removeTechniqueSubCategory}
            removeGoldSubCategory={removeGoldSubCategory}
          />
        );
      case STEP_3:
        return (
          <Step3
            goToNextStep={goToNextStep}
            goToPreviousStep={goToPreviousStep}
            register={register}
            errors={errors}
          />
        );
      case STEP_4:
        return (
          <Step4
            setCurrentStep={setCurrentStep}
            setValue={setValue}
            watch={watch}
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
        <div>
          <div className={classes.newContractStepsHeader}>
            <span className={classes.headerText}>Տվյալների հարցում</span>
            <span className={classes.headerText}>ԱՐՔԱ հարցում</span>
            <span className={classes.headerText}>ՆՈՐՔ հարցում</span>
          </div>
          <div className={classes.stepsWrapper}>{renderStep()}</div>
          {currentStep === STEP_2 && (
            <>
              <div className={classes.customInputsGroupWrapper}>
                <CustomInputsGroup
                  inputFieldsData={inputFieldsData}
                  register={register}
                  errors={errors}
                  category={watch("category")}
                  quantityRows={3}
                />
              </div>
              {watch("category") === "Տեխնիկա" && (
                <div className={classes.descriptionContainer}>
                  <label className={classes.label}>Նկարագրություն</label>
                  <textarea className={classes.description} />
                </div>
              )}
            </>
          )}
        </div>
        <div className={classes.buttonsContainer}>
          <button type="button" className={classes.cancelBtn}>
            Չեղարկել
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            className={classes.submitBtn}
          >
            Պահպանել
          </button>
          <button
            onClick={goToNextStep}
            type="button"
            className={classes.continueBtn}
          >
            Շարունակել
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContractSteps;
