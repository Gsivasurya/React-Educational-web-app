import React from 'react'
import About from './components/about/About'
import Blog from './components/allcourses/blog/Blog'
import CourseHome from './components/allcourses/CourseHome'

import Header from './components/common/heading/Header'
import Pricing from './components/pricing/Pricing'
import Footer from './components/pricing/Footer'
import Exa from './components/about/Exa'


// import {BrowserRouter as Router,Switch} from "react-router-dom";


const App = () => {
  return (
    <div>
      <div className="homesection">
      
      <Header />
      </div>
      <About />
      <CourseHome />
      <Blog />
      
      <Pricing />
      <Footer />
      <Exa/>
      
      
     
      
    </div>
  )
}

export default App


