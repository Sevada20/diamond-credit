import SearchIcon from "@/assets/icons/headerIcons/SearchIcon";
import LetterIcon from "@/assets/icons/headerIcons/LetterIcon";
import NotificationIcon from "@/assets/icons/headerIcons/NotificationIcon";
import userIcon from "../../assets/icons/headerIcons/userIcon.png";
import styles from "./styles";

const Header = () => {
  const classes = styles();

  return (
    <div className={classes.headerContainer}>
      <div className={classes.searchBar}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Փնտրել"
          className={classes.searchInput}
        />
      </div>
      <div className={classes.userPanel}>
        <div className={classes.iconContainer}>
          <LetterIcon />
          <span className={classes.iconText}>Նամակներ</span>
        </div>
        <div className={classes.iconContainer}>
          <NotificationIcon />
          <span className={classes.iconText}>Ծանուցումներ</span>
        </div>
        <div className={classes.iconContainer}>
          <img src={userIcon} alt="userIcon" />
          <span className={classes.iconText}>User Name</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
