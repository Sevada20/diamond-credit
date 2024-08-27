import styles from "./styles";
const Clients = ({ clients }) => {
  const classes = styles();

  return (
    <div className={classes.clientsContainer}>
      <div className={classes.clientsList}>
        {clients.map((client) => (
          <img
            className={classes.clientImage}
            key={client.id}
            src={client.image}
            alt="client"
          />
        ))}
      </div>
      <button className={classes.createClientButton}>
        <span className={classes.createClientButtonText}>
          + {clients.length} Նոր հաճախորդ
        </span>
      </button>
    </div>
  );
};

export default Clients;
