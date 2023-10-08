import React from 'react'
import Sidebar from '../sidebar'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='flex'>
        <div className='flex flex-col'>
        <div className='flex '>
        <div className='relative'>
            <div className='flex'>
                <Image src='/user-3-fill.png' height={20} width={50} className='mr-5'/>
                <h1 className='text-xl font-bold'>Gitisha Jain</h1>
            </div>
            <span className='text-gray-400'>@gitisha</span>
         </div>
          <div>
            <button className='bg-indigo-900 rounded-lg px-8 py-1  hover:bg-indigo-800'>Edit</button>
          </div>
        </div>
        <div>
          <p className='ml-44'>Hello , I am learning web development</p>
        </div>
          <div className=' bg-gray-700 rounded-lg px-20 py-6'>
            <div className='ml-2 flex gap-20'>
                 <h1 className='flex gap-2'>
                  <Image src='/share-line.png' height={10} width={20}/>
                  Threads</h1>
                  <h1 className='flex gap-2'>
                  <Image src='/chat-1-line.png' height={10} width={20}/>
                  Replies</h1>
                  <h1 className='flex gap-2'>
                  <Image src='/share-forward-line.png' height={10} width={20}/>
                  Tags</h1>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Profile