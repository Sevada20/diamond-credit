import { useRef, useState } from "react";
import { contractsHistoryList } from "@/assets/data/applicationHistoryList";
import Modal from "@/UI/Modal/Modal";
import menuIcon from "@/assets/icons/contractsIcons/menu.svg";
import HistoryList from "@/components/HistoryList/HistoryList";
import noteEditIcon from "@/assets/icons/contractsIcons/noteEditIcon.svg";
import styles from "./styles";
const ContractDetailsRightBar = () => {
  const menuIconRef = useRef();
  const notesMenuIconRef = useRef();
  const classes = styles();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotesMenu, setShowNotesMenu] = useState(false);
  const [newNoteText, setNewNoteText] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [noteDate, setNoteDate] = useState(null);
  const [notes, setNotes] = useState([
    { id: 1, text: "Ոսկու պատվեր", date: "23.04.2024, 18:00" },
    {
      id: 2,
      text: "Ժամանակին կատարել է բոլոր վճարումները",
      date: "24.04.2024, 10:00",
    },
    {
      id: 3,
      text: "Չզանգել 2-րդ հեռախոսահամարի",
      date: "25.04.2024, 12:00",
    },
    {
      id: 4,
      text: "Չզանգել 2-րդ հեռախոսահամարի",
      date: "25.04.2024, 12:00",
    },
  ]);

  const handleEditNote = (id, text, date) => {
    setIsEditing(id);
    setNewNoteText(text);
    setNoteDate(date);
  };

  const handleSaveNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          text: newNoteText,
          date: noteDate,
        };
      } else {
        return note;
      }
    });
    setNotes(updatedNotes);
    setIsEditing(null);
  };

  return (
    <div className={classes.rightBarContainer}>
      <div className={classes.historyContainer}>
        <div className={classes.titleContainer}>
          <span className={classes.title}>Պատմություն</span>
          <img
            ref={menuIconRef}
            onClick={() => setShowMenu(!showMenu)}
            className={classes.menuIcon}
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
                  <span className={classes.menuItem}>Արտահանել Exel</span>
                  <span className={classes.menuItem}>Արտահանել Քաղվածք</span>
                </div>
              </Modal>
            </div>
          )}
        </div>
        <div className={classes.contractHistoryListWrapper}>
          <HistoryList historyList={contractsHistoryList} />
        </div>
      </div>
      <div className={classes.notesContainer}>
        <div className={classes.notesTitleContainer}>
          <span className={classes.title}>Նշումներ</span>
          <img
            ref={notesMenuIconRef}
            onClick={() => setShowNotesMenu(!showNotesMenu)}
            className={classes.menuIcon}
            src={menuIcon}
            alt="more icon"
          />
          {showNotesMenu && (
            <div className={classes.menuModalWrapper}>
              <Modal
                isOpen={showNotesMenu}
                onClose={() => setShowNotesMenu(false)}
                externalRef={notesMenuIconRef}
              >
                <div className={classes.menu}>
                  <span className={classes.menuItem}>Արտահանել Exel</span>
                  <span className={classes.menuItem}>Ստեղծել Առաջադրանք</span>
                  <span className={classes.menuItem}>
                    Խնդրահարույց հաճախորդ
                  </span>
                </div>
              </Modal>
            </div>
          )}
        </div>
        <div className={classes.notesList}>
          {notes.map((note) => (
            <div className={classes.note} key={note.id}>
              {isEditing === note.id ? (
                <button
                  onClick={() => handleSaveNote(note.id)}
                  className={classes.saveBtn}
                >
                  Պահպանել
                </button>
              ) : (
                <img
                  onClick={() => handleEditNote(note.id, note.text, note.date)}
                  className={classes.editIcon}
                  src={noteEditIcon}
                  alt="edit icon"
                />
              )}
              <div className={classes.noteInfo}>
                {isEditing === note.id ? (
                  <>
                    <input
                      className={classes.noteInput}
                      value={newNoteText}
                      onChange={(e) => setNewNoteText(e.target.value)}
                    />
                    <input
                      className={classes.noteInput}
                      type="text"
                      value={noteDate}
                      onChange={(e) => setNoteDate(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <span className={classes.noteText}>{note.text}</span>
                    <span className={classes.noteDate}>{note.date}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContractDetailsRightBar;
