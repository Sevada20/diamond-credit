import { useEffect, useRef } from "react";
import styles from "./styles";

const ComplexModal = ({
  isOpen,
  onClose,
  children,
  title,
  confirmBtnText,
  confirmCallback,
  customWidth,
}) => {
  const classes = styles({ customWidth });
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={classes.modalContainer}>
      <div className={classes.modal} ref={modalRef}>
        {title && <span className={classes.title}>{title}</span>}
        <div className={classes.content}>{children}</div>
        <div className={classes.buttonsContainer}>
          <button onClick={onClose} className={classes.cancelBtn}>
            Չեղարկել
          </button>
          <button
            className={classes.confirmBtn}
            onClick={confirmCallback && confirmCallback}
          >
            {confirmBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplexModal;
