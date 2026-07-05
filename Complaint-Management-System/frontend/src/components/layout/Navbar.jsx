import "./Navbar.css";

import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function Navbar({ title }) {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const today = new Date();

  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleProfile = () => {

    if (user.role === "admin") {

        navigate("/admin/profile");

    }

    else if (user.role === "staff") {

        navigate("/staff/profile");

    }

    else {

        navigate("/user/profile");

    }

    setShowMenu(false);
};

  return (
    <header className="navbar">

      <div>

        <h1>{title}</h1>

        <p>{date}</p>

      </div>

      <div className="navbar-right">

        <div className="search-box">

          <FaSearch />

          <input
            placeholder="Search..."
          />

        </div>

        <button className="notification-btn">

          <FaBell />

        </button>

        <div className="profile-wrapper">

          <div
            className="profile-box"
            onClick={() => setShowMenu(!showMenu)}
          >

            <div className="avatar">

              {user?.name?.charAt(0).toUpperCase()}

            </div>

            <div>

              <h4>{user?.name}</h4>

              <span>{user?.role}</span>

            </div>

            <FaChevronDown />

          </div>

          {showMenu && (

            <div className="profile-menu">

              <button onClick={handleProfile}>

                My Profile

              </button>

              <button>

                Settings

              </button>

              <button
                className="logout-btn"
                onClick={handleLogout}
              >

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;