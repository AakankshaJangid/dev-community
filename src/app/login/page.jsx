// components/Login.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        // Login successful
        const data = await response.json();
        // You can store the user information in state or cookies
        window.location.href = "/home";
      } else {
        // Handle login error
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-lg text-[#222831] ">Welcome Back!</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center gap-20">
              <label htmlFor="confirmPassword">Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none bg-transparent border-b-2 border-white"
              />
            </div>
            <div className="flex justify-between items-center gap-20">
              <label htmlFor="confirmPassword">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none bg-transparent border-b-2 border-white"
              />
            </div>

            <button onClick={handleLogin} className="py-2 px-4 bg-white hover:bg-slate-200 font-semibold text-lg text-[#F96D00] rounded-sm">Login</button>
            <p>Don't have an account? <Link href={'/register'}> <span className="text-[#222831] font-semibold">Sign Up</span></Link></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
