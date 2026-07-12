import "../styles/HowItWorks.css";
import { FaUserGraduate, FaUpload, FaBrain, FaRocket } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUserGraduate />,
      title: "Create Profile",
      desc: "Sign up and tell us about your education, skills and career goals."
    },
    {
      icon: <FaUpload />,
      title: "Upload Resume",
      desc: "Upload your resume for instant ATS analysis and AI feedback."
    },
    {
      icon: <FaBrain />,
      title: "Get AI Guidance",
      desc: "Receive career roadmap, interview preparation and skill suggestions."
    },
    {
      icon: <FaRocket />,
      title: "Apply Jobs",
      desc: "Start applying for internships and jobs with confidence."
    }
  ];

  return (
    <section className="how" id="about">
      <h2>How CareerPilot AI Works</h2>
      <p className="how-subtitle">
        Four simple steps to land your dream job.
      </p>

      <div className="steps">

        {steps.map((step, index) => (

          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;