import React, { useState } from 'react';

const CreateBlogPostForm = ({ onSubmit }) => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState(''); // Added title state
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [createdTime, setCreatedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a blog post object
    const newBlogPost = {
      images,
      title, // Added title to the object
      description,
      createdBy,
      createdTime,
    };
    // Submit the blog post to the backend
    onSubmit(newBlogPost);
  };

  return (
    <div className='bg-gradient-to-r from-[#F96D00] to-[#222831] p-[1px] rounded-md'>
      <form onSubmit={handleSubmit} className='bg-[#222831] p-4 rounded-md'>
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
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          className="outline-none bg-transparent border-b-2 border-white w-1/2"
        />
      </div>
      <div className="flex justify-between gap-10">
        <label>Created By:</label>
        <input
          type="text"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          required
          className="outline-none bg-transparent border-b-2 border-white w-1/2"
        />
      </div>
      <div className="flex justify-between gap-10">
        <label>Created Time:</label>
        <input
          type="text"
          value={createdTime}
          onChange={(e) => setCreatedTime(e.target.value)}
          required
          className="outline-none bg-transparent border-b-2 border-white w-1/2"
        />
      </div>
      <button type="submit" className='bg-[#F96D00] px-4 py-2 rounded-md text-sm'>Create Blog Post</button>
    </form>
    </div>
  );
};

export default CreateBlogPostForm;
