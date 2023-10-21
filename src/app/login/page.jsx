"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/home");
    } catch (error) {
      console.log(error);
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="outline-none bg-transparent border-b-2 border-white text-gray-300"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="outline-none bg-transparent border-b-2 border-white text-gray-300"
            />
            <button className="py-2 px-4 bg-white hover:bg-slate-200 font-semibold text-lg text-[#F96D00] rounded-sm">
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right" href={"/register"}>
              Don't have an account? <span className="underline text-[#222831] font-semibold">Register</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
