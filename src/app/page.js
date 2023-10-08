'use client';
import Register from './Register';
import Blogs from './blog/page';
import FQASection from './faqsection/FAQs'
import HomePage from './home/page';
import Roadmap from './roadmap/page';
import VideoTutorials from './video-tutorials/VideoTutorialsSubPage';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-800 w-full">
      {/* <FQASection /> */}
      {/* <VideoTutorials /> */}
      {/* <HomePage /> */}
      {/* <Register /> */}
      {/* <Blogs /> */}
      <Roadmap />
    </main>
  )
}
