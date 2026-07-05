import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function ComplaintStatusChart({ stats }) {

    const data = {

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

                    stats.pending || 0,
                    stats.assigned || 0,
                    stats.inProgress || 0,
                    stats.resolved || 0,
                    stats.closed || 0,

                ],

                backgroundColor: [

                    "#F59E0B",
                    "#3B82F6",
                    "#8B5CF6",
                    "#10B981",
                    "#EF4444",

                ],

                borderWidth:0,

            },

        ],

    };

    return (

        <div className="chart-card">

            <h2>Complaint Status</h2>

            <Doughnut
    data={data}
    options={{
        responsive:true,
        maintainAspectRatio:false,
        plugins:{
            legend:{
                position:"bottom"
            }
        },
        cutout:"70%"
    }}
/>

        </div>

    );

}

export default ComplaintStatusChart;