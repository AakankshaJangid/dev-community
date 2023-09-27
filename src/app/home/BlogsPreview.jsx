import React from 'react'

const BlogsPreview = ({blogData}) => {
  return (
    <div className='p-4'>
      <div className='flex flex-col gap-8 py-6 px-8 border border-gray-500 rounded-lg shadow-sm shadow-white'>
        <div className='flex justify-between items-center'>
            <h1>Blogs</h1>
            <p>View All</p>
        </div>
        <div>
        <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Blog Description</th>
            <th className="px-4 py-2">Created By</th>
            <th className="px-4 py-2">Created Date</th>
          </tr>
        </thead>
        <tbody className=''>
          {blogData.map((blog, index) => (
            <tr key={index} className='border-b-2 border-gray-500'>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                <img
                  src={blog.img}
                  alt="Blog"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
            </td>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                {blog.description}
              </div>
            </td>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                {blog.createdBy}
              </div>
            </td>
            <td className="px-4 py-4">
              <div className="flex justify-center items-center">
                {blog.createdDate}
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
