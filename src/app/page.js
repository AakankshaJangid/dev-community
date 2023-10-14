'use client';
import FQASection from './FQASection/page'
import Roadmap from './Roadmap/page';
import VideoTutorials from './video-tutorials/page';
import ResumeGenerator from './ResumeGenerator/page';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-800">
      {/* <FQASection /> */}
      {/* <VideoTutorials /> */}
      {/* <Roadmap /> */}
      <ResumeGenerator />
    </main>
  )
}
