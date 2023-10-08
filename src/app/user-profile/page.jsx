// pages/profile.js
import React from 'react';
import UserProfile from './UserProfile';

const user = {
  name: 'John Doe',
  image: '/dev-comm-logo.png',
  title: 'Software Developer',
  email: 'johndoe@example.com',
  phone: '+1 (123) 456-7890',
  education: 'Bachelor of Computer Science',
  location: 'New York, NY',
  description: 'Passionate software developer with a focus on web technologies.',
  interests: ['Web Development', 'Machine Learning', 'Open Source'],
  skills: ['JavaScript', 'React', 'Node.js', 'Python'],
  futureLearning: ['GraphQL', 'Docker', 'AWS'],
  coursesCompleted: ['Web Development Course', 'React Mastery'],
  resumeLink: '/path/to/resume.pdf',
};

const ProfilePage = () => {
  return (
    <div className="container mx-auto py-8">
      <UserProfile user={user} />
    </div>
  );
};

export default ProfilePage;
