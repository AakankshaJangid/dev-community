import Image from "next/image";
import React, { useState } from "react";
import cx from "classnames";
import RoadmapPopup from "./RoadmapPopup";


const Roadmap = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [CurrentUrl, setCurrentUrl] = useState('');
  const videoTutorials = [
    {
      title: "FrontEnd Development",
      description: "HTMl, CSS , JavaScript...",
      coverImg: "/dev-comm-logo.png",
      url: "https://roadmap.sh/frontend",
    },
    {
      title: "Full Stack",
      description: "This is the first video tutorial.",
      coverImg: "/dev-comm-logo.png",
      url: "https://roadmap.sh/full-stack",
    },
    {
      title: "AWS",
      description: "Amazon Web Services",
      coverImg: "/dev-comm-logo.png",
      url: "https://roadmap.sh/best-practices/aws",
    },
    {
      title: "Blockchain",
      description: "Fundamentals, Programming, Data Sources...",
      coverImg: "/dev-comm-logo.png",
      url: "https://roadmap.sh/blockchain",
    }

  ];

  const openPopup = (Url) => {
    setCurrentUrl(Url);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setCurrentUrl('');
    setPopupOpen(false);
  };

  const roleBased = [
    {
      label: "Frontend",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-400",
    },
    {
      label: "Backend",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-500",
    },
    {
      label: "Full Stack",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-600",
    },
    {
      label: "UX design",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-400",
    },
    {
      label: "C++",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-500",
    },
    {
      label: "PostgreSQL",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-600",
    },
    {
      label: "AI/ML",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-400",
    },



  ];



  const skillBased = [
    {
      label: "Java",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-400",
    },
    {
      label: "Python",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-500",
    },
    {
      label: "React",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-600",
    },
    {
      label: "SQL",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-400",
    },
    {
      label: "System Design",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-500",
    },
    {
      label: "MongoDB",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-600",
    },
    {
      label: "Node.js",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-400",
    },
    {
      label: "AWS",
      imageUrl: "/arrow-right-up-fill.png",
      hoverColor: "blue-500",
    },
  ];



  return (
    <div className="w-full ">

      <div className="w-1/2 ml-auto mr-auto">

        <div className="flex flex-col gap-3  ">
          <h1 className="text-6xl font-semibold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-b from-orange-300 to-orange-700">DevCom-Roadmaps</span>
          </h1>
        </div>
        <div className="flex justify-end">
          <p className="text-2xl font-bold text-teal-500 pt-5 pr-2">
            powered by
          </p>

          <Image
            src="/dev-comm-logo.png"
            width={80}
            height={80}
            alt="logo-img"
            className="rounded-full"
          />

        </div>

        <div className="mr-auto ml-auto w-1/5 ">

          <p className=" mb-1 border-2  rounded-lg border-gray-500 text-center p-1 mt-6 z-2 bg-slate-800 relative ">Hot Topics!!</p>
        </div>


      </div>
      <div className=" "  >
        <hr width="100%" color="gray" size="2" className="border-gray-500 -mt-5 mr-7 z-1 absoulte"></hr>
      </div>
      <div className=" gap-4 mt-9 flex justify-center  ">
        {videoTutorials.map((item, index) => (
          <div key={`video-${index}`} className="ml-auto mr-auto mt-5 border-2 border-gray-900 rounded-lg shadow-xl shadow-black w-64 h-79   transition-transform transform hover:scale-105">

            <div onClick={() => openPopup(item.url)} className="flex flex-col gap-2  my-6 ml-auto mr-auto ">
              <Image
                src={item.coverImg}
                width={100}
                height={80}
                alt="logo-img"
                className="rounded-lg ml-auto mr-auto mt-3"
              />
              <div className="flex flex-col gap-1 p-2">
                <h1 className="text-xl font-semibold">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-40 mr-6"><button className=" underline rounded-lg px-1 bg-transparent hover:bg-cyan-950">more roadmaps..</button></div>
      </div>
      <RoadmapPopup isOpen={popupOpen} onClose={closePopup} url={CurrentUrl} />

      <div>
        <div className="mr-auto ml-auto w-48 ">

          <p className=" mb-1 border-2  rounded-lg border-gray-500 text-center p-1 mt-16 z-2 bg-slate-800 relative ">Role Based Roadmaps</p>
        </div>



        <div className=" "  >
          <hr width="100%" color="gray" size="2" className="border-gray-500 -mt-5 mr-7 z-1 absoulte"></hr>
        </div>

        <div className="w-full">

          <div className="mt-10 grid grid-cols-3 gap-1 w-4/6 mx-auto justify-center ">
            {roleBased.map((roadmap, index) => (
              <div
                key={index}
                className={`bg-slate-900 border border-gray-400 shadow-md shadow-violet-950 hover:border-${roadmap.hoverColor} hover:border-r-2 hover:border-b-2 m-1 font-serif text-lg font-thin text-orange-200 px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105`}
              >
                {roadmap.label}
                <Image
                  src={roadmap.imageUrl}
                  width={20}
                  height={20}
                  alt="logo-img"
                  className="hover:bg-gray-600 bg-gray-700 rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
        {/* <div className=" mt-10 grid grid-cols-3 gap-1 w-4/6 mx-auto justify-center ">
        <div>
          <div className=" bg-slate-900 border border-gray-400 hover:border-blue-400 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-600 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
          <div>
          <div className="bg-slate-900 border border-gray-400 hover:border-blue-500 hover:border-r-4 hover:border-b-4 m-1 font-serif text-xl px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105">
            rd1
            <Image
            src="/arrow-right-up-fill.png"
            width={20}
            height={20}
            alt="logo-img"
            className=" hover:bg-gray-600 bg-gray-700 rounded-2xl "
          />
          </div>
          
          </div>
        </div> */}
      </div>
      <div>
        <div className="mr-auto ml-auto w-48 ">

          <p className=" mb-1 border-2  rounded-lg border-gray-500 text-center p-1 mt-16 z-2 bg-slate-800 relative ">Skill Based Roadmaps</p>
        </div>



        <div className=" "  >
          <hr width="100%" color="gray" size="2" className="border-gray-500 -mt-5 mr-7 z-1 absoulte"></hr>
        </div>

        <div className="w-full">

          <div className="mt-10 grid grid-cols-3 gap-1 w-4/6 mx-auto justify-center ">
            {skillBased.map((roadmap, index) => (
              <div
                key={index}
                className={`bg-slate-900 border border-gray-400 shadow-md shadow-violet-950 hover:border-${roadmap.hoverColor} hover:border-r-2 hover:border-b-2 m-1 font-serif text-lg font-thin text-orange-200 px-2 py-4 rounded-lg flex justify-between transition-transform transform hover:scale-105`}
              >
                {roadmap.label}
                <Image
                  src={roadmap.imageUrl}
                  width={20}
                  height={20}
                  alt="logo-img"
                  className="hover:bg-gray-600 bg-gray-700 rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Roadmap
