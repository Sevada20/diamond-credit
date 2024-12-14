import ApplicationHistoryCard from "../ApplicationHistoryCard/ApplicationHistoryCard";
import styles from "./styles";
const ApplicationHistoryList = ({ applicationHistoryList }) => {
  const classes = styles();

  return (
    <div className={classes.applicationHistoryListContainer}>
      {applicationHistoryList.map((item) => (
        <ApplicationHistoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ApplicationHistoryList;
