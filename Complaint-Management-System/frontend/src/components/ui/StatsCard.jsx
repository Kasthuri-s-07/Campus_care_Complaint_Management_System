import "./StatsCard.css";

function StatsCard({ title, value, color, icon }) {
  return (
    <div className="stats-card">

      <div
        className="stats-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="stats-content">

        <h4>{title}</h4>

        <h2>{value ?? 0}</h2>

      </div>

    </div>
  );
}

export default StatsCard;