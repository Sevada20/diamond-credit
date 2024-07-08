import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "react-jss";
import { sidebarLinks } from "../../assets/data/sidebarLinks";
import SettingsIcon from "@/assets/icons/sidebarIcons/SettingsIcon";
import ExitIcon from "@/assets/icons/sidebarIcons/ExitIcon";
import logoIcon from "@/assets/icons/sidebarIcons/logo.svg";
import styles from "./styles";
const Sidebar = () => {
  const classes = styles();
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState(0);

  const handleIconClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className={classes.sideBarContainer}>
      <img className={classes.logo} src={logoIcon} alt="logo" />
      <div className={classes.sidebarMenuContainer}>
        <div className={classes.iconsContainer}>
          {sidebarLinks.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.to}
                onClick={() => handleIconClick(index)}
                className={`${classes.iconLink} ${
                  index === activeLink ? classes.activeLink : ""
                }`}
              >
                <link.icon
                  color={index === activeLink ? theme.backgroundBase : "none"}
                  color1={index === activeLink ? theme.backgroundBase : "none"}
                  color2={
                    index === activeLink ? theme.backgroundBase : "#373962"
                  }
                />
              </Link>
            );
          })}
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
