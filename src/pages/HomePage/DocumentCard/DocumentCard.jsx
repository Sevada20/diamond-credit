import Capacity from "./Capacity/Capacity";
import styles from "./styles";

const DocumentCard = ({ name, quantity, icon, capacity }) => {
  const classes = styles();

  return (
    <div key={document.id} className={classes.documentItemContainer}>
      <div className={classes.documentInfo}>
        <div className={classes.documentIconWrapper}>
          <img src={icon} alt="document icon" />
        </div>
        <div className={classes.documentInfoBlock}>
          <span className={classes.name}>{name}</span>
          <span className={classes.quantity}>{quantity} ֆայլեր</span>
        </div>
      </div>
      <Capacity capacity={capacity} />
    </div>
  );
};

export default DocumentCard;
