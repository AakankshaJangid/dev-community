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
    <form onSubmit={handleSubmit} className='text-red-600'>
      <div>
        <label>Images (comma-separated URLs):</label>
        <input
          type="text"
          value={images}
          onChange={(e) => setImages(e.target.value.split(','))}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Created By:</label>
        <input
          type="text"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Created Time:</label>
        <input
          type="text"
          value={createdTime}
          onChange={(e) => setCreatedTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Blog Post</button>
    </form>
  );
};

export default CreateBlogPostForm;
