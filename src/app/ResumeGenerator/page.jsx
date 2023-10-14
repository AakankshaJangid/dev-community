import React, { useRef, useState } from "react";
import Image from 'next/image';
import Editor from './editor';
import ResumeD from "./ResumeD";
import ReactToPrint from "react-to-print";


const sections = {
  basicInfo: "Basic Info",
  workExp: "Work Experience",
  project: "Projects",
  education: "Education",
  achievement: "Achievements",
  skills: "skills",
  other: "Other",
};

const Resume = () => {

  const resumeRef = useRef()
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div>
      <div className="flex flex-row items-center justify-around w-full  border-pink-400 m-4 p-2">
        <div className="text-2xl font-semibold text-center flex-col justify-center pt-28 px-4 font-serif animate-fade  w-76">
          <p className="quote-line text-violet-300">
            "Your skills and experiences are unique
          </p>
          <p className="quote-line text-violet-300">
            let your{' '}
            <span className=" font-mono text-transparent bg-clip-text bg-gradient-to-b from-blue-100 to-pink-500 text-4xl animate-pulse">
              Resume
            </span>{' '}
            reflect that"
          </p>
          <button className='mt-4 py-1 px-2 text-violet-200 border border-violet-200  bg-slate-700 rounded-md font-thin font-mono'>Start building</button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/undraw_online_resume_re_ru7s.svg"
            width={500}
            height={500}
            alt="logo-img"
            className="rounded-lg p-4 align-middle"
          />
        </div>
           {/* <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        /> */}
      </div>
      <div>
      
      <Editor sections={sections} 
      information={resumeInformation}
      setInformation={setResumeInformation}
      />

<div className="flex items-center justify-center mt-6">

<ReactToPrint
          trigger={() => {
            return (
              <button className="px-3 py-1 mb-6 rounded-lg bg-slate-700 text-white outline-none font-medium text-base space-x-1 items-center cursor-pointer transition duration-200 hover:bg-indigo-700">
                Download 
              </button>
            );
          }}
          content={() => resumeRef.current}
        />


        {/* <button  onClick={downloadResume} className="px-3 py-1 mb-6 rounded-lg bg-slate-700 text-white outline-none font-medium text-base space-x-1 items-center cursor-pointer transition duration-200 hover:bg-indigo-700">
          Download
        </button> */}
      </div>
   <ResumeD 
   ref={resumeRef}
   information ={resumeInformation}
   sections={sections}  />
      </div>
    </div>
  );
};

export default Resume;


