import React from 'react'

const Pricing = () => {
  return (
      <div>
          <div id="pricing">
              <div className="pricing-head text-center mt-5 mb-5">
                  <h5 className='text-info'>OUR PRICING</h5>
                  <h2 className='pb-4'>Pricing & packages</h2>
              </div>
              
              <div className="container">
                  <div className="row m-5">
                      <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="cardbody d-flex flex-column text-center p-4 m-1 shadow">
                              <h6>BASIC PLAN</h6>
                              <h1 className='pb-4 text-info'>$49k</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa fuga est debitis itaque. Iure?</p>
                              <button className='btn btn-outline-danger mt-3'>GET STARTED</button>
                          </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="cardbody d-flex flex-column text-center p-4 m-1 shadow">
                              <h6>BEGINNER PLAN</h6>
                              <h1 className='pb-4 text-info'>$79k</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa fuga est debitis itaque. Iure?</p>
                              <button className='btn btn-outline-danger mt-3'>GET STARTED</button>
                          </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="cardbody d-flex flex-column text-center p-4 m-1 shadow">
                              <h6>PREMIUM PLAN</h6>
                              <h1 className='pb-4 text-info'>$109k</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa fuga est debitis itaque. Iure?</p>
                              <button className='btn btn-outline-danger mt-3'>GET STARTED</button>
                          </div>
                      </div>

                      <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="cardbody d-flex flex-column text-center p-4 m-1 shadow">
                              <h6>ULTIMATE PLAN</h6>
                              <h1 className='pb-4 text-info'>$149k</h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsa fuga est debitis itaque. Iure?</p>
                              <button className='btn btn-outline-danger mt-3'>GET STARTED</button>
                          </div>
                      </div>

                      
                  </div>
              </div>
          </div>

          <div id="letter">
              <div className="container-fluid p-5 bg-info">
                  <div className="letter">
                      <div className="row d-flex justify-content-center align-items-center">
                          <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className='text-white '>
                                  <h4>Newsletter-Stay turn and get the leatest update</h4>
                                  <p className='text-white'>Far far away, behands the world mountains</p>
                              </div>
                              
                          </div>
                          <div className='col-lg-6 col-md-6 col-sm-12'>
                              <form action="" className='form-group'>
                                  <input type="email" className='form-control' name="MAILID" id="" placeholder='enter your mail adress' />
                                  
                              </form>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Pricing