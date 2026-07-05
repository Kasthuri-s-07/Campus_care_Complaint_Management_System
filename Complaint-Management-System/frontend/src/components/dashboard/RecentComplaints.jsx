import { useEffect, useState } from "react";
import API from "../../api/axios";

import "./RecentComplaints.css";

function RecentComplaints() {

    const [complaints, setComplaints] = useState([]);

    useEffect(() => {

        API.get("/admin/complaints")
            .then((res) => {

                setComplaints(res.data.slice(0,5));

            })
            .catch(console.error);

    }, []);

    return (

        <div className="recent-card">

            <div className="recent-header">

                <h2>Recent Complaints</h2>

            </div>

            <table>

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>User</th>

                        <th>Priority</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {complaints.map((item)=>(

                        <tr key={item._id}>

                            <td>{item.title}</td>

                            <td>{item.user?.name}</td>

                            <td>

                                <span className={`priority ${item.priority?.toLowerCase()}`}>

                                    {item.priority}

                                </span>

                            </td>

                            <td>

                                <span className="badge">

                                    {item.status}

                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}

export default RecentComplaints;