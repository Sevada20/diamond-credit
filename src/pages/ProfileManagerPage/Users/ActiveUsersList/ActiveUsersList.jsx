import ActiveUserCard from "../ActiveUserCard/ActiveUserCard";
import styles from "./styles";
const ActiveUsersList = ({ users }) => {
  const classes = styles();

  return (
    <div className={classes.activeUsersListContainer}>
      {users.map((user) => (
        <ActiveUserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default ActiveUsersList;
