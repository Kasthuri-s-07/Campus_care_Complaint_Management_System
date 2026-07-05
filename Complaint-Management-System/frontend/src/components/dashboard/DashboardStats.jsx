import {
  FaClipboardList,
  FaClock,
  FaTasks,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import StatsCard from "../ui/StatsCard";

function DashboardStats({ stats }) {
  return (
    <div className="cards">

      <StatsCard
        title="Total Complaints"
        value={stats.totalComplaints}
        color="#4F46E5"
        icon={<FaClipboardList />}
      />

      <StatsCard
        title="Pending"
        value={stats.pending}
        color="#F59E0B"
        icon={<FaClock />}
      />

      <StatsCard
        title="Assigned"
        value={stats.assigned}
        color="#3B82F6"
        icon={<FaTasks />}
      />

      <StatsCard
        title="In Progress"
        value={stats.inProgress}
        color="#8B5CF6"
        icon={<FaSpinner />}
      />

      <StatsCard
        title="Resolved"
        value={stats.resolved}
        color="#10B981"
        icon={<FaCheckCircle />}
      />

      <StatsCard
        title="Closed"
        value={stats.closed}
        color="#EF4444"
        icon={<FaTimesCircle />}
      />

    </div>
  );
}

export default DashboardStats;