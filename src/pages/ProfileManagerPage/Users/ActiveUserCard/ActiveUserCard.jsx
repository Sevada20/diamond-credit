import styles from "./styles";

const ActiveUserCard = ({
  image,
  name,
  surname,
  email,
  role,
  position,
  startDate,
}) => {
  const classes = styles();

  return (
    <div className={classes.activeUserCard}>
      <div className={classes.titleContainer}>
        <img width={100} height={100} src={image} alt="user avatar" />
        <div className={classes.useInfo}>
          <span className={classes.nameBlock}>
            {name} {surname}
          </span>
          <span className={classes.email}>{email}</span>
        </div>
      </div>
      <span className={`${classes.role} ${classes[role]}`}>{role}</span>
      <div className={classes.footer}>
        <span className={classes.position}>{position}</span>
        <span className={classes.date}>Սկիզբ։ {startDate}</span>
      </div>
    </div>
  );
};

export default ActiveUserCard;
