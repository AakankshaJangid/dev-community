// pages/blog/CreateBlogPostPage.js
"use client"
import React from 'react';
import Layout from '../../Layout/page';
import CreateBlogPostForm from '../CreateBlogPostForm';

const CreateBlogPostPage = () => {
  const createBlogPost = async (postData) => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        console.log('Blog post created successfully');
      } else {
        console.error('Failed to create blog post');
      }
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return (
    <Layout>
      <div className='flex flex-col gap-10'>
      <h1 className=" text-3xl font-bold">Create Blog Post</h1>
      <CreateBlogPostForm onSubmit={createBlogPost} />
      </div>
    </Layout>
  );
};

export default CreateBlogPostPage;
