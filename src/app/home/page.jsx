'use client'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Layout from '../Layout/page'
import BlogsPreview from './BlogsPreview'
import RoadmapsPreview from './RoadmapsPreview'

const HomePage = () => {
  const [blogData,setBlogData] = useState([])

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs/all');
      if (response.ok) {
        const data = await response.json();
        setBlogData(data);
        console.log(data); // Array of blog posts
      } else {
        console.error('Failed to fetch blog posts');
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };
  
  useEffect(() => {
    fetchBlogPosts(); // Fetch users when the component mounts
  }, []);
  return (
    <div className='w-full bg-[#393E46]'>
     <Layout>
        <BlogsPreview blogData={blogData} />
        <RoadmapsPreview />
     </Layout>
    </div>
  )
}

export default HomePage
