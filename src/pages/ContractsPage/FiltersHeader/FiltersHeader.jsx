import { useState } from "react";
import { mainFilters } from "@/assets/data/filterFields";
import MyDatePicker from "@/components/MyDatePicker/MyDatePicker";
import styles from "./styles";

const FiltersHeader = () => {
  const [activeFilter, setActiveFilter] = useState(1);
  const classes = styles({ activeFilter });
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

  return (
    <div className={classes.filtersHeader}>
      <div className={classes.mainFiltersMenu}>
        {mainFilters.map((filter) => (
          <span
            onClick={() => setActiveFilter(filter.id)}
            key={filter.id}
            className={`${classes.mainFilterItem} ${
              activeFilter === filter.id ? classes.active : ""
            }`}
          >
            {filter.label}
          </span>
        ))}
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
