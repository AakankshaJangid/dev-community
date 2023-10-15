import React from "react";

const RoadmapPopupContent = ({ onClose, url }) => {
  return (
    <div className="popup-content">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <iframe
        src={url}
        title="Roadmap Video"
        width="800"
        height="450"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default RoadmapPopupContent;