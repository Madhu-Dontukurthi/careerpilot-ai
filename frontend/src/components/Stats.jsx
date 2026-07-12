import "../styles/Stats.css";

function Stats() {
  const stats = [
    { number: "10,000+", title: "Students Guided" },
    { number: "500+", title: "Hiring Companies" },
    { number: "95%", title: "Resume Success Rate" },
    { number: "24/7", title: "AI Support" },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;