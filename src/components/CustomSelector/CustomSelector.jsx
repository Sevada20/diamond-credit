import styles from "./styles";

const CustomSelector = ({
  label,
  options,
  register,
  name,
  defaultValue,
  customStyles = { fontSize: 14, fontWeight: 400 },
  errors,
}) => {
  const classes = styles({ customStyles });
  return (
    <div className={classes.selector}>
      <label className={classes.label}>{label}</label>
      <select {...register(name)} className={classes.select}>
        {defaultValue && <option value=""> {defaultValue}</option>}{" "}
        {options.map((optionItem) => (
          <option key={optionItem.id} value={optionItem.option}>
            {optionItem.option}
          </option>
        ))}
      </select>
      {errors && <p>{errors}</p>}
    </div>
  );
};

export default CustomSelector;
