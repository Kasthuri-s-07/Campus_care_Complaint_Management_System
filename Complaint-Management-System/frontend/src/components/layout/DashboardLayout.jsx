import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ role, title, children }) {
  return (
    <div className="layout">
      <Sidebar role={role} />

      <main>
        <Navbar title={title} />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;