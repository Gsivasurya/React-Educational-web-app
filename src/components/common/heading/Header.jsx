import { textAlign } from '@mui/system';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Head from './Head'
import "./Header.css"



function NavScrollExample() {
    return (
        <div>
            <Head/>
        <Navbar bg="light" expand="lg" className='container ' id='navbr'>
         
         <Container fluid>
           
           <Navbar.Toggle aria-controls="navbarScroll" />
           <Navbar.Collapse id="navbarScroll">
             <Nav
               className="me-auto my-2 my-lg-0"
               style={{ Height: '100%', textAlign:"center" }}
               navbarScroll
             >
               <Nav.Link href="#home" className='nvlink'>Home</Nav.Link>
               <Nav.Link href="#cources" className='nvlink'>All Courses</Nav.Link>
               <Nav.Link href="#about" className='nvlink'>About</Nav.Link>
               <Nav.Link href="#items" className='nvlink'>Item</Nav.Link>
               <Nav.Link href="#pricing" className='nvlink'>Pricing</Nav.Link>
               <Nav.Link href="#journal" className='nvlink'>Journal</Nav.Link>
               <Nav.Link href="#letter" className='nvlink'>contact</Nav.Link></Nav>
             
            </Navbar.Collapse>
            <div className=" startbt">
               
               <Button >GET CERTIFICATE</Button>
             </div>
            
          </Container>
          
        </Navbar>

        <div id='home'>
          <section className='hero'>
              <div className="sec">
              <div className="container">
                  <div className="row">
                      <div className='heading mt-3'>
                      <h4 className='p-sm-2'>WELCOME TO ACDAEIMIA</h4>
                      <h1 className='p-sm-2'>Best Online Education</h1>
                      </div>
                     
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero harum ducimus possimus! Repudiandae, tempore! Esse labore perspiciatis voluptas temporibus sed vero atque deserunt impedit quaerat, quasi accusamus adipisci? Quisquam?</p>
                  </div>
                  <div className="buttons ">
                      <button className='btn btn-outline-primary p-2 m-3'>GET STARTED NOW  <i class="fa-solid fa-arrow-right"> </i> </button>
                      <button className='btn btn-outline-success p-2 m-3'>VIEW COURCE  <i class="fa-solid fa-arrow-right"> </i> </button>
                  </div>
              </div>
             </div>
          </section>
    </div>
       
      </div>
      
     );
   }
   
     
export default NavScrollExample;