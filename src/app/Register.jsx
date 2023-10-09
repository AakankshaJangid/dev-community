// Register.js (Frontend)

import React, { useEffect, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);
  // Function to fetch all users
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/users/get-all-users"
      );
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        alert("User registered successfully");
        // Redirect or perform any other actions
        window.location.href = "/home";
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration");
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []);

  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-4">
        <div className="p-4 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Register</h2>
          <form onSubmit={handleSubmit} className="text-gray-200 flex flex-col gap-6">
            <div className="flex justify-between gap-10">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="outline-none bg-transparent border-b-2 border-white"
              />
            </div>
            <div className="flex justify-between gap-10">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="outline-none bg-transparent border-b-2 border-white"
              />
            </div>
            <div className="flex justify-between gap-10">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="outline-none bg-transparent border-b-2 border-white"
              />
            </div>
            {/* <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div> */}
            <button type="submit" className="py-2 px-4 bg-white text-cyan-600">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
