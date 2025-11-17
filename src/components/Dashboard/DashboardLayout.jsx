import Sidebar from "./MainElements/Sidebar";
import "../../styles/Dashboard/dashboard-root.css";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-root">
      <Sidebar />
      <main className="dashboard-main">{children}</main>
    </div>
  );
}

export default DashboardLayout;
