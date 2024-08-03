import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthData } from "@/store/slices/auth/slice";

const PrivateRoute = () => {
  const { isAuth } = useSelector(selectAuthData);
  return isAuth ? <Outlet /> : <Navigate to="/signIn" />;
};

export default PrivateRoute;
