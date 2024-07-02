import styles from "./styles";
const CustomInput = ({
  customStyles,
  id,
  label,
  name,
  register,
  placeholder,
  errors,
}) => {
  const classes = styles({ customStyles });

  return (
    <div className={classes.inputContainer}>
      <label htmlFor={`input${id}`} className={classes.label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type="text"
        {...register(name)}
        id={`input${id}`}
        className={classes.input}
      />
      {errors && <p>{errors}</p>}
    </div>
  );
};

export default CustomInput;
