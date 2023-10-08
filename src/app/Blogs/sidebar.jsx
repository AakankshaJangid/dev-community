// components/Sidebar.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  
    // const toggleSidebar = () => {
    //   setSidebarOpen(!isSidebarOpen);
    // }

return (
    <div
      className={`w-1/5 min-h-screen bg-gray-800  text-white ${
        isSidebarOpen ? "" : "w-20"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between items-center my-4">
          {/* <button
            onClick={toggleSidebar}
            className="text-2xl text-white focus:outline-none px-2 py-4"
          >
            {isSidebarOpen ? "✕" : "☰"}
          </button> */}
          <h1 className='text-2xl font-semibold flex gap-28'>Blogs 
          <Image
          src="/dev-comm-logo.png"
          width={60}
          height={60}
          alt="logo-img"
          className="rounded-full"
        />
        </h1>
        </div>
          <ul className="flex flex-col gap-6">
            <li className="">
              <Link href="/">
                <span className="hover:text-blue-500 cursor-pointer">Home</span>
              </Link>
            </li>
          
            <li className="">
              <Link href="/search">
                <span className="hover:text-blue-500 cursor-pointer">Search</span>
              </Link>
            </li>
            <li className="">
              <Link href="/activity">
                <span className="hover:text-blue-500 cursor-pointer">
                  Activity
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/create">
                <span className="hover:text-blue-500 cursor-pointer">
                  Create Thread
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/communities">
                <span className="hover:text-blue-500 cursor-pointer">
                 Community
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/profile">
                <span className="hover:text-blue-500 cursor-pointer">
                  Profile
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/video-tutorials">
                <span className="hover:text-blue-500 cursor-pointer">
                  Log Out
                </span>
              </Link>
            </li>
          </ul>
    
         
        
      </div>
    </div>
  );
        }

export default Sidebar;