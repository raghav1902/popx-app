import { useState } from "react";
import "./Register.css";

export default function Register({ navigate, setUser }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handle = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    setUser({ name: form.name || "User", email: form.email || "user@gmail.com" });
    navigate("settings");
  };

  return (
    <div className="register-screen">
      <button className="back-btn" onClick={() => navigate("welcome")}>
        ← Back
      </button>
      <h1>Create your<br />PopX account</h1>

      <div className="field-wrap">
        <label>Full Name<span className="req">*</span></label>
        <input
          type="text"
          placeholder="Marry Doe"
          value={form.name}
          onChange={handle("name")}
        />
      </div>

      <div className="field-wrap">
        <label>Phone number<span className="req">*</span></label>
        <input
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handle("phone")}
        />
      </div>

      <div className="field-wrap">
        <label>Email address<span className="req">*</span></label>
        <input
          type="email"
          placeholder="marry@gmail.com"
          value={form.email}
          onChange={handle("email")}
        />
      </div>

      <div className="field-wrap">
        <label>Password <span className="req">*</span></label>
        <input
          type="password"
          placeholder="••••••••"
          value={form.password}
          onChange={handle("password")}
        />
      </div>

      <div className="field-wrap">
        <label>Company name</label>
        <input
          type="text"
          placeholder="Your company"
          value={form.company}
          onChange={handle("company")}
        />
      </div>

      <div className="agency-group">
        <p className="agency-label">
          Are you an Agency?<span className="req">*</span>
        </p>
        <div className="agency-row">
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === "yes"}
              onChange={handle("agency")}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === "no"}
              onChange={handle("agency")}
            />
            No
          </label>
        </div>
      </div>

      <button className="btn-primary" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}
