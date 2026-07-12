import "../styles/ResumeAnalyzer.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaRobot,
  FaBriefcase,
  FaChartLine,
  FaUserGraduate,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function ResumeAnalyzer() {
  const [fileName, setFileName] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setAnalyzed(false);
    }
  };

  const handleAnalyze = () => {
    if (!fileName) return;
    setAnalyzed(true);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CareerPilot AI</h2>
        <ul>
          <li><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
          <li className="active"><Link to="/resume"><FaFileAlt /> Resume Analyzer</Link></li>
          <li><Link to="/chat"><FaRobot /> AI Career Coach</Link></li>
          <li><Link to="/jobs"><FaBriefcase /> Job Recommendations</Link></li>
          <li><Link to="/progress"><FaChartLine /> Progress</Link></li>
          <li><Link to="/profile"><FaUserGraduate /> Profile</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Resume Analyzer</h1>
        <p>Upload your resume to get an instant AI-powered ATS score and improvement suggestions.</p>

        <div className="upload-box">
          <FaCloudUploadAlt className="upload-icon" />

          <label className="upload-label">
            {fileName ? fileName : "Click to upload your resume (PDF)"}
            <input type="file" accept=".pdf" onChange={handleFileChange} hidden />
          </label>

          <button className="analyze-btn" onClick={handleAnalyze} disabled={!fileName}>
            Analyze Resume
          </button>
        </div>

        {analyzed && (
          <div className="result-section">
            <div className="score-card">
              <h2>ATS Score</h2>
              <div className="score-circle">87%</div>
              <p>Good! A few improvements can push this above 90%.</p>
            </div>

            <div className="details-grid">
              <div className="detail-card">
                <h3><FaCheckCircle className="icon-good" /> Skills Found</h3>
                <ul>
                  <li>Java</li>
                  <li>React</li>
                  <li>Spring Boot</li>
                  <li>MySQL</li>
                  <li>Git</li>
                </ul>
              </div>

              <div className="detail-card">
                <h3><FaTimesCircle className="icon-bad" /> Missing Keywords</h3>
                <ul>
                  <li>REST API</li>
                  <li>Unit Testing</li>
                  <li>CI/CD</li>
                  <li>Agile</li>
                </ul>
              </div>
            </div>

            <div className="suggestions-card">
              <h3>AI Suggestions</h3>
              <ul>
                <li>Add measurable achievements (e.g. "Improved load time by 30%")</li>
                <li>Include a professional summary at the top</li>
                <li>Add 1–2 more projects with tech stack details</li>
                <li>Use action verbs like "Built", "Developed", "Implemented"</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ResumeAnalyzer;