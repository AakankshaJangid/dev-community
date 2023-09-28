
import React from 'react';
import Progressbar from './Progressbar';
import ToDo from './ToDo';
import Notes from './Notes';
import Image from 'next/image';

const Dashboard = () => {
  return (
    // main div
   <div  className='bg-slate-900 min-h-screen'>
    <div className='flex'>
    <div className='flex flex-col bg-black w-64 h-72 rounded-3xl ml-5 relative top-10'>
          <div className='relative left-14 flex flex-col'>
          <Image
              src='/user-3-fill.png'
               height={50}
               width={50}
               className='relative top-5 left-10'
          />
          <h1 className='relative top-6 left-6'>gitisha jain</h1>
           <h1 className='relative top-20 right-7'>Domain:Web Development</h1>
           <p className='relative right-7 top-4 font-bold'>Currently learnig: react js </p>
          </div>
          
          <Progressbar/>
          
       </div>
     <div className='bg-indigo-950 rounded-xl ml-5 relative top-10  w-3/4 h-44 flex'>
       <div className='relative left-6 top-8'>
         <h1>Institue</h1>
         <p className='text-xl font-bold'>Shri Vaishnav Vidyapeeth</p>
         <p  className='text-xl font-bold'>Vishwa Vidyalaya</p>
       </div>
      <div className='relative left-36 top-8'>
         <h1>Languages Used</h1>
         <p className='text-xl font-bold'>C++ , Java , JavaScript</p>
        
      </div>
     </div>
    </div>
    <div className='flex'>
     
     <ToDo/>
     <Notes/>
     
     
     </div>
   

   </div>
  );
};

export default Dashboard;
