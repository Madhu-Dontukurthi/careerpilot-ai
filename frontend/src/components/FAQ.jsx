import "../styles/FAQ.css";
import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "Is CareerPilot AI free to use?",
      answer:
        "Yes. Students can use the core features for free.",
    },
    {
      question: "Can I analyze my resume?",
      answer:
        "Yes. Upload your resume to receive an ATS score and improvement suggestions.",
    },
    {
      question: "Does it recommend jobs?",
      answer:
        "Yes. AI recommends internships and jobs based on your profile.",
    },
    {
      question: "Can I prepare for interviews?",
      answer:
        "Yes. Practice HR, Technical, and Aptitude questions with AI assistance.",
    },
  ];

  const [active, setActive] = useState(null);

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((item, index) => (
        <div
          className="faq-item"
          key={index}
          onClick={() => setActive(active === index ? null : index)}
        >
          <div className="faq-question">
            <h3>{item.question}</h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;