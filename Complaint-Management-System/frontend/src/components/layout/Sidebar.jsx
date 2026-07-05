import {
  FaHome,
  FaClipboardList,
  FaPlusCircle,
  FaUsers,
  FaChartBar,
  FaBuilding,
  FaUserCircle,
  FaSignOutAlt,
  FaTasks,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar({ role }) {
  const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <FaHome /> },
    { name: "Complaints", path: "/admin/complaints", icon: <FaClipboardList /> },
    { name: "Departments", path: "/admin/departments", icon: <FaBuilding /> },
    { name: "Users", path: "/admin/users", icon: <FaUsers /> },
    { name: "Reports", path: "/admin/reports", icon: <FaChartBar /> },
  ];

  const staffLinks = [
    { name: "Dashboard", path: "/staff/dashboard", icon: <FaHome /> },
    { name: "Assigned", path: "/staff/complaints", icon: <FaTasks /> },
    { name: "Profile", path: "/staff/profile", icon: <FaUserCircle /> },
  ];

  const userLinks = [
    { name: "Dashboard", path: "/user/dashboard", icon: <FaHome /> },
    { name: "Submit", path: "/user/submit", icon: <FaPlusCircle /> },
    { name: "My Complaints", path: "/user/complaints", icon: <FaClipboardList /> },
    { name: "Profile", path: "/user/profile", icon: <FaUserCircle /> },
  ];

  const links =
    role === "admin"
      ? adminLinks
      : role === "staff"
      ? staffLinks
      : userLinks;
  const { logout } = useAuth();
  const navigate = useNavigate();

const handleLogout = () => {
    logout();
    navigate("/");
};

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <div className="logo-circle">C</div>

        <div>
          <h2>CampusCare</h2>
          <span>Complaint System</span>
        </div>
      </div>

      <nav className="menu">
        {links.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="logout">
        <button onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;