// components/TutorialPopup.js
import React from 'react';
import Image from "next/image";

const RoadmapPopup = ({ isOpen, onClose, url }) => {
  if (!isOpen) {
    return null;
  }
  const iframeStyles = {
     overflow: 'hidden', // Hide the overflowing content (optional)
   };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 ">
        <button className="absolute top-2 right-4 py-2 px-2 bg-orange-700 text-white rounded-lg" onClick={onClose}>
        <Image
            src="/close-line.png"
            width={20}
            height={20}
            alt="logo-img"
            className="rounded-full"
          />
        </button>
        <iframe
          src={url} // Replace 'Url' with the URL of the website you want to embed
          width="100%" // Set the width to control the size of the embedded content
          height="500vh" // Set the height to control the height of the embedded content
          // frameBorder="3" // Remove the border around the iframe (optional)
          allowFullScreen // Allow the iframe to go fullscreen (optional)
          title="Embedded Website" // Provide a title for accessibility (optional)
          className=" ml-auto mr-auto  "
          style={iframeStyles}
          sandbox="allow-same-origin "

        ></iframe>
      </div>
    </div>
  );
};

export default RoadmapPopup;
