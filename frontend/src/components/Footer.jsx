import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>CareerPilot AI</h2>
          <p>
            Your AI-powered career companion for learning,
            resumes, interview preparation and job success.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        <div>

          <h3>Contact</h3>

          <p>support@careerpilot.ai</p>

          <p>Hyderabad, India</p>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 CareerPilot AI. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;