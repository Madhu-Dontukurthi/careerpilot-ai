import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>CareerPilot AI</h1>
        <p>Welcome Back 👋</p>

        <form>

          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;