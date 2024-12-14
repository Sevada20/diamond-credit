import { collateralTypes } from "@/assets/data/profileManager";
import CollateralTypesItem from "../../CollateralTypesItem/CollateralTypesItem";
import styles from "./styles";
const CollateralTypes = () => {
  const classes = styles();
  return (
    <div className={classes.collateralTypesContainer}>
      <span className={classes.title}>Տեսակներ</span>
      <div className={classes.categoriesContainer}>
        {collateralTypes.map((item) => (
          <CollateralTypesItem key={item.id} {...item} />
        ))}
      </div>
      <div className={classes.addButtonContainer}>
        <div className={classes.line}></div>
        <span className={classes.addButtonText}>Ավելացնել</span>
      </div>
    </div>
  );
};

export default CollateralTypes;
