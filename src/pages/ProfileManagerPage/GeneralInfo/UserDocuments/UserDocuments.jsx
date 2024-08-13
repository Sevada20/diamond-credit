import { useRef, useState } from "react";
import Modal from "@/UI/Modal/Modal";
import menuIcon from "@/assets/icons/contractsIcons/menu.svg";
import documentIcon from "@/assets/icons/documentIcons/documentIcon.svg";
import downloadIcon from "@/assets/icons/contractsIcons/downloadIcon.svg";
import styles from "./styles";
import AddDocument from "../AddDocument/AddDocument";
const UserDocuments = () => {
  const classes = styles();
  const [showMenu, setShowMenu] = useState(false);
  const menuIconRef = useRef(null);
  const [showAddDocument, setShowAddDocument] = useState(false);
  const [formData, setFormData] = useState({
    documentType: "",
    number: "",
    validityPeriod: "",
    given: "",
    date: "",
    type: "",
    name: "",
    description: "",
    file: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({
      ...formData,
      file,
    });
  };

  const handleFileClick = (fileRef) => {
    fileRef.current.click();
  };

  const removeFile = (fileInputRef) => {
    setFormData({
      ...formData,
      file: null,
    });
    fileInputRef.current.value = null;
  };

  const handleDocumentTypeChange = (event) => {
    setFormData({
      ...formData,
      documentType: event.target.value,
    });
  };

  return (
    <div className={classes.userDocumentsContainer}>
      <div className={classes.userDocumentsHeader}>
        <span className={classes.title}>Անձնական տվյալներ</span>
        <img
          ref={menuIconRef}
          onClick={() => setShowMenu(!showMenu)}
          className={classes.menuIcon}
          width={17}
          src={menuIcon}
          alt="more icon"
        />
        {showMenu && (
          <div className={classes.menuModalWrapper}>
            <Modal
              isOpen={showMenu}
              onClose={() => setShowMenu(false)}
              externalRef={menuIconRef}
            >
              <div className={classes.menu}>
                <span className={classes.menuItem}>Խմբագրել</span>
                <span
                  onClick={() => {
                    setShowAddDocument(true);
                    setShowMenu(false);
                  }}
                  className={classes.menuItem}
                >
                  Ավելացնել փաստաթուղթ
                </span>
              </div>
            </Modal>
          </div>
        )}
      </div>
      <div className={classes.documentItemBlock}>
        <div className={classes.documentItem}>
          <div className={classes.titleContainer}>
            <img src={documentIcon} alt="document icon" />
            <span className={classes.documentItemTitle}>Անձնագիր</span>
          </div>
          <div className={classes.documentItemInfo}>
            AP0686851, 02.12.2017, 005
          </div>
        </div>
        <div className={classes.downloadIconContainer}>
          <img src={downloadIcon} alt="download icon" />
          <span className={classes.downloadIconText}>Ներբեռնել</span>
        </div>
      </div>
      <div className={classes.documentItemBlock}>
        <div className={classes.documentItem}>
          <div className={classes.titleContainer}>
            <img src={documentIcon} alt="document icon" />
            <span className={classes.documentItemTitle}>
              Աշխատանքային պայմանագիր
            </span>
          </div>
          <div className={classes.documentItemInfo}>
            N145135031, 05.07.2024, անժամկետ
          </div>
        </div>
        <div className={classes.downloadIconContainer}>
          <img src={downloadIcon} alt="download icon" />
          <span className={classes.downloadIconText}>Ներբեռնել</span>
        </div>
      </div>
      {showAddDocument && (
        <AddDocument
          handleFileClick={handleFileClick}
          removeFile={removeFile}
          handleFileChange={handleFileChange}
          formData={formData}
          handleInputChange={handleInputChange}
          handleDocumentTypeChange={handleDocumentTypeChange}
        />
      )}
    </div>
  );
};

export default UserDocuments;
