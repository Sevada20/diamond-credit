import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./styles";
const MainLayout = () => {
  const location = useLocation();
  const isNewContract = location.pathname
    .toLowerCase()
    .includes("/new-contract");
  const classes = styles({ isNewContract });

  return (
    <div className={classes.mainLayoutContainer}>
      <Sidebar />
      <div className={classes.mainLayout}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
