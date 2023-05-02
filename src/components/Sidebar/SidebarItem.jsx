import { NavLink } from "react-router-dom";

export default function SidebarItem({ children, to }) {
  const getActiveStyle = () => {
    return {
      backgroundColor: "#60a5fa",
      borderRadius: "8px",
      border: "1px solid",
      borderColor: "white",
    };
  };

  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return isActive ? getActiveStyle() : {};
      }}
      className="flex cursor-pointer border rounded-lg border-blue-500 transition duration-300 hover:bg-blue-400 hover:rounded-lg hover:border hover:border-1 hover:border-solid hover:border-white p-2"
    >
      {children}
    </NavLink>
  );
}
