import React, { useState } from 'react';
import Sidebar from './sidebar';

const Create = () => {
  // Initialize state for thread content and list of threads
  const [threadContent, setThreadContent] = useState('');
  const [threads, setThreads] = useState([]);

  // Function to handle the creation of a new thread
  const handlePostThread = () => {
    if (threadContent.trim() !== '') {
      // Create a new thread object with content and a unique identifier
      const newThread = {
        id: Date.now(),
        content: threadContent,
      };

      // Add the new thread to the list of threads
      setThreads([...threads, newThread]);

      // Clear the thread content input
      setThreadContent('');
    }
  };

  return (
    <div className='flex'> 
        <Sidebar/>
        <div className='relative left-10 top-4'>
            <h1 className='font-bold text-2xl mt-2 mb-4'>Create Thread</h1>
            <div className='flex flex-col gap-4 relative bottom-4'>
                <h1 className='font-bold text-xl relative top-2 left-8' >Content</h1>
                <textarea
                  cols="80"
                  rows="18"
                  className='bg-slate-800 outline-none rounded-lg relative top-2 left-8 pl-6 pt-2'
                  value={threadContent}
                  onChange={(e) => setThreadContent(e.target.value)}
                ></textarea>
                <button
                  className='bg-indigo-700 rounded-lg px-14 py-2 relative left-8 hover:bg-indigo-600'
                  onClick={handlePostThread}
                >
                  Post Thread
                </button>
            </div>
        </div>
    </div>
  );
};

export default Create;
