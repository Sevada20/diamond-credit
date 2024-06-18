import styles from "./styles";

const CustomSelector = ({ label, options, register, name, defaultValue }) => {
  const classes = styles();
  return (
    <div className={classes.selector}>
      <label className={classes.label}>{label}</label>
      <select {...register(name)} className={classes.select}>
        <option value=""> {defaultValue}</option>
        {options.map((status) => (
          <option key={status.id} value={status.option}>
            {status.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelector;
