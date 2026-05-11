import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2 className="logo">E-Learning</h2>

      <div className="nav-links">

        {/* Always visible */}
        <Link to="/">Home</Link>

        {token && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/assessments">Assessments</Link>
          </>
        )}

        {/* Not logged in */}
        {!token ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;