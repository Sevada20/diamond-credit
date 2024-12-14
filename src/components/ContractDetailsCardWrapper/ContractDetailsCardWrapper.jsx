import styles from "./styles";
const ContractDetailsCardWrapper = ({ name, img, id, category, children }) => {
  const classes = styles();

  return (
    <div className={classes.cardWrapper}>
      <span className={classes.historyId}>#{id}</span>
      <span>{category}</span>
      {children}
      <div className={classes.userContainer}>
        <img
          width={28}
          height={28}
          src={img}
          className={classes.userImg}
          alt="user"
        />
        <div className={classes.userInfo}>
          <span className={classes.userRole}>Կատարող</span>
          <span className={classes.userName}>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default ContractDetailsCardWrapper;
