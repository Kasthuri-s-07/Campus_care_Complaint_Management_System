import { useEffect, useState } from "react";
import API from "../../api/axios";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";

import "./Reports.css";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function Reports() {

  const [report, setReport] = useState({});
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    loadReports();
    loadComplaints();
  }, []);

  const loadReports = async () => {
    const res = await API.get("/admin/dashboard");
    setReport(res.data);
  };

  const loadComplaints = async () => {
    const res = await API.get("/admin/complaints");
    setComplaints(res.data);
  };

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Complaint Management Report", 14, 20);

    autoTable(doc, {
      head: [["Complaint ID", "Title", "Status", "Priority"]],
      body: complaints.map((c) => [
        c.complaintId,
        c.title,
        c.status,
        c.priority,
      ]),
      startY: 30,
    });

    doc.save("Complaint_Report.pdf");
  };

  const exportCSV = () => {

    const rows = [
      ["Complaint ID", "Title", "Status", "Priority"],
    ];

    complaints.forEach((c) => {
      rows.push([
        c.complaintId,
        c.title,
        c.status,
        c.priority,
      ]);
    });

    const csv = rows.map((r) => r.join(",")).join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "Complaint_Report.csv");
  };

  const pieData = {
    labels: [
      "Pending",
      "Assigned",
      "In Progress",
      "Resolved",
      "Closed",
    ],

    datasets: [
      {
        data: [
          report.pending || 0,
          report.assigned || 0,
          report.inProgress || 0,
          report.resolved || 0,
          report.closed || 0,
        ],

        backgroundColor: [
          "#F59E0B",
          "#3B82F6",
          "#8B5CF6",
          "#10B981",
          "#EF4444",
        ],

        borderColor: "#ffffff",

        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="layout">

      <Sidebar role="admin" />

      <main>

        <Navbar title="Reports" />

        <div className="dashboard-cards">

          <div className="card">
            <h3>Total</h3>
            <h1>{report.totalComplaints || 0}</h1>
          </div>

          <div className="card">
            <h3>Pending</h3>
            <h1>{report.pending || 0}</h1>
          </div>

          <div className="card">
            <h3>Assigned</h3>
            <h1>{report.assigned || 0}</h1>
          </div>

          <div className="card">
            <h3>Resolved</h3>
            <h1>{report.resolved || 0}</h1>
          </div>

        </div>

        <div className="chart-card">

          <h2>Complaint Status Distribution</h2>

          <Pie
            data={pieData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
          />

        </div>

        <div className="table-card">

          <h2>Generate Reports</h2>

          <p>
            Download the complaint report in PDF or export all complaint
            records as CSV.
          </p>

          <div style={{ marginTop: "25px" }}>

            <button
              className="primary-btn"
              onClick={downloadPDF}
            >
              📄 Download PDF
            </button>

            <button
              className="secondary-btn"
              onClick={exportCSV}
              style={{ marginLeft: "15px" }}
            >
              📊 Export CSV
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Reports;