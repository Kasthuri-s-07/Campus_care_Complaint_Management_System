import { useEffect, useState } from "react";
import API from "../../api/axios";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    API.get("/complaints/my")
      .then((res) => setComplaints(res.data))
      .catch(() => alert("Failed to load complaints"));
  }, []);

  return (
    <div className="layout">
      <Sidebar role="user" />
      <main>
        <Navbar title="My Complaints" />

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c) => (
                <tr key={c._id}>
                  <td>{c.title}</td>
                  <td>{c.category}</td>
                  <td>{c.priority}</td>
                  <td><span className="badge">{c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default MyComplaints;