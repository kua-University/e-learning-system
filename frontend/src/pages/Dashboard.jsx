import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">

      <h2>Dashboard</h2>
      <p>Welcome to your E-earning system</p>

      <div className="dashboard-grid">

        <Link to="/courses">
          <div className="card">Courses</div>
        </Link>

        <Link to="/assessments">
          <div className="card">Assessments</div>
        </Link>

      </div>

    </div>
  );
}

export default Dashboard;