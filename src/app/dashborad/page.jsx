"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ToDo from "../user-profile/to-do/page";
import Progressbar from "./progress-bar/page";

const Dashboard = () => {
  return (
    <div>
      <div>
        <div>
          <Image src="/user-3-fill.png" height={50} width={50} />
          <h1>gitisha jain</h1>
          <h1>Domain: Web Development</h1>
          <p>Currently learning: React JS</p>
        </div>
        <Progressbar />
      </div>
      <div>
        <div>
          <h1>Institute</h1>
          <p>Shri Vaishnav Vidyapeeth</p>
          <p>Vishwa Vidyalaya</p>
        </div>
        <div>
          <h1>Languages Used</h1>
          <p>C++, Java, JavaScript</p>
        </div>
      </div>
      <div>
        <ToDo />
        <div>
          <h1>Notes</h1>
          <Link href="/dashboard/notes">
            <Image src="/notes.jpg" alt="notes" width={300} height={500} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
