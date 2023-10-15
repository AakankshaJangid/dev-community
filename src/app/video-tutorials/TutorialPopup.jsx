// components/TutorialPopup.js
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

const TutorialPopup = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-4 py-4 px-8 bg-orange-800 text-white rounded-lg"
          onClick={onClose}
        >
          <Image
            src="/close-circle-line.png"
            width={20}
            height={20}
            alt="logo-img"
            className="rounded-full"
          />
        </button>
        <ReactPlayer url={videoUrl} controls width="150vh" height="80vh" />
      </div>
    </div>
  );
};

export default TutorialPopup;
