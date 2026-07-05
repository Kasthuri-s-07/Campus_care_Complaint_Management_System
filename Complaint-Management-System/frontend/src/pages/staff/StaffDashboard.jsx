import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import { useAuth } from "../../context/AuthContext";
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaClipboardList,
  FaInfoCircle,
} from "react-icons/fa";
import "./StaffDashboard.css";

function StaffDashboard() {

  const { user } = useAuth();

  return (
    <div className="layout">

      <Sidebar role="staff" />

      <main>

        <Navbar title="Staff Dashboard" />

        <div className="welcome-card">

          <div>

            <h1>
              Welcome, {user?.name}! 👋
            </h1>

            <p>
              Manage your assigned complaints efficiently. Review each complaint,
              update its status, and ensure timely resolution.
            </p>

          </div>

          <div className="welcome-icon">
            🛠️
          </div>

        </div>

        <div className="guide-grid">

          <div className="guide-card">

            <FaClipboardList className="guide-icon" />

            <h3>Assigned Complaints</h3>

            <p>
              View all complaints assigned to you by the administrator.
            </p>

          </div>

          <div className="guide-card">

            <FaTasks className="guide-icon" />

            <h3>Update Status</h3>

            <p>
              Change complaint status to In Progress, Resolved or Closed.
            </p>

          </div>

          <div className="guide-card">

            <FaCheckCircle className="guide-icon" />

            <h3>Resolve Issues</h3>

            <p>
              Complete the assigned task and keep complaint records updated.
            </p>

          </div>

        </div>

        <div className="instruction-card">

          <h2>

            <FaInfoCircle />

            &nbsp; Staff Workflow

          </h2>

          <ol>

            <li>Open your Assigned Complaints page.</li>

            <li>Review the complaint details carefully.</li>

            <li>Begin work and update the status to <b>In Progress</b>.</li>

            <li>Once completed, change the status to <b>Resolved</b>.</li>

            <li>If verification is complete, update the complaint to <b>Closed</b>.</li>

          </ol>

        </div>

        <div className="tips-card">

          <h2>

            <FaClock />

            &nbsp; Staff Responsibilities

          </h2>

          <ul>

            <li>Respond to assigned complaints promptly.</li>

            <li>Maintain accurate status updates.</li>

            <li>Ensure all issues are resolved professionally.</li>

            <li>Communicate with the administrator if reassignment is required.</li>

          </ul>

        </div>

      </main>

    </div>
  );
}

export default StaffDashboard;