// pages/index.js
"use client";
import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import Layout from "../Layout/page";
import Link from "next/link";


const Blog = () => {
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
    <div className="w-full bg-[#393E46]">
      <Layout>
        <div className="w-full flex justify-between mb-6">
        <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
        <Link href={'/blog/createpost'} className="text-white bg-[#F96D00] bg-opacity-80 p-2 my-2 rounded-sm text-sm">create post</Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {blogData.map((post) => (
            <BlogPost
              key={post.id}
              images={post.images}
              title={post.title}
              description={post.description}
              createdBy={post.createdBy}
              createdTime={post.createdTime}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Blog;
