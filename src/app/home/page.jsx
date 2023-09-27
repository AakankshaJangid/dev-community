import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Layout from '../Layout/page'
import BlogsPreview from './BlogsPreview'
import RoadmapsPreview from './RoadmapsPreview'

const HomePage = () => {
  const blogData = [
    {
      img: '/dev-comm-logo.png',
      description: 'Lorem ipsum dolor sit amet...',
      createdBy: 'John Doe',
      createdDate: '2023-09-27',
    },
    {
      img: '/dev-comm-logo.png',
      description: 'Lorem ipsum dolor sit amet...',
      createdBy: 'John Doe',
      createdDate: '2023-09-27',
    },
    {
      img: '/dev-comm-logo.png',
      description: 'Lorem ipsum dolor sit amet...',
      createdBy: 'John Doe',
      createdDate: '2023-09-27',
    },
    {
      img: '/dev-comm-logo.png',
      description: 'Lorem ipsum dolor sit amet...',
      createdBy: 'John Doe',
      createdDate: '2023-09-27',
    },
    {
      img: '/dev-comm-logo.png',
      description: 'Lorem ipsum dolor sit amet...',
      createdBy: 'John Doe',
      createdDate: '2023-09-27',
    },
    // Add more blog entries here
  ];
  
  return (
    <div className='w-full'>
     <Layout>
        <BlogsPreview blogData={blogData} />
        <RoadmapsPreview />
     </Layout>
    </div>
  )
}

export default HomePage
