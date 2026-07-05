import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserTag,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";

import "./Register.css";

function Register() {
  const { register } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await register(form);

      alert("Registration Successful");

      navigate("/");
    } catch {
      alert("Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="register-left">

        <div className="overlay">

          <h1>CampusCare</h1>

          <h2>Create Your Account</h2>

          <p>
            Join the Complaint Management System and
            easily submit, monitor and manage complaints.
          </p>

        </div>

      </div>

      <div className="register-right">

        <form
          className="register-card"
          onSubmit={handleRegister}
        >

          <h2>Create Account</h2>

          <p>Fill in your information</p>

          <div className="input-group">

            <FaUser />

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <FaEnvelope />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <FaLock />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

          </div>

          <div className="input-group">

            <FaUserTag />

<select
  name="role"
  value={form.role}
  onChange={handleChange}
>
  <option value="user">User</option>
  <option value="staff">Staff</option>
</select>

          </div>

          <Button type="submit">

            {loading ? "Creating..." : "Create Account"}

          </Button>

          <div className="bottom-link">

            Already have an account?

            <Link to="/">Login</Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Register;