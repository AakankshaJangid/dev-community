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
    <div className="flex flex-col gap-2 p-2">
      <div className="">
        <div
          style={{
            width: `${progress}%`,
            backgroundColor: getColor(),
            transition: "width 0.8s ease-in-out",
            // Add a transition to the width property
          }}
          className="rounded-full p-2 border-2 border-gray-400 text-xs"
        >
          {progress}%
        </div>
      </div>
      <div className="flex justify-between">
      <button onClick={handleButtonClick} className="text-xs p-2 bg-white text-[#F96D00] rounded-sm">
        Progress
      </button>
      <button onClick={handleButtonReset} className="text-xs text-[#F96D00] underline">
        Reset
      </button>
      </div>
    </div>
  );
};

export default Progressbar;
