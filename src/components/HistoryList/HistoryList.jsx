import HistoryCard from "../HistoryCard/HistoryCard";
import styles from "./styles";
const HistoryList = ({ historyList }) => {
  const classes = styles();

  return (
    <div className={classes.historyListContainer}>
      {historyList.map((item) => (
        <HistoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default HistoryList;
