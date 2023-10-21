// pages/profile.js
"use client"
import React from "react";
import UserProfile from "./UserProfile";
import Layout from "../Layout/page";
import { useSession } from "next-auth/react";



const ProfilePage = () => {
  const { data: session } = useSession();

  const user = {
    id: 1, // You can assign a unique identifier
    name: session?.user?.name,
    image: "/dev-comm-logo.png",
    title: "Software Developer",
    domain: "Web Development", // Modify title to include domain
    education: "Bachelor of Computer Science",
    courses: ["Web Development Course", "React Mastery"], // Rename to courses/certificates
    email: session?.user?.email,
    phone: "+1 (123) 456-7890",
    location: "New York, NY",
    description:
      "Passionate software developer with a focus on web technologies.",
    currentLearning: ["JavaScript", "React", "Node.js", "Python"], // Modify skills to current learning
    futureLearning: ["GraphQL", "Docker", "AWS"],
    interests: ["Web Development", "Machine Learning", "Open Source"],
    resumeLink: "[Aakanksha Jangid] Resume/.pdf",
  };

  return (
    <Layout>
      <div className="px-4 py-8">
        <UserProfile user={user} />
      </div>
    </Layout>
  );
};

export default ProfilePage;
