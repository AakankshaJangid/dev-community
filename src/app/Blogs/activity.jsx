import React from 'react'
import Sidebar from './sidebar'

const Activity = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='relative left-16 top-10'>
          <h1 className='font-bold text-3xl'>Activity</h1>
          <p className='text-blue-600 mt-6'>No Activity Yet  </p>
        </div>
    </div>
  )
}

export default Activity