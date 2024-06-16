import { useState } from "react";
import { Link } from "react-router-dom";
import DashBoardIcon from "@/assets/icons/sidebarIcons/DashboardIcon";
import CustomersIcon from "@/assets/icons/sidebarIcons/CustomersIcon";
import ContractsIcon from "@/assets/icons/sidebarIcons/ContractsIcon";
import CashierIcon from "@/assets/icons/sidebarIcons/CashierIcon";
import CalendarIcon from "@/assets/icons/sidebarIcons/CalendarIcon";
import TaskIcon from "@/assets/icons/sidebarIcons/TaskIcon";
import SettingsIcon from "@/assets/icons/sidebarIcons/SettingsIcon";
import ExitIcon from "@/assets/icons/sidebarIcons/ExitIcon";
import styles from "./styles";
import { useTheme } from "react-jss";

const Sidebar = () => {
  const classes = styles();
  const theme = useTheme();
  const [activeLink, setActiveIcon] = useState(0);

  const handleIconClick = (index) => {
    setActiveIcon(index);
  };

  const getIconStyle = (index) => {
    return index === activeLink ? classes.activeLink : "";
  };

  return (
    <div
      style={{ padding: "0px 5px 20px 5px" }}
      className={classes.sideBarContainer}
    >
      <div className={classes.sidebarMenuContainer}>
        <h3 className={classes.title}>DIAMOND</h3>
        <div className={classes.iconsContainer}>
          <Link
            to="/"
            onClick={() => handleIconClick(0)}
            className={`${classes.iconLink} ${getIconStyle(0)}`}
          >
            <DashBoardIcon />
          </Link>
          <Link
            to="/customers"
            onClick={() => handleIconClick(1)}
            className={`${classes.iconLink} ${getIconStyle(1)}`}
          >
            <CustomersIcon
              color={activeLink === 1 ? theme.backgroundBase : ""}
            />
          </Link>
          <Link
            to="/contracts"
            onClick={() => handleIconClick(2)}
            className={`${classes.iconLink} ${getIconStyle(2)}`}
          >
            <ContractsIcon
              color={activeLink === 2 ? theme.backgroundBase : ""}
            />
          </Link>
          <Link
            to="/cashier"
            onClick={() => handleIconClick(3)}
            className={`${classes.iconLink} ${getIconStyle(3)}`}
          >
            <CashierIcon
              color1={activeLink === 3 ? theme.backgroundBase : "none"}
              color2={activeLink === 3 ? theme.backgroundBase : "#373962"}
            />
          </Link>
          <Link
            to="/calendar"
            onClick={() => handleIconClick(4)}
            className={`${classes.iconLink} ${getIconStyle(4)}`}
          >
            <CalendarIcon
              color1={activeLink === 4 ? theme.backgroundBase : "none"}
              color2={activeLink === 4 ? theme.backgroundBase : "#373962"}
            />
          </Link>
          <Link
            to="/tasks"
            onClick={() => handleIconClick(5)}
            className={`${classes.iconLink} ${getIconStyle(5)}`}
          >
            <TaskIcon
              color={activeLink === 5 ? theme.backgroundBase : "none"}
            />
          </Link>
        </div>
        <div className={classes.settingsContainer}>
          <SettingsIcon />
          <ExitIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
