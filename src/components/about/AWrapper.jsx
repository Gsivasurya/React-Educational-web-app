import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AWrapper = () => {
  return (
      <div id="awrapper">
          <div className='AWrapper container'>
          
          <div className="rapper row d-flex flex-wrap align-items-center pt-4 pb-4 ">
             <div className="col-lg-3 col-md-3 col-sm-6 d-flex flex-row justify-content-center align-items-center flex-row " >
                 <div className=''>
                 <FontAwesomeIcon icon="fa-brands fa-instagram fa-5x" />
                 </div>
                 <div>
                     <h1>3,000</h1>
                     <h5>SUCCESS STORIES</h5>
                 </div>

                 
             </div>

             <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center flex-row " >
                 <div className=''>
                 <i class="fa-brands fa-instagram"></i>
                 </div>
                 <div>
                     <h1>320</h1>
                     <h5>TUSTER TOTURS</h5>
                 </div>

                 
             </div>

             <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center flex-row " >
                 <div className=''>
                 <lord-icon src="https://cdn.lordicon.com/vtovymqf.json" trigger="morph" ></lord-icon>
                 </div>
                 <div>
                     <h1>1,000</h1>
                     <h5>SCHEDULED</h5>
                 </div>

                 
             </div>

             <div className="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center flex-row " >
                 <div className=''>
                 <lord-icon src="https://cdn.lordicon.com/vtovymqf.json" trigger="morph" ></lord-icon>
                 </div>
                 <div>
                     <h1>587</h1>
                     <h5>COURCES</h5>
                 </div>

                 
             </div>
            
         </div>
       </div>
      </div>
  )
}

export default AWrapper