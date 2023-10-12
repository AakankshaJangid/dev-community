'use client'
import React from 'react'
import Layout from '../Layout/page'
import VideoTutorials from './VideoTutorialsSubPage'

const page = () => {
  return (
    <div className='bg-[#393E46]'>
      <Layout>
        <VideoTutorials />
      </Layout>
    </div>
  )
}

export default page
