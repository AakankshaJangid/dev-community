'use client';
import FQASection from './FQASection/page'
import VideoTutorials from './video-tutorials/page';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-800">
      {/* <FQASection /> */}
      <VideoTutorials />
    </main>
  )
}
