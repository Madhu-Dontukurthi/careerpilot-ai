import { FaRobot, FaFileAlt, FaBriefcase, FaRoad } from "react-icons/fa";
import "../styles/Features.css";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Career Guidance",
    description:
      "Get personalized career advice based on your skills and goals.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Analysis",
    description:
      "Upload your resume and receive instant AI-powered feedback.",
  },
  {
    icon: <FaRoad />,
    title: "Learning Roadmap",
    description:
      "Follow a step-by-step roadmap to become job-ready.",
  },
  {
    icon: <FaBriefcase />,
    title: "Job Recommendations",
    description:
      "Discover jobs that match your profile and skill set.",
  },
];

function Features() {
  return (
    <section className="features">
      <h2>Why Choose CareerPilot AI?</h2>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;