import Link from 'next/link'
import React from 'react'

const BlogsPreview = ({blogData}) => {
  return (
    <div className='p-4'>
      <div className='flex flex-col gap-8 py-6 px-8 border border-gray-500 rounded-lg shadow-sm shadow-white'>
        <div className='flex justify-between items-center'>
            <h1>Blogs</h1>
            <Link href={'/blog'}><p className='text-[#F96D00] underline'>View All</p></Link>
        </div>
        <div>
        <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Blog Description</th>
            <th className="px-4 py-2">Created By</th>
            <th className="px-4 py-2">Created Time</th>
          </tr>
        </thead>
        <tbody className=''>
          {blogData.map((blog, index) => (
            <tr key={index} className='border-b-2 border-gray-500'>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                <img
                  src={blog.images[0]}
                  alt="Blog"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            </td>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                {blog.title}
              </div>
            </td>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                {blog.createdBy}
              </div>
            </td>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                {blog.createdTime}
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  )
}

export default BlogsPreview
