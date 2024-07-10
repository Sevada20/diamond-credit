import { useEffect, useRef } from "react";
import styles from "./styles";

const Modal = ({ isOpen, onClose, children, externalRef }) => {
  const classes = styles();
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      externalRef?.current &&
      !externalRef.current.contains(event.target)
    ) {
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
    <div className={classes.overlay}>
      <div className={classes.modal} ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
