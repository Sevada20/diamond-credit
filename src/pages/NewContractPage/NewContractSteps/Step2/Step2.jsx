import moneyIcon from "@/assets/icons/contractsIcons/moneyIcon.svg";
import styles from "./styles";

const Step2 = ({
  goToNextStep,
  goToPreviousStep,
  register,
  handleSubmit,
  onSubmit,
  errors,
}) => {
  const classes = styles();
  return (
    <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputsContainer}>
        <div className={classes.inputWrapper}>
          <div className={classes.labelWrapper}>
            <img src={moneyIcon} alt="money icon" />
            <label className={classes.label}>Գնահատված</label>
          </div>
          <input
            placeholder="250.000"
            className={classes.input}
            {...register("rated")}
          />
          {errors.rated && <p>{errors.rated.message}</p>}
        </div>
        <div className={classes.inputWrapper}>
          <div className={classes.labelWrapper}>
            <img src={moneyIcon} alt="money icon" />
            <label className={classes.label}>Տրամադրված</label>
          </div>
          <input
            placeholder="250.000"
            className={classes.input}
            {...register("provided")}
          />
          {errors.provided && <p>{errors.provided.message}</p>}
        </div>
      </div>
    </form>
  );
};

export default Step2;
