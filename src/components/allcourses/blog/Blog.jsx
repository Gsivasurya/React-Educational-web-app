import React from 'react'
import "./blog.css"

const Blog = () => {
  return (
      <div>
          <div id="blog">
              <div className="text-center mt-5">
                  <h6 className='text-info'>OUR BLOG</h6>
                  <h2 className='pb-3 mb-5'>Recent Form Blog</h2>
              </div>
              <div className="container">
                  <div className="row mb-5 justify-content-center">
                      <div className="col-lg-4 col-md-6 col-sm-12 ">
                          <div className='carditem m-1 d-flex flex-column shadow '>
                              <img className='image-fluid' src="https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png" alt="" />
                              <div className="carddetails d-flex flex-row justify-content-evenly p-3">
                                  <div className='details d-flex flex-row'>
                                      <i class="fa-solid fa-user icon"></i>
                                      <p>ADMIN</p>
                                  </div>
                                  <div className='details d-flex flex-row'>
                                  <i class="fa-solid fa-calendar-days icon"></i>
                                      <p>DEC,14,2022</p>
                                  </div>
                                  <div className='details d-flex flex-row'>
                                      <i className="fa-solid fa-comments icon "></i>
                                      <p className='text-info'>COMMENTS</p>
                                    </div>
                                 
                              </div>
                              <div className='cardtext '>
                              <h5>Build Your Dream Software & Engineer Career</h5>
                              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam. Corrupti minus blanditiis illum eum!</p>
                             </div>
                          </div>
                          
                      </div>

                      
                      <div className="col-lg-4 col-md-6 col-sm-12 ">
                          <div className='carditem m-1 d-flex flex-column shadow '>
                              <img className='image-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEF2GzKfcd7-mHnJuOVs6vNlm5soyoDoXxw&usqp=CAU" alt="" />
                              <div className="carddetails d-flex flex-row justify-content-evenly p-3">
                                  <div className='details d-flex flex-row'>
                                      <i class="fa-solid fa-user icon"></i>
                                      <p>ADMIN</p>
                                  </div>
                                  <div className='details d-flex flex-row'>
                                  <i class="fa-solid fa-calendar-days icon"></i>
                                      <p>DEC,14,2022</p>
                                  </div>
                                  <div className='details d-flex flex-row'>
                                      <i className="fa-solid fa-comments icon "></i>
                                      <p className='text-info'>COMMENTS</p>
                                    </div>
                                 
                              </div>
                              <div className='cardtext '>
                              <h5>Build Your Dream Software & Engineer Career</h5>
                              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam. Corrupti minus blanditiis illum eum!</p>
                             </div>
                          </div>
                          
                      </div>

                      <div className="col-lg-4 col-md-6 col-sm-12 ">
                          <div className='carditem m-1 d-flex flex-column shadow '>
                              <img className='image-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbAo1QjW3c3O3Fbtk37yCbmWmmUq5uIF00pRbs7y7CaYSJXCS_UMo1XxRFumWm1DTO7o&usqp=CAU" alt="" />
                              <div className="carddetails d-flex flex-row justify-content-evenly p-3">
                                  <div className='details d-flex flex-row'>
                                      <i class="fa-solid fa-user icon"></i>
                                      <p>ADMIN</p>
                                  </div>
                                  <div className='details d-flex flex-row'>
                                  <i class="fa-solid fa-calendar-days icon"></i>
                                      <p>DEC,14,2022</p>
                                  </div>
                                  <div className='details d-flex flex-row'>
                                      <i className="fa-solid fa-comments icon "></i>
                                      <p className='text-info'>COMMENTS</p>
                                    </div>
                                 
                              </div>
                              <div className='cardtext '>
                              <h5>Build Your Dream Software & Engineer Career</h5>
                              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ullam. Corrupti minus blanditiis illum eum!</p>
                             </div>
                          </div>
                          
                      </div>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Blog