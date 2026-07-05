import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import { useAuth } from "../../context/AuthContext";
import {
  FaClipboardCheck,
  FaSearch,
  FaUserCircle,
  FaInfoCircle,
} from "react-icons/fa";
import "./UserDashboard.css";

function UserDashboard() {

  const { user } = useAuth();

  return (
    <div className="layout">

      <Sidebar role="user" />

      <main>

        <Navbar title="User Dashboard" />

        <div className="welcome-card">

          <div>

            <h1>
              Welcome, {user?.name}! 👋
            </h1>

            <p>
              Use the Complaint Management System to submit complaints,
              monitor their progress, and stay updated until they are
              resolved.
            </p>

          </div>

          <div className="welcome-icon">
            📝
          </div>

        </div>

        <div className="guide-grid">

          <div className="guide-card">

            <FaClipboardCheck className="guide-icon" />

            <h3>Submit Complaint</h3>

            <p>
              Raise a complaint with complete details including
              category, location and priority.
            </p>

          </div>

          <div className="guide-card">

            <FaSearch className="guide-icon" />

            <h3>Track Status</h3>

            <p>
              Monitor whether your complaint is Pending,
              Assigned, In Progress, Resolved or Closed.
            </p>

          </div>

          <div className="guide-card">

            <FaUserCircle className="guide-icon" />

            <h3>My Profile</h3>

            <p>
              View your account details, User ID,
              email and profile information.
            </p>

          </div>

        </div>

        <div className="instruction-card">

          <h2>

            <FaInfoCircle />

            &nbsp; How to Use

          </h2>

          <ol>

            <li>Submit a complaint from the sidebar.</li>

            <li>Select the correct category and priority.</li>

            <li>Provide a clear description and location.</li>

            <li>Track the complaint status from <b>My Complaints</b>.</li>

            <li>Wait until the assigned staff resolves the issue.</li>

          </ol>

        </div>

      </main>

    </div>
  );
}

export default UserDashboard;