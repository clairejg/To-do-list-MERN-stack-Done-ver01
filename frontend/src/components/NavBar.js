// import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () =>{

    return (
        <Navbar  bg="light" expand="lg">
          <Container>
              <Navbar.Collapse id="basic-navbar-nav">
             
                <div className="companyLogo"> 
                  {/* <img src={logo} className="companyImgLogo" alt="USA-flag" /> */}
                
                  <span class="logoTextName">To Do App</span>
                </div>
             
  
                <div className="MenuNavRightEnd">
                  <Nav className="me-auto">
  
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/todo">Make a reservation</Nav.Link>
              
                    
                  </Nav>  
                
                        {/* <div class="countryFlag">
                    
                        <img src={usaFlaglogo} className="flagLogo" alt="USA-flag" />
                        <span class="logoTextName">USA</span>
                     
                      </div > */}
                </div>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
      );












};

export default NavBar;
