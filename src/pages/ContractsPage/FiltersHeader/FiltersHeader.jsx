import { useState } from "react";
import { mainFilters } from "@/assets/data/filterFields";
import MyDatePicker from "@/components/MyDatePicker/MyDatePicker";
import styles from "./styles";

const FiltersHeader = ({ handleFilterChange, activeFilterStatus }) => {
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

  const handleFilterClick = (filterId) => {
    const filter = mainFilters.find((f) => f.id === filterId);
    if (filter) {
      handleFilterChange(filter.status);
    }
  };

  return (
    <div className={classes.filtersHeader}>
      <div className={classes.mainFiltersMenu}>
        {mainFilters.map((filter) => (
          <span
            onClick={() => {
              handleFilterClick(filter.id);
            }}
            key={filter.id}
            className={`${classes.mainFilterItem} ${
              activeFilterStatus === filter.status ? classes.active : ""
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
