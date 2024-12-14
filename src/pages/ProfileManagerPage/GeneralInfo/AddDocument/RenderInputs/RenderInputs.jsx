import { addNewDocumentSelectOptions } from "@/assets/data/addNewDocument";
import { addDocumentInputs } from "@/assets/data/addNewDocument";
import styles from "./styles";

const RenderInputs = ({ formData, handleInputChange }) => {
  const classes = styles();

  return (
    <div className={classes.renderInputsContainer}>
      {addDocumentInputs[formData.documentType]?.map((input) => (
        <div key={input.id} className={classes.inputContainer}>
          <span className={classes.inputLabel}>{input.label}</span>
          <input
            className={classes.input}
            name={input.name}
            value={formData[input.name]}
            onChange={handleInputChange}
          />
        </div>
      ))}
    </div>
  );
};

export default RenderInputs;
