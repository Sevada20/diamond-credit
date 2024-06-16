import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MainLayout from "./layout/MainLayout/MainLayout";
import ContractsPage from "./pages/ContractsPage/ContractsPage";
import CustomersPage from "./pages/CustomersPage/CustomersPage";
import CashierPage from "./pages/CashierPage/CashierPage";
import "./globalStyles/global.css";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import TasksPage from "./pages/TasksPage/TasksPage";

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contracts" element={<ContractsPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/cashier" element={<CashierPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Route>
      <Route path="*" element={<div>Note found 404</div>} />
    </Routes>
  );
}

export default App;
