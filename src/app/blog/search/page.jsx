"use client";
import React, { useState } from "react";
import Sidebar from "../sidebar";
import Image from "next/image";
import Layout from "@/app/Layout/page";

const Search = () => {
  // Initialize state for the search input and filtered profiles
  const [searchInput, setSearchInput] = useState("");

  // Sample data for profiles
  const profiles = [
    "Aakanksha Jangid",
    "Anshika Pandey",
    "Gitisha Jain",
    "Aanchal Laad",
  ];
  // Function to update the filtered profiles based on the search input
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = profiles.filter((profile) =>
      profile.toLowerCase().includes(searchTerm)
    );
    setSearchInput(event.target.value);
    setFilteredProfiles(filtered);
  };
  // Initialize filtered profiles with all profiles
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  return (
    <div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-bold text-3xl mt-10 ml-8">Search</h1>
            <div className="flex  top-16 left-10">
              <Image
                src="/search-line.png"
                height={8}
                width={30}
                alt="search"
                className="relative left-10"
              />
              <div>
                <input
                  type="text"
                  placeholder="Search communities"
                  className="bg-slate-600 outline-none rounded-lg px-52 py-3"
                  value={searchInput}
                  onChange={handleSearch}
                />
              </div>
            </div>
            {/* profiles */}
            {searchInput.trim() !== "" && (
              <div className="relative top-32 left-20 flex flex-col gap-7">
                {filteredProfiles.map((profile, index) => (
                  <div className="flex gap-72" key={index}>
                    <div className="flex gap-6">
                      <Image
                        src="/user-3-fill.png"
                        height={15}
                        width={30}
                        alt="user"
                      />
                      <h1 className="relative top-2">{profile}</h1>
                    </div>
                    <button className="bg-indigo-700 text-white px-6 py-1 rounded-xl hover:bg-indigo-600">
                      View
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Search;
