import { useState } from "react";

export default function ToggleButton() {
  const [isActive, setIsActive] = useState(false);
  const toggleButton = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <button
        onClick={toggleButton}
        style={{
          backgroundColor: isActive ? "green" : "red",
          width: "150px",
          color: "white",
          padding: "15px 30px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isActive ? "ON" : "OFF"}{" "}
      </button>
    </div>
  );
}
