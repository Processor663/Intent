import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../Header/Header.module.css'


let Header = () => {
      return (
        <>
          {['lg'].map((expand) => (
            <Navbar key={expand}  fixed="top" expand={expand} className={`mt-3 ${styles.navFont}`}>
              <Container >
                <Navbar.Brand href="#">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Team Cracker
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    
                    <Nav className='justify-content-center align-items-center flex-grow-1 pe-3'>
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">About</Nav.Link>
                      <Nav.Link href="#action2">How it Works</Nav.Link>
                      <Nav.Link href="#action2">Package and Pricing</Nav.Link>
                      <Nav.Link href="#action2">Faqs</Nav.Link>
                      <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>

                    <div className=' d-flex justify-content-center'>
                      <Button variant="primary" size="lg">Sign up now</Button>
                    </div>

                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
    }
    

export default Header;


 