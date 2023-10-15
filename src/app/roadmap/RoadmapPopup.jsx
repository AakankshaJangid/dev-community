import React from 'react';
import Image from "next/image";

const RoadmapPopup = ({ isOpen, onClose, url }) => {
  if (!isOpen) {
    return null;
  }
  const iframeStyles = {
   
   };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 ">
        <button className="absolute top-2 right-4 py-2 px-2 bg-orange-700 text-white rounded-lg" onClick={onClose}>
        <Image
            src="/close-circle-line.png"
            width={20}
            height={20}
            alt="logo-img"
            className="rounded-full"
          />
        </button>
        <iframe
          src={url} 
          width="100%" 
          height="500vh" 
          allowFullScreen 
          title="Embedded Website" 
          className=" ml-auto mr-auto  "
          style={iframeStyles}

        ></iframe>
      </div>
    </div>
  );
};

export default RoadmapPopup;