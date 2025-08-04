import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate, Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';

function Navbar() {
  const { navigate, token } = useAppContext();

  return (
    <div className='sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md flex justify-between items-center py-5 px-6 sm:px-20 xl:px-32'>
      <Link to="/" className="flex items-center gap-2">
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text text-2xl font-bold">
          MindDraft
        </span>
      </Link>
      <button
        onClick={() => navigate('/admin')}
        className='group flex items-center gap-3 rounded-xl text-sm font-medium tracking-wide cursor-pointer bg-primary text-white px-6 sm:px-10 py-2.5 shadow-md hover:shadow-lg hover:bg-primary-dark transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30'
      >
        {token ? 'Dashboard' : 'Login'}
        <img
          src={assets.arrow}
          alt="arrow"
          className='w-3 transform group-hover:translate-x-1 transition duration-300'
        />
      </button>
    </div>
  );
}

export default Navbar;
