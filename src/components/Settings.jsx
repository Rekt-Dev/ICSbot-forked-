import React, { useState } from "react";

const Settings = () => {
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");

  const handleSaveSettings = () => {
    // Implement save settings logic here
  };

  return (
    <div>
      <h2>Settings</h2>
      <form>
        <label>
          Bybit API Key:
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Bybit API Secret:
          <input
            type="text"
            value={apiSecret}
            onChange={(e) => setApiSecret(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="button" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
