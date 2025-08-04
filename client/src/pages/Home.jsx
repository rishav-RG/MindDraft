import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function Home() {
   
  return (
    <>
    <Navbar/>
    <Header/>
    <BlogList/>
    <NewsLetter/>
    <Footer/>
    </>
        
    
  )
}

export default Home
