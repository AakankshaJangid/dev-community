import React from "react";
import { useState } from "react";

const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  const handleButtonClick = () => {
    if (progress < 100) setProgress(progress + 20);
  };

  const handleButtonReset = () => {
    setProgress(0);
  };

  const getColor = () => {
    if (progress === 0) {
      return "#D3D3D3";
    }
    if (progress > 0 && progress <= 40) {
      return "#ff0000";
    } else if (progress > 50 && progress <= 70) {
      return "#ffa500";
    } else if (progress > 70) {
      return "#2ecc71";
    }
  };

  return (
    <div className="">
      <div className="">
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: getColor(),
            transition: "width 0.8s ease-in-out",
            // Add a transition to the width property
          }}
          className=""
        >
          progress
        </div>
      </div>
      <div>{progress}%</div>
      <button onClick={handleButtonClick} className="">
        Progress
      </button>
      <button onClick={handleButtonReset} className="">
        Reset
      </button>
    </div>
  );
};

export default Progressbar;
