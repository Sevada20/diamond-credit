import { adminPageAddUserInputFields } from "@/assets/data/adminPageData";
import styles from "./styles";
const Step1 = ({ handleSubmit, onSubmit, setValue, register, errors }) => {
  const classes = styles();
  return (
    <div className={classes.step1Container}>
      <span className={classes.title}>Օգտատիրոջ տվյալներ</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.inputsContainer}>
          {adminPageAddUserInputFields.map(({ name, title, label }) => (
            <div key={name} className={classes.inputContainer}>
              <label htmlFor={name}>{title}</label>
              <input
                placeholder={label}
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
              placeholder="ՕՐ"
              className={`${classes.input} ${classes.dateInput}`}
              name="dayDate"
              type="text"
              {...register("dayDate")}
            />
            <input
              placeholder="ԱՄԻՍ"
              className={`${classes.input} ${classes.dateInput}`}
              name="monthDate"
              type="text"
              {...register("monthDate")}
            />
            <input
              placeholder="ՏԱՐԻ"
              className={`${classes.input} ${classes.dateInput}`}
              name="yearDate"
              type="text"
              {...register("yearDate")}
            />
          </div>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.mainDataContainer}>
          <div className={classes.inputContainer}>
            <label className={classes.label}>Գաղտնաբառ</label>
            <input
              className={classes.input}
              name="password"
              placeholder="sger684srgv"
              {...register("password")}
            />
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.label}>Օգտատիրոջ տեսակը</label>
            <select className={classes.input} name="role" {...register("role")}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;
