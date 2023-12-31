import Image from "next/image";
import React, { useState } from "react";
import TutorialPopup from "./TutorialPopup";

const VideoTutorials = () => {
    const [popupOpen, setPopupOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const videoTutorials = [
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
  

  const openPopup = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setCurrentVideoUrl('');
    setPopupOpen(false);
  };
  return (
    <div className="w-full">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center gap-6 items-center bg-gradient-to-r from-cyan-600 to-teal-600 p-4 rounded-xl">
          <Image
            src="/dev-comm-logo.png"
            width={300}
            height={300}
            alt="logo-img"
            className="rounded-full"
          />
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-semibold">E-learning modules</h1>
            <p className="text-xl text-gray-300">
              Graphical video demonstrations on software engineering topics.
            </p>
            <div className="flex gap-6">
              <h1 className="p-2 bg-orange-600 rounded-lg cursor-pointer hover:bg-orange-700">
                @dev_community
              </h1>
              <h1 className="p-2 bg-blue-900 rounded-lg cursor-pointer hover:bg-blue-950">
                devcommunity@gmail.com
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
        {videoTutorials.map((item, index) => (
          <div key={`video-${index}`}>
            <div onClick={() => openPopup(item.url)} className="flex flex-col gap-2">
              <Image
              src={item.coverImg}
              width={400}
              height={200}
              alt="logo-img"
              className="rounded-lg"
              />
              <div className="flex flex-col gap-1 p-2">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TutorialPopup isOpen={popupOpen} onClose={closePopup} videoUrl={currentVideoUrl} />
      </div>
    </div>
  );
};

export default VideoTutorials;
