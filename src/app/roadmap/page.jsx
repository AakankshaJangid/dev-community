"use client";
import Image from "next/image";
import React, { useState } from "react";
import RoadmapPopup from "./RoadmapPopup";
import Layout from "../Layout/page";

const Roadmap = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [CurrentUrl, setCurrentUrl] = useState("");
  const videoTutorials = [
    {
      title: "FrontEnd Development",
      description: "HTMl, CSS , JavaScript...",
      coverImg: "/frontend.jpeg",
      url: "/frontend.pdf",
    },
    {
      title: "Full Stack",
      description: "This is the first video tutorial.",
      coverImg: "/fullstack.jpeg",
      url: "/full-stack.pdf",
    },
    {
      title: "AWS",
      description: "Amazon Web Services",
      coverImg: "/aws.jpeg",
      url: "/aws.pdf",
    },
    {
      title: "Blockchain",
      description: "Fundamentals, Programming, Data Sources...",
      coverImg: "/blockchain-img.jpeg",
      url: "/blockchain.pdf",
    },
  ];

  const openPopup = (Url) => {
    setCurrentUrl(Url);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setCurrentUrl("");
    setPopupOpen(false);
  };

  const roleBased = [
    {
      label: "Frontend",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-400",
      url: "/frontend.pdf",
    },
    {
      label: "Backend",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-500",
      url: "/backend.pdf",
    },
    {
      label: "Full Stack",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-600",
      url: "/full-stack.pdf",
    },
    {
      label: "UX design",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-400",
      url: "/ux-design.pdf",
    },
    {
      label: "C++",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-500",
      url: "/cpp.pdf",
    },
    {
      label: "PostgreSQL",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-600",
      url: "/postgresql-dba.pdf",
    },
    {
      label: "AI/ML",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-400",
      url: "/ai-data-scientist.pdf",
    },
  ];

  const skillBased = [
    {
      label: "Java",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-400",
      url: "/java.pdf",
    },
    {
      label: "Python",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-500",
      url: "/python.pdf",
    },
    {
      label: "React",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-600",
      url: "/react.pdf",
    },
    {
      label: "SQL",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-400",
      url: "/sql.pdf",
    },
    {
      label: "System Design",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-500",
      url: "/system-design.pdf",
    },
    {
      label: "MongoDB",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-600",
      url: "/mongodb.pdf",
    },
    {
      label: "Node.js",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-400",
      url: "/nodejs.pdf",
    },
    {
      label: "AWS",
      imageUrl: "/guide-line.png",
      hoverColor: "blue-500",
      url: "/aws.pdf",
    },
  ];

  return (
    <div className="w-full">
      <Layout>
        <div className="w-full ">
          <div className="">
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
                  Roadmaps
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
            <div className="mr-auto ml-auto w-1/5 ">
              <p className=" mb-1 border-2  rounded-lg border-gray-500 text-center p-1 mt-6 z-2 bg-[#F96D00] relative ">
                Hot Topics!!
              </p>
            </div>
          </div>
          <div className=" ">
            <hr
              width="100%"
              color="gray"
              size="2"
              className="border-gray-500 -mt-5 mr-7 z-1 absoulte"
            ></hr>
          </div>
          <div className=" gap-4 py-10 flex justify-center  ">
            {videoTutorials.map((item, index) => (
              <div
                key={`video-${index}`}
                className="border-2 border-gray-900 rounded-lg shadow-sm shadow-black w-1/3 h-72 transition-transform transform hover:scale-105"
              >
                <div
                  onClick={() => openPopup(item.url)}
                  className="flex flex-col items-center justify-between h-full"
                >
                  <Image
                    src={item.coverImg}
                    width={100}
                    height={80}
                    alt="logo-img"
                    className="rounded-lg py-2"
                  />
                  <div className="flex flex-col gap-1 w-full p-2 bg-[#F96D00] h-1/2 bg-opacity-60">
                    <h1 className="text-xl font-semibold">{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <RoadmapPopup
            isOpen={popupOpen}
            onClose={closePopup}
            url={CurrentUrl}
          />

          <div>
            <div className="mr-auto ml-auto w-48 ">
              <p className=" mb-1 border-2  rounded-lg border-gray-500 text-center p-1 mt-16 z-2 bg-[#F96D00] relative ">
                Role Based Roadmaps
              </p>
            </div>

            <div className=" ">
              <hr
                width="100%"
                color="gray"
                size="2"
                className="border-gray-500 -mt-5 mr-7 z-1 absoulte"
              ></hr>
            </div>

            <div className="w-full">
              <div className="mt-10 grid grid-cols-3 gap-1 w-4/6 mx-auto justify-center ">
                {roleBased.map((roadmap, index) => (
                  <div
                    key={index}
                    className={`bg-[#222831] border border-gray-400 shadow-md shadow-gray-600 hover:border-${roadmap.hoverColor} hover:border-r-2 hover:border-b-2 m-1 font-serif text-lg font-thin text-orange-200 px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105`}
                    onClick={() => openPopup(roadmap.url)}
                  >
                    {roadmap.label}
                    <Image
                      src={roadmap.imageUrl}
                      width={25}
                      height={20}
                      alt="logo-img"
                      className="rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* here pr code */}
          </div>
          <div>
            <div className="mr-auto ml-auto w-48 ">
              <p className=" mb-1 border-2  rounded-lg border-gray-500 text-center p-1 mt-16 z-2 bg-[#F96D00] relative ">
                Skill Based Roadmaps
              </p>
            </div>
            <div className=" ">
              <hr
                width="100%"
                color="gray"
                size="2"
                className="border-gray-500 -mt-5 mr-7 z-1 absoulte"
              ></hr>
            </div>

            <div className="w-full">
              <div className="mt-10 grid grid-cols-3 gap-1 w-4/6 mx-auto justify-center ">
                {skillBased.map((roadmap, index) => (
                  <div
                    key={index}
                    className={`bg-[#222831] border border-gray-400 shadow-md shadow-gray-600 hover:border-${roadmap.hoverColor} hover:border-r-2 hover:border-b-2 m-1 font-serif text-lg font-thin text-orange-200 px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105`}
                    onClick={() => openPopup(roadmap.url)}
                  >
                    {roadmap.label}
                    <Image
                      src={roadmap.imageUrl}
                      width={25}
                      height={20}
                      alt="logo-img"
                      className=" rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Roadmap;
