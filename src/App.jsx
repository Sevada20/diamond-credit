import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MainLayout from "./layout/MainLayout/MainLayout";
import ContractsPage from "./pages/ContractsPage/ContractsPage";
import NewContractPage from "./pages/NewContractPage/NewContractPage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";
import CashierPage from "./pages/CashierPage/CashierPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import ContractDetailsPage from "./pages/ContractDetailsPage/ContractDetailsPage";
import ContractOverviewPage from "./pages/ContractOverviewPage/ContractOverviewPage";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import ProfileManagerPage from "./pages/ProfileManagerPage/ProfileManagerPage";
import "./globalStyles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignInPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contracts" element={<ContractsPage />} />
          <Route path="/contracts/:id" element={<ContractDetailsPage />}>
            <Route index element={<ContractOverviewPage />} />
            <Route path="customers" element={<CustomersPage />} />
          </Route>
          <Route path="/profile-manager" element={<ProfileManagerPage />} />
          <Route path="/new-contract" element={<NewContractPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/cashier" element={<CashierPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Note found 404</div>} />
    </Routes>
  );
}

export default App;
