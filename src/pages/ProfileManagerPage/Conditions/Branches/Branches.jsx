import { branches } from "@/assets/data/profileManager";
import { branchesListTitles } from "@/assets/data/profileManager";
import addIcon from "@/assets/icons/contractsIcons/addIcon.svg";
import BranchesItem from "../../BranchesItem/BranchesItem";
import styles from "./styles";
const Branches = () => {
  const classes = styles();
  return (
    <div className={classes.branchesContainer}>
      <div className={classes.titleContainer}>
        <span className={classes.title}>Մասնաճյուղեր</span>
        <button className={classes.addButton}>
          <img src={addIcon} alt="add icon" />
          <span>Ավելացնել</span>
        </button>
      </div>
      <div className={classes.branchesListContainer}>
        <div className={classes.branchesListTitles}>
          {branchesListTitles.map((item) => (
            <span key={item.id} className={classes.branchesListTitle}>
              {item.title}
            </span>
          ))}
        </div>
        {branches.map((branch) => (
          <BranchesItem key={branch.id} {...branch} />
        ))}
      </div>
    </div>
  );
};

export default Branches;
