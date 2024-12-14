import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { profileManagerMenuConditions } from "@/assets/data/profileManager";
import queryString from "query-string";
import styles from "./styles";
import RenderConditionsSection from "./RenderConditionsSection/RenderConditionsSection";
const Conditions = () => {
  const classes = styles();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const [activeFilterStatus, setActiveFilterStatus] = useState(
    queryParams.section || ""
  );

  useEffect(() => {
    if (activeFilterStatus) {
      navigate(`?section=${activeFilterStatus}`);
    }
  }, [activeFilterStatus, navigate]);

  return (
    <div className={classes.conditionsContainer}>
      <div className={classes.mainFiltersMenu}>
        {profileManagerMenuConditions.map((filter) => (
          <span
            key={filter.id}
            className={`${classes.menuItem} ${
              activeFilterStatus === filter.status ? classes.active : ""
            }`}
            onClick={() => setActiveFilterStatus(filter.status)}
          >
            {filter.label}
          </span>
        ))}
      </div>
      <RenderConditionsSection activeSection={activeFilterStatus} />
    </div>
  );
};

export default Conditions;
