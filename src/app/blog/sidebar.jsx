// components/Sidebar.js
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
  
    // const toggleSidebar = () => {
    //   setSidebarOpen(!isSidebarOpen);
    // }

return (
    <div
      className={` bg-gray-800  text-white ${
        isSidebarOpen ? "" : "w-20"
      }`}
    >
      <div className="p-4">
          <ul className="flex justify-between">
            <li className="">
              <Link href="/blog/home">
                <span className="hover:text-blue-500 cursor-pointer">Home</span>
              </Link>
            </li>
          
            <li className="">
              <Link href="/blog/search">
                <span className="hover:text-blue-500 cursor-pointer">Search</span>
              </Link>
            </li>
            <li className="">
              <Link href="/blog/activity">
                <span className="hover:text-blue-500 cursor-pointer">
                  Activity
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/blog/create">
                <span className="hover:text-blue-500 cursor-pointer">
                  Create Thread
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/blog/communities">
                <span className="hover:text-blue-500 cursor-pointer">
                 Community
                </span>
              </Link>
            </li>
            <li className="">
              <Link href="/blog/profile">
                <span className="hover:text-blue-500 cursor-pointer">
                  Profile
                </span>
              </Link>
            </li>
          </ul>     
      </div>
    </div>
  );
        }

export default Sidebar;