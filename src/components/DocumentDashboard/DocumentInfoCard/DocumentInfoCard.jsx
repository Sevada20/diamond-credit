import styles from "./styles";

const DocumentInfoCard = ({ icon, title, countFiles = "", memory = "" }) => {
  const classes = styles();

  return (
    <div className={classes.documentInfoCard}>
      <img src={icon} alt="Document icon" />
      <div>
        <span>{title}</span>
        <span>{countFiles} ֆայլեր</span>
      </div>
      <div>
        <span>{memory} Gb</span>
      </div>
    </div>
  );
};

export default DocumentInfoCard;
