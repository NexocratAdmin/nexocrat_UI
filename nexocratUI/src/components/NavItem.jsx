import { NavLink } from "react-router-dom";

const NavItem = ({ to, children, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md text-base font-medium ${
          isActive
            ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default NavItem;

