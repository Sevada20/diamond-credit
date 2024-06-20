import { useState } from "react";
import MyDatePicker from "@/components/MyDatePicker/MyDatePicker";
import styles from "./styles";

const FiltersHeader = () => {
  const classes = styles();
  const [dates, setDates] = useState({
    dateFrom: new Date(),
    dateTo: new Date(),
  });

  const handleDateChange = (field) => (date) => {
    setDates((prevDates) => ({
      ...prevDates,
      [field]: date,
    }));
  };

  console.log("dates in filtersHeader", dates);

  return (
    <div className={classes.filtersHeader}>
      <div className={classes.mainFiltersMenu}>
        <span
          style={{ borderBottom: "3px solid #373962" }}
          className={classes.mainFilterItem}
        >
          Ընդհանուր
        </span>
        <span className={classes.mainFilterItem}>Ակտիվ</span>
        <span className={classes.mainFilterItem}>Փակված</span>
        <span className={classes.mainFilterItem}>Իրացված</span>
        <span className={classes.mainFilterItem}>Ժամկետանց</span>
      </div>
      <div className={classes.dates}>
        <MyDatePicker
          subLabel="Ամսաթիվ"
          customStyle="#eeeaf8"
          value={dates.dateFrom}
          onChange={handleDateChange("dateFrom")}
        />
        <MyDatePicker
          subLabel="Ամսաթիվ"
          customStyle="#eeeaf8"
          value={dates.dateTo}
          onChange={handleDateChange("dateTo")}
        />
      </div>
    </div>
  );
};

export default FiltersHeader;
