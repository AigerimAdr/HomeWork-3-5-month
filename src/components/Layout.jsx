import { NavLink, Outlet } from "react-router-dom";

const activeMenuLink = ({ isActive }) => (isActive ? "activeMenu" : "");

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className={activeMenuLink}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to={"/users"} className={activeMenuLink}>
              Пользователи
            </NavLink>
          </li>
          <li>
            <NavLink to={"/users/:userId"} className={activeMenuLink}>
              Информация о пользователе
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Geeks 2023</footer>
    </>
  );
};
export default Layout;
