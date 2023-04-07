import React from 'react'
import './about.css'
import AWrapper from './AWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
      <div id='about'>
          <div className="container">
              <div className="row mt-4">
                  <div className="col-lg-6 col-md-6 col-sm-12  p-1 left">
                      <img src="https://media.istockphoto.com/id/1332113666/photo/young-businesswoman-using-digital-tablet.jpg?s=612x612&w=is&k=20&c=6BDU4uGl3qJo4DuQD0IX7MZlqIMTWSBFQrdepZ9REHQ=" alt="" className='image-fluid ' />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 right " >
                      <div className="container">
                          <h5 className='pt-3 text-info'>LEARN ANYTHING</h5>
                          <h1 >Benfits About Online Learning Expertise </h1>
                          
                          <div className='card-section  '>
                              <div className='carditems  d-flex flex-row justify-content-center align-items-center shadow mt-3 mb-3 p-2'>
                                  <div className='cards'>
                                  <lord-icon src="https://cdn.lordicon.com/hursldrn.json"trigger="morph"></lord-icon>
                                      
                                  </div>
                                  <div>
                                      <h6>Online cources</h6>
                                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, nobis voluptate veritatis error fugit accusantium?</p>
                                  </div>
                                 
                              </div>
                              <div className='carditems  d-flex flex-row justify-content-center align-items-center shadow mt-3 mb-3 p-2'>
                                  <div className='cards'>
                                      <lord-icon src="https://cdn.lordicon.com/qbxwelhw.json" trigger="morph" ></lord-icon>
                                      
                                  </div>
                                  <div>
                                      <h6>Earn A Certificates</h6>
                                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, nobis voluptate veritatis error fugit accusantium?</p>
                                  </div>
                                 
                              </div>
                              <div className='carditems  d-flex flex-row justify-content-center align-items-center shadow mt-3 mb-3 p-2'>
                                  <div className='cards'>
                                      <lord-icon src="https://cdn.lordicon.com/vtovymqf.json" trigger="morph" ></lord-icon>
                                      
                                  </div>
                                  <div>
                                      <h6>Learn With EXpect</h6>
                                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, nobis voluptate veritatis error fugit accusantium?</p>
                                  </div>
                                 
                              </div>
                              
                              
                          </div>
                      </div>
                      </div>
              </div>
          </div>
          <AWrapper/>
          
      </div>
      
  )
}

export default About