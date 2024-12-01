import React, { useState } from "react";

function Player({ initialName, symbol }) {
  const [playerName, setplayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setplayerName(() => event.target.value);
  }
  return (
    <>
      <li>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              value={playerName}
              onChange={handleChange}
              required
            ></input>
          ) : (
            <span className="player-name">{playerName}</span>
          )}

          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;
