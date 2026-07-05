import { useEffect, useState } from "react";

import API from "../../api/axios";

import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import ComplaintStatusChart from "../../components/dashboard/ComplaintStatusChart";
import DashboardStats from "../../components/dashboard/DashboardStats";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
function AdminDashboard() {

    const [stats,setStats]=useState({});

    useEffect(()=>{

        API.get("/admin/dashboard")
        .then(res=>setStats(res.data))
        .catch(console.error);

    },[]);

    return(

        <div className="layout">

            <Sidebar role="admin"/>

            <main>

                <Navbar title="Admin Dashboard"/>

                <DashboardStats stats={stats}/>
                <div
    style={{
        display:"flex",
        gap:"30px",
        marginTop:"30px",
        flexWrap:"wrap",
    }}
>

    <ComplaintStatusChart
        stats={stats}
    />

</div>
                <RecentComplaints />

            </main>

        </div>

    )

}

export default AdminDashboard;