import { useEffect, useState } from "react";
import API from "../../api/axios";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

function AssignedComplaints() {
  const [complaints, setComplaints] = useState([]);

  const loadComplaints = async () => {
    const res = await API.get("/staff/complaints");
    setComplaints(res.data);
  };

  const updateStatus = async (id, status) => {
    await API.put(`/staff/complaints/${id}/status`, { status });
    loadComplaints();
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  return (
    <div className="layout">
      <Sidebar role="staff" />
      <main>
        <Navbar title="Assigned Complaints" />

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Title</th>
                <th>User</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c) => (
                <tr key={c._id}>
                  <td>{c.complaintId}</td>
<td>{c.title}</td>
                  <td>
    <strong>{c.user?.userId}</strong>
    <br />
    {c.user?.name}
</td>
                  <td>{c.priority}</td>
                  <td><span className="badge">{c.status}</span></td>
                  <td>

{c.status === "Closed" ? (

    <span className="badge">
        Closed
    </span>

) : (

    <select
        defaultValue={c.status}
        onChange={(e) => updateStatus(c._id, e.target.value)}
    >

        <option value="In Progress">
            In Progress
        </option>

        <option value="Resolved">
            Resolved
        </option>

        <option value="Closed">
            Closed
        </option>

    </select>

)}

</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AssignedComplaints;