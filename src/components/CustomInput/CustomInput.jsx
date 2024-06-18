import styles from "./styles";
const CustomInput = ({ id, label, name, register }) => {
  const classes = styles();

  return (
    <div className={classes.inputContainer}>
      <label htmlFor={`input${id}`} className={classes.label}>
        {label}
      </label>
      <input
        type="text"
        {...register(name)}
        id={`input${id}`}
        className={classes.input}
      />
    </div>
  );
};

export default CustomInput;
