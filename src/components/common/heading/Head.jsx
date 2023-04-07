import React from 'react'
import "./Head.css"

const head = () => {
  return (
      <div>
          <section className='head'>
              <div className="container flexSB d-flex flex-row justify-content-between align-items-center">
                  <div className="logo">
                      <h1>ACADEMIA</h1>
                      <span>ONLINE EDUCATION & LEARNING</span>
                  </div>
                  <div className="social ">
                  <i className ="fa-brands fa-facebook icon"></i>
                  <i className ="fa-brands fa-instagram icon"></i>
                  <i className ="fa-brands fa-twitter icon"></i>
                  <i className ="fa-brands fa-youtube icon"></i>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default head