import "./Welcome.css";

export default function Welcome({ navigate }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-spacer" />
      <div className="welcome-bottom">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>
        <button className="btn-primary" onClick={() => navigate("register")}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate("login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
