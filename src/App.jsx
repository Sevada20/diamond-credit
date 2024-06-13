import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import MainLayout from "./layout/MainLayout/MainLayout";
import "./globalStyles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="*" element={<div>Note found 404</div>} />
    </Routes>
  );
}

export default App;
