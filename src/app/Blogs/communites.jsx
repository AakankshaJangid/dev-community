import React from 'react'
import Sidebar from './sidebar'
import Image from 'next/image'

const Communities
 = () => {
  return (
    <div className='flex'>
         <Sidebar/>
         <div className='flex flex-col'>
            <h1 className='font-bold text-3xl mt-8 ml-16'>Communities</h1>
            <div className='flex relative top-16 left-10'>
            <Image src='/search-line.png' height={8} width={30} alt='search' className='relative left-10'/>
            <input type="text" placeholder='Search communities' className='bg-slate-800 outline-none rounded-lg px-52 py-3'/>
            </div>
            <div className='bg-slate-900 rounded-lg hover:bg-slate-800 relative top-32 left-16 h-2/5 w-3/5 pt-4 pl-6'>
                <div className='flex gap-4'>
                <Image src='/news.jpg' height={60} width={50}/>
                <h1 className='relative left-2'>Tech_News</h1>
               
                </div>
                <span className='text-gray-600  relative left-20 bottom-2'>@technews</span>
            </div>
          
         </div>
    </div>
  )
}

export default Communities
