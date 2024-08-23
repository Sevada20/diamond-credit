import moreIcon from "@/assets/icons/arrows/arrowRight.svg";
import styles from "./styles";

const Tasks = ({ tasks }) => {
  const classes = styles();

  return (
    <div className={classes.tasksContainer}>
      <div className={classes.header}>
        <span className={classes.title}>Առաջադրանքներ</span>
        <div className={classes.moreButton}>
          <span className={classes.moreText}>Ավելին</span>
          <img src={moreIcon} alt="more icon" />
        </div>
      </div>
      {tasks.map((task) => (
        <div key={task.id} className={classes.taskItem}>
          <div className={classes.taskInfo}>
            <span className={classes.taskName}>{task.name}</span>
            <span className={classes.taskTime}>{task.time}</span>
          </div>
          <span
            className={`${classes.completionProcess} ${classes[task.status]}`}
          >
            {task.completionProcess}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
