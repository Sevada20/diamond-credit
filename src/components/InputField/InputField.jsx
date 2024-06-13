import { Field } from "formik";
import { useTheme } from "react-jss";
import styles from "./styles";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
}) => {
  const classes = styles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.formGroup}>
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
        <Field
          type={type}
          name={name}
          className={classes.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div className={classes.inputIconWrapper}>
          <Icon width={20} height={20} color={theme.primaryColor} />
        </div>
      </div>
      {error ? <div className={classes.errorMessage}>{error}</div> : null}
    </>
  );
};

export default InputField;
