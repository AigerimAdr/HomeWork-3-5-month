import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UsersPage from "./pages/UsersPage";
import UserInfoPage from "./pages/UserInfoPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="/users/:userId" element={<UserInfoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
