// "use client";
// import React from "react";
// import Sidebar from "./sidebar";
// import Home from "./home/page";
// import Layout from "../Layout/page";
// import Search from "./search/page";
// import Profile from "./profile/page";
// import Communities from "./communities/page";

// const Blogs = () => {
//   return (
//     <div className="w-full">
//       <Layout>
//       <Sidebar />
//         <div className="flex">
//           <div className="flex flex-col">
//             <Search />
//             <Home />
//           </div>
//           {/* <div className="flex flex-col">
//             <Profile />
//             <Communities />
//           </div> */}
//         </div>
//       </Layout>
//     </div>
//   );
// };

// export default Blogs;
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
    <div className="w-full">
      <Layout>
        <div className="w-full">
        <h1 className="text-3xl font-bold mb-4">Blog Page</h1>
        <Link href={'/blog/createpost'}>create post</Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {blogData.map((post) => (
            <BlogPost
              key={post.id}
              images={post.images}
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
