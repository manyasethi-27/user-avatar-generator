import React, { useState } from "react";
import "./App.css";

const getRandomColor = () => {
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#1A535C", "#FF9F1C", "#6A4C93"];
  return colors[Math.floor(Math.random() * colors.length)];
};

function App() {
  const [avatars, setAvatars] = useState([
    { letter: "G", color: "#FF6B6B" },
    { letter: "T", color: "#4ECDC4" },
    { letter: "B", color: "#FFD93D" },
    { letter: "J", color: "#1A535C" },
    { letter: "S", color: "#FF9F1C" },
  ]);

  const [nameInput, setNameInput] = useState("");

  const addAvatar = () => {
    if (!nameInput.trim()) return; // prevent empty input
    const letter = nameInput.trim().charAt(0).toUpperCase();
    setAvatars([...avatars, { letter, color: getRandomColor() }]);
    setNameInput(""); // reset input
  };

  const removeAvatar = (index) => {
    setAvatars(avatars.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 className="title">User Avatar Generator</h1>
      <div className="card">
        <div className="avatars">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="avatar"
              style={{ backgroundColor: avatar.color }}
            >
              {avatar.letter}
              <span className="remove-btn" onClick={() => removeAvatar(index)}>
                ×
              </span>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Enter name"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="name-input"
        />
        <button className="add-btn" onClick={addAvatar}>+ Add Avatar</button>
      </div>
    </div>
  );
}

export default App;
