import heroImage from "../assets/hero.svg";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Accelerate Your <span>Career</span> with AI
        </h1>

        <p>
          CareerPilot AI helps students build resumes, learn in-demand skills,
          prepare for interviews, and discover jobs—all in one platform.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Watch Demo</button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <p>Students</p>
          </div>

          <div>
            <h3>500+</h3>
            <p>Companies</p>
          </div>

          <div>
            <h3>95%</h3>
            <p>Success Rate</p>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="CareerPilot AI Hero" />
      
      </div>
    </section>
  );
}

export default Hero;