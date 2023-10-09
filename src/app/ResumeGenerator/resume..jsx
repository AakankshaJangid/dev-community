import React from 'react';
import Image from 'next/image';

const Resume = () => {
  return (
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
    </div>
  );
};

export default Resume;

