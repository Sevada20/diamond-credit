import { adminPageAddUserInputFields } from "@/assets/data/adminPageData";
import styles from "./styles";
const Step1 = ({ handleSubmit, onSubmit, setValue, register, errors }) => {
  const classes = styles();
  return (
    <div className={classes.step1Container}>
      <span className={classes.title}>Օգտատիրոջ տվյալներ</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputsContainer}>
          {adminPageAddUserInputFields.map(({ name, label }) => (
            <div key={name} className={classes.inputContainer}>
              <label htmlFor={name}>{label}</label>
              <input
                name={name}
                className={classes.input}
                id={name}
                type="text"
                {...register(name)}
              />
              {errors[name] && <p>{errors[name].message}</p>}
            </div>
          ))}
        </div>
        <div className={classes.dateInputsWrapper}>
          <label className={classes.label}>Սկիզբ</label>
          <div className={classes.dateInputs}>
            <input
              className={`${classes.input} ${classes.dateInput}`}
              name="dayDate"
              type="text"
              {...register("dayDate")}
            />
            <input
              className={`${classes.input} ${classes.dateInput}`}
              name="monthDate"
              type="text"
              {...register("monthDate")}
            />
            <input
              className={`${classes.input} ${classes.dateInput}`}
              name="yearDate"
              type="text"
              {...register("yearDate")}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;
