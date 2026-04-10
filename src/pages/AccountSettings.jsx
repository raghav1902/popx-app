import "./AccountSettings.css";

export default function AccountSettings({ user, navigate }) {
  const initial = (user.name?.[0] || "U").toUpperCase();

  return (
    <div className="settings-screen">
      <div className="settings-header">
        <h2>Account Settings</h2>
      </div>

      <div className="settings-body">
        <div className="settings-profile">
          <div className="avatar-wrap">
            <div className="avatar-placeholder">{initial}</div>
            <div className="cam-badge">📷</div>
          </div>
          <div className="profile-info">
            <h3>{user.name || "Marry Doe"}</h3>
            <p>{user.email || "Marry@Gmail.Com"}</p>
          </div>
        </div>

        <div className="settings-bio">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>

      <div className="settings-spacer" />
    </div>
  );
}
