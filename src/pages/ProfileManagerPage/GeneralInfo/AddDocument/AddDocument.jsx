import { useRef } from "react";
import { addNewDocumentSelectOptions } from "@/assets/data/addNewDocument";
import removeIcon from "@/assets/icons/contractsIcons/removeIcon.svg";
import styles from "./styles";
import RenderInputs from "./RenderInputs/RenderInputs";

const AddDocument = ({
  setShowAddDocument,
  showAddDocument,
  removeFile,
  formData,
  handleInputChange,
  handleDocumentTypeChange,
  handleFileChange,
  handleFileClick,
}) => {
  const classes = styles();

  const fileInputRef = useRef(null);

  return (
    <div className={classes.addDocumentContainer}>
      <span className={classes.title}>Նոր Փաստաթղթուղթ</span>
      <div className={classes.documentTypeContainer}>
        <div className={classes.documentTypeWrapper}>
          <span className={classes.selectLabel}>Տեսակ</span>
          <select
            className={classes.select}
            name="documentType"
            value={formData.documentType}
            onChange={handleDocumentTypeChange}
          >
            <option value="">Ընտրել փաստաթուղթ</option>
            {addNewDocumentSelectOptions.map((option) => (
              <option
                className={classes.selectOption}
                key={option.id}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.uploadFileBlockWrapper}>
          <span className={classes.uploadFileLabel}>Ֆայլեր</span>
          <div className={classes.uploadFile}>
            <div className={classes.uploadFileBlock}>
              <span
                onClick={() => handleFileClick(fileInputRef)}
                className={classes.uploadFileSpan}
              >
                Ընտրել Ֆայլ
              </span>
              <span className={classes.statusUploaded}>
                <span className={classes.statusUploadedText}>
                  {formData.file ? formData.file.name : "Ֆայլը ընտրված չէ"}
                </span>
              </span>
              <input
                ref={fileInputRef}
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e)}
              />
            </div>
            {formData.file && (
              <img
                onClick={() => removeFile("passportFile")}
                className={classes.removeIcon}
                src={removeIcon}
                alt="remove icon"
              />
            )}
          </div>
        </div>
      </div>
      <RenderInputs formData={formData} handleInputChange={handleInputChange} />
      {showAddDocument && (
        <div className={classes.actionButtonsContainer}>
          <button
            onClick={() => setShowAddDocument(false)}
            className={classes.cancelButton}
          >
            Չեղարկել
          </button>
          <button
            onClick={() => setShowAddDocument(false)}
            className={classes.saveButton}
          >
            Պահպանել
          </button>
        </div>
      )}
    </div>
  );
};

export default AddDocument;
