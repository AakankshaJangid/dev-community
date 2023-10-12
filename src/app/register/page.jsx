// Register.js (Frontend)
"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <div className="min-h-screen bg-[#393E46] w-full flex justify-center items-center">
      <div className="bg-white bg-opacity-20 p-4 flex justify-center items-center gap-10 rounded-sm shadow-xl">
        <div> 
          <Image
          src="/Innovation-pana.png"
          width={400}
          height={400}
          alt="register-img"
          className=""
          />         
        </div>
        <div className="p-4 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Register</h2>
          <p className="text-lg text-[#222831] ">Navigating Tech Together!</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="text-gray-200 flex flex-col gap-6"
          >
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
            <div className="flex justify-between gap-10">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="outline-none bg-transparent border-b-2 border-white"
              />
            </div>
            <button type="submit" className="py-2 px-4 bg-white hover:bg-slate-200 font-semibold text-lg text-[#F96D00] rounded-sm">
              Register
            </button>
            <p>Already have an account? <Link href={'/login'}> <span className="text-[#222831] font-semibold">Log In</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
