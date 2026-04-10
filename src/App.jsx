import { useState } from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/AccountSettings";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [user, setUser] = useState({ name: "", email: "" });

  const navigate = (to) => setScreen(to);

  return (
    <div className="app-shell">
      <div className="phone-frame">
        {screen === "welcome" && <Welcome navigate={navigate} />}
        {screen === "login" && (
          <Login navigate={navigate} setUser={setUser} />
        )}
        {screen === "register" && (
          <Register navigate={navigate} setUser={setUser} />
        )}
        {screen === "settings" && (
          <AccountSettings user={user} navigate={navigate} />
        )}
      </div>
    </div>
  );
}
