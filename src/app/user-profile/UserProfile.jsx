// components/UserProfile.js
import Link from 'next/link';
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile flex flex-col items-center space-x-4 gap-6">
      <div className="user-avatar w-32 h-32">
        <img
          src={user.image}
          alt={user.name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="user-details flex-grow p-4 bg-gray-800 text-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
        <p className="text-lg">Title: {user.title}</p>
        <p className="text-lg">Email: {user.email}</p>
        <p className="text-lg">Phone: {user.phone}</p>
        <p className="text-lg">Education: {user.education}</p>
        <p className="text-lg">Location: {user.location}</p>
        <p className="text-lg">Description: {user.description}</p>
        <p className="text-lg">Interests: {user.interests.join(', ')}</p>
        <p className="text-lg">Skills: {user.skills.join(', ')}</p>
        <p className="text-lg">Future Learning: {user.futureLearning.join(', ')}</p>
        <p className="text-lg">Courses Completed: {user.coursesCompleted.join(', ')}</p>
        <a
          href={user.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Download Resume
        </a>
      </div>
      <div className="generate-resume-button flex gap-6">
        <button className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold py-2 px-4 rounded-full">
          Generate Resume
        </button>
        <Link href={'/home'} className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold py-2 px-4 rounded-full">Back to Home!</Link>
      </div>
    </div>
  );
};

export default UserProfile;
