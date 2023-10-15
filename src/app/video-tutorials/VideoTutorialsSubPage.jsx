"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TutorialPopup from "./TutorialPopup";
import Progressbar from "./progress-bar/page";

const VideoTutorialsSubPage = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const videoTutorialsSubPage = [
    {
      title: "Tutorial 1",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 2",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 3",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 4",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 5",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 6",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 7",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 8",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 9",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },
    {
      title: "Tutorial 10",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://youtu.be/enOsPhp2Z6Q?si=sHWbiT4N-VM7YBdo",
    },

    // Add more video tutorials as needed
  ];

  const [videoTutorials, setVideoTutorials] = useState([]);

  const fetchTutorials = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/tutorials/all");
      if (response.ok) {
        const data = await response.json();
        setVideoTutorials(data);
        console.log(data);
      } else {
        console.error("Failed to fetch tutorials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTutorials(); // Fetch users when the component mounts
  }, []);

  const openPopup = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setCurrentVideoUrl("");
    setPopupOpen(false);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center gap-6 items-center bg-black  bg-opacity-20 p-4 rounded-xl">
          <Image
            src="/dev-comm-logo.png"
            width={200}
            height={200}
            alt="logo-img"
            className="rounded-full"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-orange-300 to-orange-700">
              E-learning modules
            </h1>
            <p className="text-base text-gray-300">
              Graphical video demonstrations on software engineering topics.
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
        <div className="grid grid-cols-4 gap-4">
          {videoTutorials.map((item, index) => (
            <div key={`video-${index}`}>
              <div
                className="flex flex-col gap-2 bg-black bg-opacity-20 rounded-lg"
              >
                <Image
                  src={item.coverImg}
                  width={400}
                  height={200}
                  alt="logo-img"
                  className="rounded-lg"
                  onClick={() => openPopup(item.url)}
                />
                <div className="flex flex-col gap-1 p-2">
                  <h1 className="text-xl font-semibold">{item.title}</h1>
                  <p className="text-xs">{item.description}</p>
                </div>
                <Progressbar />
              </div>
            </div>
          ))}
        </div>
        <TutorialPopup
          isOpen={popupOpen}
          onClose={closePopup}
          videoUrl={currentVideoUrl}
        />
      </div>
    </div>
  );
};

export default VideoTutorialsSubPage;
