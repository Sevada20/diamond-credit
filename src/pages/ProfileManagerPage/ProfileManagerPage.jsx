import { useNavigate, useParams } from "react-router-dom";
import { managerMenuItems } from "@/assets/data/menuManagerProfile";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import Users from "./Users/Users";
import Conditions from "./Conditions/Conditions";
import Deals from "./Deals/Deals";
import styles from "./styles";
const ProfileManagerPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const classes = styles();

  const updateUrl = (url) => {
    navigate(`/profile-manager/${url}`);
  };

  const renderContent = () => {
    switch (name) {
      case "general":
        return <GeneralInfo />;
      case "users":
        return <Users />;
      case "conditions":
        return <Conditions />;
      case "deals":
        return <Deals />;
      case "add-user-steps":
        return <Deals />;
      default:
        return <GeneralInfo />;
    }
  };

  return (
    <div className={classes.profileManagerPageContainer}>
      <p className={classes.title}>Կարգավորումներ</p>
      <div className={classes.pageContentContainer}>
        <div className={classes.menuBlock}>
          {managerMenuItems.map((item) => (
            <span
              className={`${classes.menuItem} ${
                name === item.title ? classes.active : ""
              }`}
              key={item.title}
              onClick={() => updateUrl(item.title)}
            >
              {item.label}
            </span>
          ))}
        </div>
        <div className={classes.contentBlock}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfileManagerPage;
