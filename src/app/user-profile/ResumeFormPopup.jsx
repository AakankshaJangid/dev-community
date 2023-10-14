import React, { useState } from 'react';

const ResumeFormPopup = ({ onGenerateResume, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenerate = () => {
    onGenerateResume(formData);
  };

  return (
    <div className="resume-form-popup">
      <div className="resume-form-content">
        <h2>Resume Form</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="title">Title/Domain</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          {/* Add more fields as needed */}
        </form>
        <button onClick={handleGenerate}>Generate Resume</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ResumeFormPopup;
