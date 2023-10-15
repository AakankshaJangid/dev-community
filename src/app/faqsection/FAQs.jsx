import Image from "next/image";
import React, { useState } from "react";
import cx from "classnames";
const FAQs = () => {
  const faqData = [
    {
      question: "How do I create a profile on the platform?",
      answer:
        "To create a profile, click on the 'Sign Up' button on the homepage. Fill in your details, and you'll be registered as a user.",
    },
    {
      question: "What are Roadmaps, and how can I use them?",
      answer:
        "Roadmaps are step-by-step learning guides. You can find them by navigating to the 'Roadmaps' section and choose a technology or language you want to learn.",
    },
    {
      question: "How can I write and publish a blog on the platform?",
      answer:
        "To publish a blog, go to the 'Blogs' section and click 'Create Blog.' Fill in your content, add images, and submit it for review. Once approved, it will be visible to the community.",
    },
    {
      question:
        "What is the Task Tracker, and how does it help me manage projects?",
      answer:
        "The Task Tracker allows you to create, assign, and track tasks for your projects. It helps you stay organized and collaborate with team members effectively.",
    },
    {
      question: "Where can I find live streaming sessions and workshops?",
      answer:
        "You can access live streaming sessions and workshops in the 'Streaming Platform' section. Check the schedule for upcoming events.",
    },
    {
      question: "How do I seek help or answer questions in the QA section?",
      answer:
        "In the 'QA Section,' you can ask questions and provide answers to others. Click 'Ask a Question' and select relevant tags for better visibility.",
    },
    {
      question: "What is the Resume Generator tool, and how does it work?",
      answer:
        "The Resume Generator helps you create professional resumes. Fill in your skills, projects, and experience, and it will generate a formatted resume for you to download.",
    },
    {
      question: "How does the AI/ML skill tagging system work?",
      answer:
        "Our AI-powered system automatically tags skills in learning cards. It analyzes card descriptions and extracts relevant skills, enhancing discoverability.",
    },
    {
      question: "Can I request to learn specific skills from other users?",
      answer:
        "Yes, you can send skill requests to users who have expertise in the skills you want to learn. Visit their profiles and use the 'Request Learning' feature.",
    },
    {
      question:
        "What if I want to find users with complementary skills or interests?",
      answer:
        "Use our AI-based user matching system to discover users who share your interests or have complementary skills. The platform will suggest potential matches based on your goals.",
    },
  ];
  const [toggleIndex, setToggleIndex] = useState(null);

  const handleToggle = (index) => {
    if (toggleIndex === index) {
      setToggleIndex(null);
    } else {
      setToggleIndex(index);
    }
  };

  return (
    <div className="bg-[#393E46]">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center gap-6 items-center bg-black  bg-opacity-20 p-4 rounded-xl">
          <Image
            src="/dev-comm-logo.png"
            width={200}
            height={200}
            alt="logo-img"
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl text-[#F2F2F2] font-semibold">
              Hello, <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-300 to-orange-700">Tech Crafters</span>
            </h1>
            <p className="text-base text-[#F2F2F2] opacity-90">
              Establishing a comprehensive hub that equips developers with
              tools, resources, and collaboration opportunities to enhance their
              skills and solve problems.
            </p>
            <div className="flex gap-6">
              <h1 className="p-2 bg-white text-[#F96D00] rounded-lg cursor-pointer">
                @dev_community
              </h1>
              <h1 className="p-2 bg-[#222831] rounded-lg cursor-pointer ">
                devcommunity@gmail.com
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-gray-600 border-b-2 p-4 flex flex-col gap-3"
            >
              <h1
                className="question text-xl text-gray-300 cursor-pointer flex justify-between"
                onClick={() => handleToggle(index)}
              >
                {item.question}
                <Image
                  src={toggleIndex === index ? '/arrow-up-line.png' : '/arrow-down-line.png'}
                  width={30}
                  height={20}
                  alt="arrow-img"
                  className="rounded-full"
                />
              </h1>
              {toggleIndex === index && (
                <p className={cx("answer text-lg text-gray-400")}>
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
