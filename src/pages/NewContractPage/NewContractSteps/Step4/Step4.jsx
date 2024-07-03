import { useRef } from "react";
import locationIcon from "@/assets/icons/contractsIcons/locationIcon.svg";
import contactIcon from "@/assets/icons/contractsIcons/contactIcon.svg";
import emailIcon from "@/assets/icons/contractsIcons/emailIcon.svg";
import bankIcon from "@/assets/icons/contractsIcons/bankIcon.svg";
import bankCardIcon from "@/assets/icons/contractsIcons/bankCardIcon.svg";
import editIcon from "@/assets/icons/contractsIcons/editIcon.svg";
import removeIcon from "@/assets/icons/contractsIcons/removeIcon.svg";
import styles from "./styles";
const Step4 = ({ watch, setValue, setCurrentStep }) => {
  const classes = styles();
  const data = watch();

  const passportFileInputRef = useRef(null);
  const contractFileInputRef = useRef(null);

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files[0];
    setValue(fieldName, file);
  };

  const handleFileClick = (fieldName) => {
    if (fieldName === "passportFile") {
      passportFileInputRef.current.click();
    } else if (fieldName === "contractFile") {
      contractFileInputRef.current.click();
    }
  };

  const removeFile = (fieldName) => {
    setValue(fieldName, null);
    if (fieldName === "passportFile") {
      passportFileInputRef.current.value = null;
    } else if (fieldName === "contractFile") {
      contractFileInputRef.current.value = null;
    }
  };

  return (
    <div className={classes.stepContainer}>
      <div className={classes.stepInnerContainer}>
        {data.name && (
          <span className={classes.userName}>
            {data.name} {data.surName} {data.patronymic}
          </span>
        )}
        <div className={classes.dataGroupBlock}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}>Անձնական տվյալներ</span>
            <img
              onClick={() => setCurrentStep(1)}
              className={classes.editIcon}
              src={editIcon}
              alt="edit icon"
            />
          </div>
          <div className={classes.divider}></div>
          <div className={classes.dataField}>
            {data.birthdayDay && (
              <span className={classes.label}>
                Ծննդյան տարեթիվ:{" "}
                <span className={classes.value}>
                  {data.birthdayDay}/{data.birthdayMonth}/{data.birthdayYear}
                </span>
              </span>
            )}
            {data.passportSeries && (
              <span className={classes.label}>
                Անձնագիր:{" "}
                <span className={classes.value}>
                  {data.passportSeries}, {data.validity}թ․ տրվ․ {data.given}
                </span>
              </span>
            )}
          </div>
        </div>
        <div className={classes.dataGroupBlock}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}>Կոնտակտային տվյալներ</span>
            <img
              onClick={() => setCurrentStep(1)}
              className={classes.editIcon}
              src={editIcon}
              alt="edit icon"
            />
          </div>
          <div className={classes.divider}></div>
          <div className={classes.dataField}>
            {data.country && (
              <div className={classes.valueContainer}>
                <img src={locationIcon} alt="location icon" />
                <span className={classes.value}>
                  {data.country}, {data.city}, {data.streetBuilding}
                </span>
              </div>
            )}
            {data.phone && (
              <div className={classes.valueContainer}>
                <img src={contactIcon} alt="contact icon" />
                <span className={classes.value}>
                  {data.phone}, {data.additionalPhone}
                </span>
              </div>
            )}
            {data.email && (
              <div className={classes.valueContainer}>
                <img src={emailIcon} alt="email icon" />
                <span className={classes.value}>{data.email}</span>
              </div>
            )}
          </div>
        </div>
        <div className={classes.dataGroupBlock}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}>Վարկի տվյալներ</span>
            <img className={classes.editIcon} src={editIcon} alt="edit icon" />
          </div>
          <div className={classes.divider}></div>
          <div className={classes.dataField}>
            {data.techniqueSubCategories[0].subCategory && (
              <span className={classes.label}>
                Նկարագրություն։{" "}
                <span className={classes.value}>
                  {data.techniqueSubCategories[0].subCategory}
                  {data.techniqueSubCategories[0].model}
                </span>
              </span>
            )}
            {data.rated && (
              <span className={classes.label}>
                Գնահատված: <span className={classes.value}>{data.rated}</span>
              </span>
            )}
            {data.provided && (
              <span className={classes.label}>
                Տրամադրված:{" "}
                <span className={classes.value}>{data.provided}</span>
              </span>
            )}
            {data.percentRate && (
              <span className={classes.label}>
                Տոկոսադրույք:{" "}
                <span className={classes.value}>{data.percentRate}</span>
              </span>
            )}
            {data.fine && (
              <span className={classes.label}>
                Տուգանք: <span className={classes.value}>{data.fine}</span>
              </span>
            )}
            {data.contractTerm && (
              <span className={classes.label}>
                Պայմանագրի ժամկետ:{" "}
                <span className={classes.value}>{data.contractTerm}</span>
              </span>
            )}
            {data.oneTime && (
              <span className={classes.label}>
                Միանվագ: <span className={classes.value}>{data.oneTime}</span>
              </span>
            )}
          </div>
        </div>
        <div className={classes.dataGroupBlock}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}>Բանկային տվյալներ</span>
            <img
              onClick={() => {
                data.bankCardNumber ||
                  !data.bank ||
                  (!data.bankAccountNumber && setCurrentStep(3));
              }}
              className={classes.editIcon}
              src={editIcon}
              alt="edit icon"
            />
          </div>
          <div className={classes.divider}></div>
          {!data.bankCardNumber && !data.bank && !data.bankAccountNumber && (
            <div className={classes.valueContainer}>
              <img src={bankIcon} alt="bank icon" />
              <span className={classes.value}>Կանխիկ</span>
            </div>
          )}
          {data.bank && (
            <div className={classes.dataField}>
              {data.bank && (
                <div className={classes.valueContainer}>
                  <img src={bankIcon} alt="bank icon" />
                  <span className={classes.value}>{data.bank}</span>
                </div>
              )}
              {data.bankCardNumber && (
                <div className={classes.valueContainer}>
                  <img src={bankCardIcon} alt="bank card icon" />
                  <span className={classes.value}>{data.bankCardNumber}</span>
                </div>
              )}
              {data.bankAccountNumber && (
                <div className={classes.valueContainer}>
                  <img src={bankCardIcon} alt="bank card icon" />
                  <span className={classes.value}>
                    {data.bankAccountNumber}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={classes.dataGroupBlock}>
          <span className={classes.title}>Փաստաթղթեր</span>
          <div className={classes.divider}></div>
          <div className={classes.filesRowContainer}>
            <div className={classes.filesRow}>
              <div className={classes.inputWrapper}>
                <label className={classes.fileLabel}>Տեսակ</label>
                <input
                  disabled
                  className={classes.input}
                  placeholder="Անձնագիր"
                />
              </div>
              <div className={classes.fileUploadContainer}>
                <label className={classes.fileLabel}>Ֆայլեր</label>
                <div className={classes.uploadFileBlockWrapper}>
                  <div className={classes.uploadFileBlock}>
                    <span
                      onClick={() => handleFileClick("passportFile")}
                      className={classes.uploadFileSpan}
                    >
                      Ընտրել Ֆայլ
                    </span>
                    <span className={classes.statusUploaded}>
                      <span className={classes.statusUploadedText}>
                        {data.passportFile
                          ? data.passportFile.name
                          : "Ֆայլը ընտրված չէ"}
                      </span>
                    </span>
                    <input
                      ref={passportFileInputRef}
                      type="file"
                      id="passportFile"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e, "passportFile")}
                    />
                  </div>
                  {data.passportFile && (
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
            <div className={classes.filesRow}>
              <div className={classes.inputWrapper}>
                <label className={classes.fileLabel}>Տեսակ</label>
                <input
                  disabled
                  className={classes.input}
                  placeholder="Պայմանագիր"
                />
              </div>
              <div className={classes.fileUploadContainer}>
                <label className={classes.fileLabel}>Ֆայլեր</label>
                <div className={classes.uploadFileBlockWrapper}>
                  <div className={classes.uploadFileBlock}>
                    <span
                      onClick={() => handleFileClick("contractFile")}
                      className={classes.uploadFileSpan}
                    >
                      Ընտրել Ֆայլ
                    </span>
                    <input
                      ref={contractFileInputRef}
                      type="file"
                      id="contractFile"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileChange(e, "contractFile")}
                    />
                    <span className={classes.statusUploaded}>
                      <span
                        style={{ whiteSpace: "nowrap" }}
                        className={classes.statusUploadedText}
                      >
                        {data.contractFile
                          ? data.contractFile.name
                          : "Ֆայլը ընտրված չէ"}
                      </span>
                    </span>
                  </div>
                  {data.contractFile && (
                    <img
                      onClick={() => removeFile("contractFile")}
                      className={classes.removeIcon}
                      src={removeIcon}
                      alt="remove icon"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
