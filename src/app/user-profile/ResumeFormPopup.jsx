import React, { useState } from "react";
import Resume from "./resume-generator/page";

const ResumeFormPopup = ({ onClose }) => {
  return (
    <div className="w-4/5 overflow-y-auto h-screen bg-[#1b1f25] bg-opacity-90 p-8">
      <Resume />
      <div className="flex justify-end">
        <button
          onClick={() => {
            onClose(false);
          }}
          className="text-white bg-red-500 px-4 py-2 rounded-sm"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default ResumeFormPopup;
