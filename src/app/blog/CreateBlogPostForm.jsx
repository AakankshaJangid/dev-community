// components/CreateBlogPostForm.js

import React, { useState } from 'react';

const CreateBlogPostForm = ({ onSubmit }) => {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [createdTime, setCreatedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a blog post object
    const newBlogPost = {
      images,
      description,
      createdBy,
      createdTime,
    };
    // Submit the blog post to the backend
    onSubmit(newBlogPost);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-gradient-to-r from-cyan-600 to-teal-500 px-6 py-4'>
      <div className="flex justify-between gap-10">
        <label>Images (comma-separated URLs):</label>
        <input
          type="text"
          value={images}
          onChange={(e) => setImages(e.target.value.split(','))}
          required
          className="outline-none bg-transparent border-b-2 border-white w-1/2"
        />
      </div>
      <div className="flex justify-between gap-10">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="outline-none bg-transparent border-b-2 border-white  w-1/2"

        />
      </div>
      <div className="flex justify-between gap-10">
        <label>Created By:</label>
        <input
          type="text"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          required
          className="outline-none bg-transparent border-b-2 border-white  w-1/2"

        />
      </div>
      <div className="flex justify-between gap-10">
        <label>Created Time:</label>
        <input
          type="text"
          value={createdTime}
          onChange={(e) => setCreatedTime(e.target.value)}
          required
          className="outline-none bg-transparent border-b-2 border-white  w-1/2"

        />
      </div>
      <button type="submit">Create Blog Post</button>
    </form>
  );
};

export default CreateBlogPostForm;
