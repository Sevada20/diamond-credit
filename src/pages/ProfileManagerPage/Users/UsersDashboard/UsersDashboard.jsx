import addIcon from "@/assets/icons/contractsIcons/addIcon.svg";
import UsersFiltersControlBar from "../UsersFiltersControlBar/UsersFiltersControlBar";
import UsersFilters from "../UsersFilters/UsersFilters";
import ActiveUsersList from "../ActiveUsersList/ActiveUsersList";
import styles from "./styles";

const UsersDashboard = ({ showFilters, setShowFilters, users, updateUrl }) => {
  const classes = styles();

  return (
    <div className={classes.usersContainer}>
      <div className={classes.header}>
        <span className={classes.title}>Օգտատերեր</span>
        <button
          className={classes.addButton}
          onClick={() => updateUrl("add-user-steps", 1)}
        >
          <img src={addIcon} alt="add icon" />
          <span className={classes.addButtonText}>Ավելացնել</span>
        </button>
      </div>
      <UsersFiltersControlBar
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      {showFilters && <UsersFilters />}
      <ActiveUsersList users={users} />
    </div>
  );
};

export default UsersDashboard;
