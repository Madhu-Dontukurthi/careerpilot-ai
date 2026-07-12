import "../styles/Dashboard.css";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaRobot,
  FaBriefcase,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CareerPilot AI</h2>

        <ul>
          <li className="active"><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
          <li><Link to="/resume"><FaFileAlt /> Resume Analyzer</Link></li>
          <li><Link to="/chat"><FaRobot /> AI Career Coach</Link></li>
          <li><Link to="/jobs"><FaBriefcase /> Job Recommendations</Link></li>
          <li><Link to="/progress"><FaChartLine /> Progress</Link></li>
          <li><Link to="/profile"><FaUserGraduate /> Profile</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        <h1>Welcome Back 👋</h1>

        <p>
          Here's your career progress today.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Resume Score</h3>
            <h2>87%</h2>
          </div>

          <div className="card">
            <h3>Applications</h3>
            <h2>14</h2>
          </div>

          <div className="card">
            <h3>Interview Readiness</h3>
            <h2>91%</h2>
          </div>

          <div className="card">
            <h3>Skills Completed</h3>
            <h2>18</h2>
          </div>

        </div>

        <div className="dashboard-grid">

          <div className="panel">
            <h2>AI Career Suggestions</h2>

            <ul>
              <li>✔ Learn Spring Boot</li>
              <li>✔ Practice DSA</li>
              <li>✔ Improve Resume Keywords</li>
              <li>✔ Complete Mock Interview</li>
            </ul>
          </div>

          <div className="panel">
            <h2>Recommended Jobs</h2>

            <ul>
              <li>Java Full Stack Developer</li>
              <li>Frontend React Developer</li>
              <li>Software Engineer Intern</li>
              <li>Backend Java Developer</li>
            </ul>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;