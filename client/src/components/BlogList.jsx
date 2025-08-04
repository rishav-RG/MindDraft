import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "framer-motion" // Fixed import
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

function BlogList() {
  const [menu, setMenu] = useState("All")
  const {blogs, input} = useAppContext();
  const filteredBlogs = () => {
  if (input === '') {
    return blogs;
  }

  return blogs.filter((blog) =>
    blog.title.toLowerCase().includes(input.toLowerCase()) ||
    blog.category.toLowerCase().includes(input.toLowerCase())
  );
};

  return (
    <div>
      {/* Category Filter */}
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative flex-wrap'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              className={`relative z-10 text-sm sm:text-base px-4 py-1 rounded-full transition-all duration-300 font-medium
                ${menu === item
                  ? 'text-white bg-primary shadow-md hover:shadow-lg'
                  : 'text-gray-500 hover:text-primary hover:bg-primary/10'}
              `}
              onClick={() => setMenu(item)}>
              {item}
              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className='absolute inset-0 bg-primary rounded-full -z-10'
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards Placeholder */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
       {filteredBlogs().filter((blog) => menu === "All" ? true : blog.category === menu ).
       map((blog) => <BlogCard key={blog._id} blog={blog}/>)
       }
      </div>
    </div>
  )
}

export default BlogList
