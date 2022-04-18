import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logos/logo.png';

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        sticky='top'
        bg='dark'
        variant='dark'
      >
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img height={30} src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/services'>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to='/reviews'>
                Reviews
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='/about'>
                About
              </Nav.Link>

              <Nav.Link as={Link} to='/login'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
