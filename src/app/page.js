'use client';
import Login from './login/page';
import Register from './register/page';
import Blogs from './blog/page';
import FQASection from './faqsection/FAQs'
import HomePage from './home/page';
import Roadmap from './roadmap/page';
import VideoTutorials from './video-tutorials/VideoTutorialsSubPage';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#393E46] w-full flex justify-center items-center">
      {/* <FQASection /> */}
      {/* <VideoTutorials /> */}
      {/* <HomePage /> */}
      <Register />
      {/* <Blogs /> */}
      {/* <Roadmap /> */}
      {/* <Login /> */}
    </main>
  )
}
