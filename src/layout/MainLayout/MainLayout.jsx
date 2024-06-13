import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./styles";
import Sidebar from "../Sidebar/Sidebar";
const MainLayout = () => {
  const classes = styles();

  return (
    <>
      <Header />
      <div className={classes.mainLayout}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
