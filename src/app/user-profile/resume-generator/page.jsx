import React, { useRef, useState } from "react";
import Image from "next/image";
import Editor from "./editor";
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
  const resumeRef = useRef();
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
    <div className=""> 
      <div>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />

        <div className="flex items-center justify-center m-4">
          <ReactToPrint
            trigger={() => {
              return (
                <button className="rounded-lg bg-[#F96D00] px-4 py-2 text-white outline-none font-medium text-base items-center cursor-pointer transition duration-200 hover:bg-indigo-700">
                  Download
                </button>
              );
            }}
            content={() => resumeRef.current}
          />
        </div>
        <ResumeD
          ref={resumeRef}
          information={resumeInformation}
          sections={sections}
        />
      </div>
    </div>
  );
};

export default Resume;
