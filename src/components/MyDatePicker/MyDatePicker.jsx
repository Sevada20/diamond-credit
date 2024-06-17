import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import dateIcon from "@/assets/icons/contractsIcons/dateIcon.svg";
import styles from "./styles";

const Armenian = {
  weekdays: {
    shorthand: ["Կիր", "Երկ", "Երք", "Չրք", "Հնգ", "Ուրբ", "Շաբ"],
    longhand: [
      "Կիրակի",
      "Երկուշաբթի",
      "Երեքշաբթի",
      "Չորեքշաբթի",
      "Հինգշաբթի",
      "Ուրբաթ",
      "Շաբաթ",
    ],
  },
  months: {
    shorthand: [
      "Հնվ",
      "Փետ",
      "Մար",
      "Ապր",
      "Մայ",
      "Հուն",
      "Հուլ",
      "Օգս",
      "Սեպ",
      "Հոկ",
      "Նոյ",
      "Դեկ",
    ],
    longhand: [
      "Հունվար",
      "Փետրվար",
      "Մարտ",
      "Ապրիլ",
      "Մայիս",
      "Հունիս",
      "Հուլիս",
      "Օգոստոս",
      "Սեպտեմբեր",
      "Հոկտեմբեր",
      "Նոյեմբեր",
      "Դեկտեմբեր",
    ],
  },
  firstDayOfWeek: 1,
  ordinal: () => "",
  rangeSeparator: " - ",
  weekAbbreviation: "ՇԲՏ",
  scrollTitle: "Ոլորեք՝ մեծացնելու համար",
  toggleTitle: "Սեղմեք՝ փոխելու համար",
  time_24hr: true,
};

const MyDatePicker = ({ label, subLabel, register, name, errors }) => {
  const classes = styles();

  return (
    <>
      {label && (
        <label htmlFor="rightInput3" className={classes.label}>
          {label}
        </label>
      )}
      <div className={classes.inputWithIcon}>
        <span className={classes.subLabel}>{subLabel}</span>
        <img className={classes.dateIcon} src={dateIcon} alt="Date icon" />
        <Flatpickr
          className={classes.flatpickrInput}
          data-enable-time
          value={date}
          onChange={(selectedDates) => register(name, selectedDates[0])}
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
