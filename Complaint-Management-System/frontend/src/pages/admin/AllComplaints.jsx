import { useEffect, useState } from "react";
import API from "../../api/axios";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import Button from "../../components/ui/Button";
function AllComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [staff, setStaff] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState({});
  const loadComplaints = async () => {
    const res = await API.get("/admin/complaints");
    setComplaints(res.data);
  };
  const loadStaff = async () => {

  try {

    const res = await API.get("/admin/staff");

    setStaff(res.data);

  } catch (error) {

    console.error(error);

  }

};
  const assignComplaint = async (complaintId) => {

    const staffId = selectedStaff[complaintId];

    if (!staffId) {
        alert("Please select a staff member.");
        return;
    }

    try {

        await API.put(`/admin/complaints/${complaintId}/assign`, {

            assignedDepartment: null,
            assignedStaff: staffId,

        });

        alert("Complaint assigned successfully.");

        loadComplaints();

    } catch (err) {

        console.error(err);

        alert("Assignment failed.");

    }

};

useEffect(() => {

  loadComplaints();

  loadStaff();

}, []);

  return (
    <div className="layout">
      <Sidebar role="admin" />
      <main>
        <Navbar title="All Complaints" />

        <div className="table-card">
          <table>
            <thead>
             <tr>

<th>Complaint ID</th>

<th>Title</th>

<th>User</th>

<th>Category</th>

<th>Priority</th>

<th>Status</th>

<th>Select Staff</th>

<th>Assigned Staff</th>

<th>Action</th>

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

<td>{c.category}</td>

<td>{c.priority}</td>

<td>
    <span
        className={`badge ${c.status.toLowerCase().replace(/\s/g, "-")}`}
    >
        {c.status}
    </span>
</td>

<td>

<select

disabled={c.assignedStaff}
value={selectedStaff[c._id] || ""}

onChange={(e)=>

setSelectedStaff({

...selectedStaff,

[c._id]:e.target.value,

})

}

>

<option value="">Select</option>

{staff.map(member=>(

<option

key={member._id}

value={member._id}

>

{member.userId} | {member.name}

</option>

))}

</select>

</td>
<td>

{c.assignedStaff ? (

<div>

<strong>

{c.assignedStaff.userId}

</strong>

<br />

{c.assignedStaff.name}

</div>

) : (

<span style={{color:"#EF4444"}}>

Not Assigned

</span>

)}

</td>
<td>
<Button

variant={c.assignedStaff ? "secondary" : "primary"}

disabled={!!c.assignedStaff}

onClick={()=>assignComplaint(c._id)}

>

{

c.assignedStaff

?

"Assigned"

:

"Assign"

}

</Button>

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

export default AllComplaints;