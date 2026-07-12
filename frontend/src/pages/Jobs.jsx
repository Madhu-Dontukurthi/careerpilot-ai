import "../styles/Jobs.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaRobot,
  FaBriefcase,
  FaChartLine,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

function Jobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Java Full Stack Developer",
      company: "TCS",
      location: "Hyderabad",
      type: "Full-time",
      match: "94%",
    },
    {
      id: 2,
      title: "Frontend React Developer",
      company: "Infosys",
      location: "Bangalore",
      type: "Full-time",
      match: "88%",
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "Accenture",
      location: "Pune",
      type: "Internship",
      match: "91%",
    },
    {
      id: 4,
      title: "Backend Java Developer",
      company: "Capgemini",
      location: "Chennai",
      type: "Full-time",
      match: "85%",
    },
    {
      id: 5,
      title: "Associate Software Engineer",
      company: "IBM",
      location: "Hyderabad",
      type: "Full-time",
      match: "90%",
    },
  ];

  const toggleSave = (id) => {
    setSavedJobs((prev) =>
      prev.includes(id) ? prev.filter((j) => j !== id) : [...prev, id]
    );
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CareerPilot AI</h2>
        <ul>
          <li><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
          <li><Link to="/resume"><FaFileAlt /> Resume Analyzer</Link></li>
          <li><Link to="/chat"><FaRobot /> AI Career Coach</Link></li>
          <li className="active"><Link to="/jobs"><FaBriefcase /> Job Recommendations</Link></li>
          <li><Link to="/progress"><FaChartLine /> Progress</Link></li>
          <li><Link to="/profile"><FaUserGraduate /> Profile</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Job Recommendations</h1>
        <p>Jobs matched to your skills and profile.</p>

        <div className="job-list">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-info">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span><FaBuilding /> {job.company}</span>
                  <span><FaMapMarkerAlt /> {job.location}</span>
                  <span className="job-type">{job.type}</span>
                </div>
              </div>

              <div className="job-actions">
                <span className="match-badge">{job.match} match</span>
                <button
                  className={savedJobs.includes(job.id) ? "save-btn saved" : "save-btn"}
                  onClick={() => toggleSave(job.id)}
                >
                  {savedJobs.includes(job.id) ? "Saved" : "Save"}
                </button>
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Jobs;