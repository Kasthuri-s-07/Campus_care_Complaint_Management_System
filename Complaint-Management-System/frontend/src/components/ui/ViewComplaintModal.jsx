import "./ViewComplaintModal.css";

function ViewComplaintModal({ complaint, onClose }) {
  if (!complaint) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <h2>{complaint.complaintId}</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">

          <h3>{complaint.title}</h3>

          <p>{complaint.description}</p>

          <hr />

          <p>
            <strong>User :</strong>{" "}
            {complaint.user?.userId} | {complaint.user?.name}
          </p>

          <p>
            <strong>Priority :</strong> {complaint.priority}
          </p>

          <p>
            <strong>Status :</strong> {complaint.status}
          </p>

          <p>
            <strong>Assigned Staff :</strong>{" "}
            {complaint.assignedStaff
              ? `${complaint.assignedStaff.userId} | ${complaint.assignedStaff.name}`
              : "Not Assigned"}
          </p>

          <hr />

          <h3>Activity Timeline</h3>

          {complaint.history?.map((item, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div>

                <strong>{item.action}</strong>

                <br />

                {item.performedBy?.userId} | {item.performedBy?.name}

                <br />

                <small>
                  {new Date(item.date).toLocaleString()}
                </small>

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default ViewComplaintModal;