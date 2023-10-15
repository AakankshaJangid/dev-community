// components/UserProfile.js
import Link from "next/link";
import React, { useState } from "react";
import ToDo from "./to-do/page";
import Image from "next/image";
import ResumeFormPopup from "./ResumeFormPopup";

const UserProfile = ({ user }) => {
  const [showForm, setShowForm] = useState(false);
  const [generatedResume, setGeneratedResume] = useState(null);
  const [showDownloadLink, setShowDownloadLink] = useState(false);

  const handleGenerateResume = async (formData) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/resume/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const blob = await response.blob();
        setGeneratedResume(blob);
        setShowForm(false);
        setShowDownloadLink(true);
      } else {
        console.error("Resume generation failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-profile flex flex-col items-center gap-6">
      <div className="user-avatar w-32 h-32">
        <img
          src={user.image}
          alt={user.name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className=" flex gap-6">
        <div className="user-details flex flex-col gap-2 p-4 bg-[#222831] text-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-[#F96D00]">{user.name}</span>
          </h2>
          <p className="text-lg">
            <span className="text-gray-400">Title/Domain:</span> {user.title}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Email:</span> {user.email}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Phone No:</span> {user.phone}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Institute/Education:</span>{" "}
            {user.education}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Location:</span> {user.location}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Description:</span>{" "}
            {user.description}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Interests:</span>{" "}
            {user.interests.join(", ")}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Skills:</span>{" "}
            {user.currentLearning.join(", ")}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Future Learning:</span>{" "}
            {user.futureLearning.join(", ")}
          </p>
          <p className="text-lg">
            <span className="text-gray-400">Courses/Certificates:</span>{" "}
            {user.courses.join(", ")}
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6">
          <ToDo />
          <button
            onClick={() => setShowForm(true)}
            className="py-2 px-4 bg-white hover:bg-slate-200 font-semibold text-xs text-[#F96D00] rounded-sm"
          >
            Generate Resume
          </button>
          {showForm && (
            <div className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center z-50">
              <ResumeFormPopup
                onGenerateResume={handleGenerateResume}
                onClose={() => setShowForm(false)}
              />
            </div>
          )}
          {showDownloadLink && generatedResume && (
            <div className="flex justify-center">
              <a
                href={URL.createObjectURL(generatedResume)}
                target="_blank"
                rel="noopener noreferrer"
                download="generated-resume.pdf"
                className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-xs rounded-sm"
              >
                Download Generated Resume
              </a>
            </div>
          )}
          <div className="bg-[#222831] p-4 flex justify-between gap-2 rounded-md shadow-md">
            <h1>Notes</h1>
            <Link href="/user-profile/notes">
              <Image src="/notes.png" alt="notes" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
