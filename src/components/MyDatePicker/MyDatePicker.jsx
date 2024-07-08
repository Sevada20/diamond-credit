import { Armenian } from "@/assets/data/localeDatePicker";
import Flatpickr from "react-flatpickr";
import dateIcon from "@/assets/icons/contractsIcons/dateIcon.svg";
import "flatpickr/dist/flatpickr.min.css";
import styles from "./styles";

const MyDatePicker = ({
  label,
  subLabel,
  register,
  name,
  value,
  onChange,
  errors,
  customStyle,
}) => {
  const classes = styles({ customStyle });

  return (
    <>
      <label htmlFor="rightInput3" className={classes.label}>
        {label}
      </label>
      <div className={classes.inputWithIcon}>
        <span className={classes.subLabel}>{subLabel}</span>
        <img className={classes.dateIcon} src={dateIcon} alt="Date icon" />
        <Flatpickr
          className={classes.flatpickrInput}
          data-enable-time
          value={value}
          onChange={onChange}
          options={{
            dateFormat: "d F Y",
            locale: Armenian,
            enableTime: false,
          }}
        />
      </div>
    </>
  );
};

export default MyDatePicker;
