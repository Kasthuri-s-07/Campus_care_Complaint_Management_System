import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import "./Departments.css";

function Departments() {

  const departments = [
    {
      departmentId: "DEP-IT-001",
      name: "IT Department",
     
      handles: [
        "Wi-Fi Issues",
        "Internet Connectivity",
        "Software Installation",
        "Computer & Lab Systems",
      ],
    },
    {
      departmentId: "DEP-MAI-001",
      name: "Maintenance Department",
     
      handles: [
        "Furniture Repairs",
        "Plumbing Issues",
        "Building Maintenance",
        "Classroom Repairs",
      ],
    },
    {
      departmentId: "DEP-ELE-001",
      name: "Electrical Department",
      
      handles: [
        "Power Failure",
        "Lights",
        "Fans",
        "Electrical Equipment",
      ],
    },
    {
      departmentId: "DEP-CLN-001",
      name: "Cleaning Department",
     
      handles: [
        "Campus Cleaning",
        "Washroom Hygiene",
        "Waste Disposal",
        "Garbage Collection",
      ],
    },
    {
      departmentId: "DEP-LIB-001",
      name: "Library Department",
      
      handles: [
        "Books",
        "Reading Hall",
        "Library Facilities",
        "Library Membership",
      ],
    },
  ];

  return (
    <div className="layout">
      <Sidebar role="admin" />

      <main>

        <Navbar title="Departments" />

        <div className="department-grid">

          {departments.map((dept) => (

            <div
              className="department-card"
              key={dept.departmentId}
            >

              <div className="department-icon">
                🏢
              </div>

              <h3>{dept.name}</h3>

              <p>
                <strong>Department ID</strong>
              </p>

              <p>{dept.departmentId}</p>

              

              <div className="department-services">

                <h4>Handles</h4>

                <ul>

                  {dept.handles.map((item, index) => (

                    <li key={index}>
                      {item}
                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default Departments;