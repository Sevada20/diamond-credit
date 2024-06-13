import styles from "./styles";
import MainIcon from "../../assets/icons/sidebarIcons/MainIcon";
import CustomersIcon from "../../assets/icons/sidebarIcons/CustomersIcon";
import FormIcon from "../../assets/icons/sidebarIcons/FormIcon";
import CashierIcon from "../../assets/icons/sidebarIcons/CashierIcon";
import CalendarIcon from "../../assets/icons/sidebarIcons/CalendarIcon";
import TaskIcon from "../../assets/icons/sidebarIcons/TaskIcon";
import SettingsIcon from "../../assets/icons/sidebarIcons/SettingsIcon";
import ExitIcon from "../../assets/icons/sidebarIcons/ExitIcon";

const Sidebar = () => {
  const classes = styles();

  return (
    <div className={classes.sideBarContainer}>
      <h3 className={classes.title}>DIAMOND</h3>
      <div>
        <MainIcon />
        <CustomersIcon />
        <FormIcon />
        <CashierIcon />
        <CalendarIcon />
        <TaskIcon />
      </div>
      <div>
        <SettingsIcon />
        <ExitIcon />
      </div>
    </div>
  );
};

export default Sidebar;
