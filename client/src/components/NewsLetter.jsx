import React from 'react'

function NewsLetter() {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-4 my-32 px-4'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never miss a Blog!</h1>
      <p className='text-gray-500/70 pb-6 md:text-lg'>
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col md:flex-row items-stretch justify-between max-w-2xl w-full space-y-3 md:space-y-0'
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your mail id"
          required
          className='border border-gray-300 rounded-md md:rounded-r-none px-3 py-3 w-full text-gray-500 outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200'
        />
        <button
          type='submit'
          className='md:px-12 px-8 py-3 text-white bg-primary/80 hover:bg-primary transition-all duration-300 rounded-md md:rounded-l-none'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
