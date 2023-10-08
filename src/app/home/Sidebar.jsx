// components/Sidebar.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`w-1/5 bg-gray-800 h-screen text-white ${
        isSidebarOpen ? "" : "w-20"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center my-4">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-white focus:outline-none px-2 py-4"
          >
            {isSidebarOpen ? "✕" : "☰"}
          </button>
          <h1
            className={`text-2xl font-semibold ${
              isSidebarOpen ? "" : "hidden"
            }`}
          >
            <Image
                  src="/dev-comm-logo.png"
                  width={60}
                  height={60}
                  alt="logo-img"
                  className="rounded-full"
                />
          </h1>
        </div>
        {isSidebarOpen ? (
          <ul className="flex flex-col gap-6">
            <li className="">
              <Link href="/">
                <span className="hover:text-blue-500 cursor-pointer">Home</span>
              </Link>
            </li>
            <li className="">
              <Link href="/blogs">
                <span className="hover:text-blue-500 cursor-pointer">
                  Blogs
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/faqsection">
                <span className="hover:text-blue-500 cursor-pointer">FAQs</span>
              </Link>
            </li>
            <li className="">
              <Link href="/roadmaps">
                <span className="hover:text-blue-500 cursor-pointer">
                  Roadmaps
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/video-tutorials">
                <span className="hover:text-blue-500 cursor-pointer">
                  E-learning
                </span>
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col gap-4">
            <li className="">
              <Link href="/">
                <Image
                  src="/home-8-line.png"
                  width={30}
                  height={30}
                  alt="logo-img"
                  className="rounded-full"
                />
              </Link>
            </li>
            <li className="">
              <Link href="/blogs">
                <Image
                  src="/pages-line.png"
                  width={30}
                  height={30}
                  alt="logo-img"
                  className="rounded-full"
                />{" "}
              </Link>
            </li>
            <li className="">
              <Link href="/faqs">
                <Image
                  src="/question-answer-line.png"
                  width={30}
                  height={30}
                  alt="logo-img"
                  className="rounded-full"
                />{" "}
              </Link>
            </li>
            <li className="">
              <Link href="/roadmaps">
                <Image
                  src="/road-map-line.png"
                  width={30}
                  height={30}
                  alt="logo-img"
                  className="rounded-full"
                />{" "}
              </Link>
            </li>
            <li className="">
              <Link href="/e-learning">
                <Image
                  src="/video-chat-line.png"
                  width={30}
                  height={30}
                  alt="logo-img"
                  className="rounded-full"
                />{" "}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;