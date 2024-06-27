import styles from "./styles";
const Step3 = ({ goToNextStep }) => {
  const classes = styles();
  return (
    <div>
      <button className={classes.button} onClick={goToNextStep}>
        next
      </button>
      step3
    </div>
  );
};

export default Step3;
