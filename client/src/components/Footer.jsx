import React from 'react';
import { footer_data } from '../assets/assets';

function Footer() {
  return (
    <footer className='px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-white to-purple-50/30'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-purple-100'>
        {/* Left: Logo + Description */}
        <div className='max-w-[420px]'>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            MindDraft
          </h2>
          <p className='mt-6 leading-relaxed text-sm text-gray-600'>
            Transform your thoughts into compelling content with AI-powered assistance.
            Write, create, and share your ideas with the world through Minddraft's modern blogging platform.
          </p>
        </div>

        {/* Right: Footer Links */}
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-8 sm:gap-10'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='font-semibold text-base text-gray-900 mb-3 md:mb-5'>{section.title}</h3>
              <ul className='text-sm space-y-2'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className='text-gray-600 hover:text-purple-600 transition-all duration-200 ease-in-out'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center py-4">
        <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text font-semibold">
          © 2025 Minddraft. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
