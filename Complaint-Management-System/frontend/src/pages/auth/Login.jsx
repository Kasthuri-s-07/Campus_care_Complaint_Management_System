import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

import Button from "../../components/ui/Button";

import "./Login.css";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const user = await login(email, password);

      if (user.role === "admin") navigate("/admin/dashboard");
      else if (user.role === "staff") navigate("/staff/dashboard");
      else navigate("/user/dashboard");
    } catch {
      alert("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="overlay">

          <h1>CampusCare</h1>

          <h2>Complaint Management System</h2>

          <p>
            Submit, monitor and resolve complaints through a modern,
            secure and efficient platform.
          </p>

        </div>

      </div>

      <div className="login-right">

        <form
          className="login-card"
          onSubmit={handleLogin}
        >

          <h2>Welcome Back</h2>

          <p>Please login to continue</p>

          <div className="input-group">

            <FaEnvelope />

            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <FaLock />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <Button
            type="submit"
            variant="primary"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <div className="bottom-link">

            Don't have an account?

            <Link to="/register">

              Register

            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;