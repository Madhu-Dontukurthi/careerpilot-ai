import "../styles/AIChat.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaRobot,
  FaBriefcase,
  FaChartLine,
  FaUserGraduate,
  FaPaperPlane,
} from "react-icons/fa";

function AIChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi Madhu 👋 I'm your AI Career Coach. Ask me anything about your career, resume, skills, or interview prep!",
    },
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "How do I become a Java Full Stack Developer?",
    "What skills should I learn next?",
    "How do I prepare for a technical interview?",
  ];

  const getAIReply = (question) => {
    const q = question.toLowerCase();
    if (q.includes("java") || q.includes("full stack")) {
      return "To become a Java Full Stack Developer, focus on: Core Java, OOP, Collections, Spring Boot, REST APIs, MySQL, and a frontend framework like React. Build 2-3 projects to showcase these skills.";
    }
    if (q.includes("skill")) {
      return "Based on current trends, I'd recommend strengthening: REST APIs, Spring Security, Git/GitHub, SQL query optimization, and basic system design.";
    }
    if (q.includes("interview")) {
      return "For technical interviews: revise core Java concepts, practice DSA on arrays/strings/linked lists, be ready to explain your projects in depth, and prepare 2-3 questions to ask the interviewer.";
    }
    return "That's a great question! Focus on consistent practice, build real projects, and keep your resume updated with measurable achievements.";
  };

  const sendMessage = (text) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMsg = { sender: "user", text: messageText };
    const aiMsg = { sender: "ai", text: getAIReply(messageText) };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>CareerPilot AI</h2>
        <ul>
          <li><Link to="/dashboard"><FaHome /> Dashboard</Link></li>
          <li><Link to="/resume"><FaFileAlt /> Resume Analyzer</Link></li>
          <li className="active"><Link to="/chat"><FaRobot /> AI Career Coach</Link></li>
          <li><Link to="/jobs"><FaBriefcase /> Job Recommendations</Link></li>
          <li><Link to="/progress"><FaChartLine /> Progress</Link></li>
          <li><Link to="/profile"><FaUserGraduate /> Profile</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content chat-main">
        <h1>AI Career Coach</h1>
        <p>Ask me anything about your career journey.</p>

        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                <span className="sender-label">
                  {msg.sender === "ai" ? "🤖 AI Coach" : "🧑 You"}
                </span>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>

          <div className="quick-questions">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className="chat-input-bar">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button className="send-btn" onClick={() => sendMessage()}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AIChat;