import Sidebar from "../components/dashboard/Sidebar";
import "./Dashboard.css";

function Dashboard({ children }) {
    return (
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
            <Sidebar />
            {children}
        </div>
    );
}

export default Dashboard;
