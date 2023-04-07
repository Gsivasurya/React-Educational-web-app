import React from 'react'
import { Rating } from '@mui/material'
import CourseCard from './CourseCard'
import "./courses.css"

const CourseHome = () => {
  return (
      <div id='items'>
          
          

          <div className='course-head '>
                <div className='text-center mt-5'>
                    <h5 className='text-info'>OUR COURSES</h5>
                    <h2> Explore Our People Online Courses</h2>
                </div>
              <div className="container">
                  <div className="row p-4 ">
                      <div className="  col-lg-4 col-mg-6 col-sm-12  d-flex flex-column  ">
                      <div className='cardbody card-a pt-5 pb-5 m-1 shadow' >
                          <div className='d-flex flex-row '>
                          <div className="card1 ">
                                <img  className='card-img1 ' src="data:image/png;base64,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" alt="" />
                            </div>
                             <div className='card-content'>
                                 <h3>Introducing To Software Enginner</h3>
                                 <Rating name="half-rating-read" defaultValue={2.5} precision={0.5}  />
                                 <div className='d-flex flex-row container-fluid  align-items-center'>
                                     <div className="sub-img">
                                         <img className="sub-img1 image-fluid" src="https://media.istockphoto.com/id/1269998782/photo/dark-silhouette-of-girl-on-a-white-background-the-concept-of-anonymity.jpg?s=612x612&w=0&k=20&c=BD1V1S2CwN2vUb_XaHSQ_en9Sf2m812QWbxmbrucFNQ=" alt=""  />
                                     </div>
                                     <div className='subimg-text'>
                                         <p>by john smith</p>
                                    </div>
                                 
                                 </div>
                                  <p className='text-info p-1'>50 lectures (190 hrs)</p>
                            </div>
                              
                                
                          </div>
                          <div>
                              <p className='text-center text-info ' style={{fontWeight:"bold"}}>$ 100 All Cources / $ 15 per month</p>
                              <div className="btn btn-outline-info justify-content-center d-grid m-3">ENROLL NOW</div>
                              </div>
                      </div>
                      </div>
                      
                      <div className="  col-lg-4 col-mg-6 col-sm-12  d-flex flex-column  ">
                          <div className='cardbody card-a pt-5 pb-5 m-1 shadow ' >
                          <div className='d-flex flex-row '>
                          <div className="card1 ">
                                <img  className='card-img1 ' src="data:image/png;base64,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" alt="" />
                            </div>
                             <div className='card-content'>
                                 <h3>Introducing To Software Enginner</h3>
                                 <Rating name="half-rating-read" defaultValue={2.5} precision={0.5}  />
                                 <div className='d-flex flex-row container-fluid  align-items-center'>
                                     <div className="sub-img">
                                         <img className="sub-img1 image-fluid" src="https://media.istockphoto.com/id/1269998782/photo/dark-silhouette-of-girl-on-a-white-background-the-concept-of-anonymity.jpg?s=612x612&w=0&k=20&c=BD1V1S2CwN2vUb_XaHSQ_en9Sf2m812QWbxmbrucFNQ=" alt=""  />
                                     </div>
                                     <div className='subimg-text'>
                                         <p>by john smith</p>
                                    </div>
                                 
                                 </div>
                                  <p className='text-info p-1'>50 lectures (190 hrs)</p>
                            </div>
                              
                                
                          </div>
                          <div>
                              <p className='text-center text-info ' style={{fontWeight:"bold"}}>$ 100 All Cources / $ 15 per month</p>
                              <div className="btn btn-outline-info justify-content-center d-grid m-3">ENROLL NOW</div>
                              </div>
                      </div>
                      </div>
                      
                      <div className="  col-lg-4 col-mg-6 col-sm-12 d-flex flex-column  ">
                          <div className='cardbody  card-a pt-5 pb-5 m-1 shadow'>
                          <div className='d-flex flex-row '>
                          <div className="card1 ">
                                <img  className='card-img1 ' src="data:image/png;base64,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" alt="" />
                            </div>
                             <div className='card-content'>
                                 <h3>Introducing To Software Enginner</h3>
                                 <Rating name="half-rating-read" defaultValue={2.5} precision={0.5}  />
                                 <div className='d-flex flex-row container-fluid  align-items-center'>
                                     <div className="sub-img">
                                         <img className="sub-img1 image-fluid" src="https://media.istockphoto.com/id/1269998782/photo/dark-silhouette-of-girl-on-a-white-background-the-concept-of-anonymity.jpg?s=612x612&w=0&k=20&c=BD1V1S2CwN2vUb_XaHSQ_en9Sf2m812QWbxmbrucFNQ=" alt=""  />
                                     </div>
                                     <div className='subimg-text'>
                                         <p>by john smith</p>
                                    </div>
                                 
                                 </div>
                                  <p className='text-info p-1'>50 lectures (190 hrs)</p>
                            </div>
                              
                                
                          </div>
                          <div>
                              <p className='text-center text-info ' style={{fontWeight:"bold"}}>$ 100 All Cources / $ 15 per month</p>
                              <div className="btn btn-outline-info justify-content-center d-grid m-3">ENROLL NOW</div>
                              </div>
                      </div>
                          </div>

                     

                      
                  </div>
                 
              </div>
          </div>
          <CourseCard/>
          
    </div>
  )
}

export default CourseHome