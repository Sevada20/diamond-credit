import styles from "./styles";
const Duration = () => {
  const classes = styles();
  return (
    <div className={classes.durationContainer}>
      <span className={classes.title}>Տևողություն</span>
      <div className={classes.contentContainer}>
        <div className={classes.categoryItemBlock}>
          <span className={classes.label}>Տեխնիկա</span>
          <input placeholder="153 օր" className={classes.input} />
        </div>
        <div className={classes.categoryItemBlock}>
          <span className={classes.label}>Ոսկի</span>
          <input placeholder="153 օր" className={classes.input} />
        </div>
        <div className={classes.categoryItemBlock}>
          <span className={classes.label}>Մեքենա</span>
          <input placeholder="153 օր" className={classes.input} />
        </div>
        <div className={classes.actionButtonsContainer}>
          <button className={classes.saveButton}>Հաստատել</button>
          <button className={classes.cancelButton}>Չեղարկել</button>
        </div>
      </div>
    </div>
  );
};

export default Duration;
